# Instructions for GitHub Copilot in this repository

This is a learning repository for ERP integration documentation. All data is invented.

- Never add real customer, supplier or employee data, or any credential.
- Every quantity field in `mappings/*.json` must have a `quantityBasis` of `ordered`, `delivered` or `invoiced`.
- When a business rule changes, update `docs/mapping.md` and add or update an ADR in `docs/decisions/`.
- Run `node scripts/validate.mjs` and report its actual output in the pull request.
- Keep changes small and limited to the files the issue names. Do not edit workflows unless asked.
- State assumptions separately from facts. Do not invent Dynamics 365 or other product capabilities.
