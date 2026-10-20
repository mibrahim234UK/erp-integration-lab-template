#!/usr/bin/env node
// Validates the practice mapping files and documentation links.
// No dependencies: runs on any Node.js 20+ installation.
// Exit code 0 = all checks passed, 1 = at least one problem found.

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve, extname } from "node:path";

const root = resolve(process.argv[2] ?? ".");
const problems = [];
const problem = (file, msg) => problems.push(`${file}: ${msg}`);

// ---------- 1. Mapping rules ----------
const ALLOWED_TYPES = ["string", "integer", "decimal", "date", "boolean"];
const ALLOWED_STATUS = ["draft", "in-review", "approved", "retired"];
const ALLOWED_BASIS = ["ordered", "delivered", "invoiced"];
const SEMVER = /^\d+\.\d+\.\d+$/;

const mappingDir = join(root, "mappings");
const mappingFiles = existsSync(mappingDir)
  ? readdirSync(mappingDir).filter((f) => extname(f) === ".json")
  : [];

if (mappingFiles.length === 0) problem("mappings/", "no mapping files found");

const seenIds = new Set();
for (const name of mappingFiles) {
  const file = `mappings/${name}`;
  let m;
  try {
    m = JSON.parse(readFileSync(join(mappingDir, name), "utf8"));
  } catch (e) {
    problem(file, `invalid JSON (${e.message})`);
    continue;
  }

  for (const key of ["id", "title", "version", "owner", "status", "fields"]) {
    if (m[key] === undefined || m[key] === "") problem(file, `missing "${key}"`);
  }
  if (m.id) {
    if (seenIds.has(m.id)) problem(file, `duplicate mapping id ${m.id}`);
    seenIds.add(m.id);
  }
  if (m.version && !SEMVER.test(m.version)) problem(file, `version "${m.version}" is not MAJOR.MINOR.PATCH`);
  if (m.status && !ALLOWED_STATUS.includes(m.status)) problem(file, `status "${m.status}" not in ${ALLOWED_STATUS.join(", ")}`);

  if (!Array.isArray(m.fields) || m.fields.length === 0) {
    problem(file, `"fields" must be a non-empty list`);
    continue;
  }

  const targets = new Set();
  m.fields.forEach((f, i) => {
    const where = `field[${i}]${f?.target ? ` ${f.target}` : ""}`;
    if (!f.target) problem(file, `${where}: missing "target"`);
    if (!f.source) problem(file, `${where}: missing "source"`);
    if (!ALLOWED_TYPES.includes(f.type)) problem(file, `${where}: type "${f.type}" not in ${ALLOWED_TYPES.join(", ")}`);
    if (typeof f.required !== "boolean") problem(file, `${where}: "required" must be true or false`);
    if (f.target) {
      if (targets.has(f.target)) problem(file, `${where}: duplicate target field`);
      targets.add(f.target);
    }
    // The business rule from Level 1: a quantity must say which quantity it is.
    if (/quantity/i.test(f.target ?? "")) {
      if (!ALLOWED_BASIS.includes(f.quantityBasis)) {
        problem(file, `${where}: quantity fields need "quantityBasis" = ${ALLOWED_BASIS.join(" | ")}`);
      }
    }
  });
}

// ---------- 2. Relative links in Markdown ----------
function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === ".git" || entry === "node_modules" || entry === "dist") continue;
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (extname(p) === ".md") out.push(p);
  }
  return out;
}

const LINK = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
for (const mdPath of walk(root)) {
  const rel = mdPath.slice(root.length + 1);
  const text = readFileSync(mdPath, "utf8");
  for (const [, target] of text.matchAll(LINK)) {
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const clean = decodeURIComponent(target.split("#")[0]);
    if (!clean) continue;
    if (!existsSync(resolve(dirname(mdPath), clean))) problem(rel, `broken link -> ${target}`);
  }
}

// ---------- Result ----------
if (problems.length) {
  console.error(`Validation failed with ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`Validation passed: ${mappingFiles.length} mapping file(s), Markdown links OK.`);
