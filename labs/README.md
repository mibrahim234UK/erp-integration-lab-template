# Labs: GitHub for ERP Teams (Level 2)

Work in your own **public** copy of this template. Each lab ends with evidence you can point to.
Full explanations are in the Beyond ERP Level 2 learning pack.

| Lab | Topic | Time |
|---|---|---|
| 1 | Repository standards as code | 15 min |
| 2 | Rulesets that enforce | 15 min |
| 3 | Real CI checks | 20 min |
| 4 | Environments and approvals | 15 min |
| 5 | Git beyond the basics | 25 min |
| 6 | Releases and versioning | 15 min |
| 7 | Supply-chain security | 15 min |
| 8 | Copilot as a governed teammate | 20 min (Copilot plan required) |
| Capstone | Governed release of a mapping change | 30 min |

---

## Lab 1: Repository standards as code

1. Replace the usernames in `.github/CODEOWNERS` and commit.
2. Open **Issues > New issue**. Notice you can only choose the two forms: blank issues are switched off in `config.yml`.
3. Create a **Change request**: "Add delivery date to the invoice mapping", with two acceptance criteria.
4. Open any pull request and confirm the description is pre-filled from the PR template.

**Evidence:** an issue created from a form, with required fields filled.

## Lab 2: Rulesets that enforce

1. Go to **Settings > Rules > Rulesets**.
2. Import `.github/rulesets/protect-main.json`, or create the same rules by hand:
   block deletion and force pushes, require a pull request, require the `validate` status check.
3. Try to commit directly to `main` in the web editor. GitHub should stop you and offer a branch instead.
4. Working with a partner? Raise required approvals to 1 and turn on **Require review from Code Owners**.

**Evidence:** the rejected direct change, and the active ruleset.

## Lab 3: Real CI checks

1. Create branch `mapping/delivery-date`. In `mappings/invoice-line.json`, add a field `DeliveredQuantity` **without** `quantityBasis`.
2. Open a PR. The `validate` check fails and the ruleset blocks the merge.
3. Open the failed run, find the step, and read the message.
4. Add `"quantityBasis": "delivered"`, commit to the same branch, and watch the check pass.

**Evidence:** one PR showing a failed run, then a passing run.

## Lab 4: Environments and approvals

1. **Settings > Environments**: create `test` (no rules) and `production`.
2. On `production`, add yourself (or a partner) as a **required reviewer**.
3. **Actions > Deploy (simulated) > Run workflow** with target `test`: it runs straight through.
4. Run it again with `production`: the `deploy` job waits for approval. Approve it and read the log.

**Evidence:** a run that paused for approval before deploying.

## Lab 5: Git beyond the basics

1. Compare the three merge buttons on a small PR: **merge commit**, **squash**, **rebase**. Decide which your team should allow.
2. Create `release/1.x` from `main`. Make a fix on `main` through a PR.
3. Locally: `git switch release/1.x`, then `git cherry-pick <commit>`, then push.
4. Use `git log --oneline --graph --all` to see both lines, and `git revert` on a practice commit.

**Evidence:** the same fix present on `main` and on `release/1.x`.

## Lab 6: Releases and versioning

1. Add labels `mapping`, `defect`, `documentation`, `automation` to recent PRs.
2. Tag the latest `main` commit: `git tag v1.1.0` then `git push origin v1.1.0`.
3. Watch the **Release** workflow. Open **Releases**: notes are grouped by label and the ZIP is attached.

**Evidence:** release `v1.1.0` with generated notes and an asset.

## Lab 7: Supply-chain security

1. **Settings > Advanced Security** (or **Code security**): review what is on for your public repo.
2. Check the **Insights > Dependency graph** and the Dependabot configuration.
3. Leaked-secret drill: read the GitHub guidance on push protection, then write the three steps your team takes if a real credential is committed. Do not commit a real secret.

**Evidence:** your team's three-step response.

## Lab 8: Copilot as a governed teammate

Requires a GitHub Copilot plan that includes these features.

1. Read `.github/copilot-instructions.md`.
2. Create an issue: "Add CurrencyCode validation to the mapping rules". Assign it to Copilot.
3. Review the pull request it opens exactly as you would a colleague's: ruleset, CI and review all still apply.
4. On another PR, request a review from Copilot and compare its comments with your own.

**Evidence:** a Copilot-authored PR that passed the same gate as yours.

## Capstone: governed release of a mapping change

Issue form > branch > PR with code-owner review > `validate` passes > merge > simulated `production` deployment with approval > tag `v1.2.0` > release with notes.
Then repeat it with the change written by Copilot.

**Success:** someone else can trace the release back to the request, the review and the evidence.
