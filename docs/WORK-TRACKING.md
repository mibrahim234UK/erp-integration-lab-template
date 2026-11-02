# Shared work tracking workflow

Effective 2026-11-02. T007 replaces the old task-register update discipline.
Codex, Claude and other contributors use this document for repository maintenance.
It governs planning and progress tracking; existing product requirements, testing,
privacy/security, explicit approval and DEV-before-main controls remain in force.

## Find the existing work first

1. Read the current record and activity in [MyWork](https://mywork.beyonderp.cloud)
   through the supported native connector or authenticated application before
   changing it. Search the existing personal records and historical source records
   by original ID, title and issue URL. Do not treat a dated import as live status.
2. Ideas and discussions start in MyWork and do not need a repository. Reuse the
   canonical record when discussion becomes development. For genuinely new work,
   save one MyWork record with the problem, scope, owner, acceptance and next action.
3. For development, find or create the relevant GitHub issue and link it to the
   existing MyWork record. If work starts from an existing issue, resolve its
   canonical MyWork record first; create a record only after checking for duplicates.
   One cross-repository task can link several repository issues and PRs without
   becoming several independent MyWork tasks. Do not create a new issue for work
   already covered by an existing issue.
4. Keep permanent `PC-*` IDs, `MW-*` display aliases, historical `Txxx`, YAFA,
   HMD/EST and other original IDs and source links. Use the IDs returned by the
   service; never calculate a next T/MW number, rename an identity, or invent an
   alias. An imported record can remain canonical: use its supported activity
   comment when personal-record edits do not apply. Do not create a duplicate
   personal record merely to make a historical item editable.

## Save progress and evidence

- MyWork owns human-readable progress, blockers, decisions, responsibility and
  next action. Record meaningful progress during work and at handoff, with the
  original task identity and current status/priority when known. Do not infer
  current priority or assignment from an old register or issue snapshot.
- GitHub owns code, test results, commits, reviews and PR evidence. Reference the
  canonical task and issue in development commits/PRs; link that evidence from
  MyWork. Keep private MyWork discussion, employer/client data and secrets out of
  public issues and commits. Link only information the destination may receive.
- Read before writing; use current revisions and supported conflict checks. On
  conflict, reread and reconcile without overwriting another contributor's update.
  Use the same request ID only to retry the identical request. After every saved
  update or link, independently read it back and confirm the record identity and
  intended change. A tool invocation or a drafted note is not proof of persistence.
- Describe status honestly using the service's supported values: pending/planned
  means work has not started; working means active work; blocked names the missing
  dependency; ready to review means implementation/evidence awaits review;
  completed requires the agreed acceptance and required owner approvals. A local
  commit, green test, merged PR and deployed release are different facts. Record
  what was tested, where it ran/deployed, and what remains unverified. Comments on
  historical records do not silently update imported status or acceptance.

## If access is unavailable

Continue independent authorized local work. Save a local **pending MyWork update**
in the task workspace outside tracked repository files, containing known IDs,
issue links, intended text, actual evidence, time and the access blocker. Report
its path and that it is unsaved in MyWork. This is a temporary retry note, not a
second register. Restore access through the supported approval flow; then reread,
deduplicate, save once and verify readback. Do not silently claim a saved task or
create a substitute record. If GitHub linking is blocked, report that link as pending.

## Historical registers and authority

Existing Markdown registers, mirrors, task lists and dated planning snapshots are
historical references. Preserve their original rows, IDs, links and audit history;
do not require status updates to them or allocate new tasks there. Consult them to
resolve old scope and acceptance without treating their status as current. Technical
evidence documents and architectural decisions remain useful GitHub evidence; link
new decisions from MyWork without recreating a parallel task-status system.

These instructions do not synchronize MyWork, GitHub Projects, issues or Markdown.
Existing automation is not proof of synchronization or permission to dispatch it.
Do not send unsolicited messages, mention assistants to trigger work, grant access,
change credentials/rulesets, push, merge, publish or deploy merely to satisfy tracking.
Use the authorization required for the exact action and destination. Preserve
existing branch, DEV/staging, test, security and owner acceptance gates; record
pending approval instead of bypassing them. Do not modify MyWork's app or schema
as a side effect of repository tracking work.

## Template boundary

This workflow applies to maintenance of the owner's source repository. Learners and third-party template copies are not required to access the owner's private MyWork workspace. The fictional issue/PR labs and their invented data remain unchanged.
