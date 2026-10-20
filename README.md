# ERP integration lab: governed delivery template

A practice repository for **Beyond ERP: GitHub for ERP Teams (Level 2)**.
It continues the fictional `erp-integration-lab` scenario from
[Level 1: GitHub for Beginners](https://www.beyonderp.cloud/github-learning.html).

Everything here is invented. Nothing deploys to a real system.

## Use it

1. Select **Use this template** > **Create a new repository**.
2. Make your copy **public** so every lab works on GitHub Free at no cost.
3. Replace `@mibrahim234UK` in [`.github/CODEOWNERS`](.github/CODEOWNERS) with your username.
4. Follow the labs in [`labs/README.md`](labs/README.md).

A template copy does not bring rulesets or environments with it.
You create those yourself in Labs 2 and 4. That is part of the learning.

## What is inside

| Path | Purpose | Lab |
|---|---|---|
| [`.github/ISSUE_TEMPLATE/`](.github/ISSUE_TEMPLATE/) | Issue forms for change requests and defects | 1 |
| [`.github/pull_request_template.md`](.github/pull_request_template.md) | PR description structure | 1 |
| [`.github/CODEOWNERS`](.github/CODEOWNERS) | Automatic review requests by path | 1, 2 |
| [`.github/rulesets/protect-main.json`](.github/rulesets/protect-main.json) | Ruleset you can import to protect `main` | 2 |
| [`.github/workflows/ci.yml`](.github/workflows/ci.yml) | Validates mappings and Markdown links on every PR | 3 |
| [`.github/workflows/deploy-docs.yml`](.github/workflows/deploy-docs.yml) | Simulated deployment through `test` and `production` environments | 4 |
| [`.github/workflows/release.yml`](.github/workflows/release.yml) | Packages a release with generated notes when you push a version tag | 6 |
| [`.github/release.yml`](.github/release.yml) | Release-note categories by label | 6 |
| [`.github/dependabot.yml`](.github/dependabot.yml) | Keeps workflow actions up to date | 7 |
| [`.github/copilot-instructions.md`](.github/copilot-instructions.md) | Repository rules for GitHub Copilot | 8 |
| [`mappings/invoice-line.json`](mappings/invoice-line.json) | The practice mapping | all |
| [`docs/`](docs/) | Mapping description and decision record | all |
| [`scripts/validate.mjs`](scripts/validate.mjs) | The check CI runs. No dependencies | 3 |

## Run the check locally (optional)

```bash
node scripts/validate.mjs
```

## Scope

Learning material by Mamdouh Ibrahim, [Beyond ERP](https://www.beyonderp.cloud).
Independent resource, not a GitHub or Microsoft product. GitHub features and plan
availability change: check the linked GitHub documentation before relying on them.

Licensed under the [MIT License](LICENSE).
