# ADR 0001: Invoice quantity basis

- **Status:** Accepted
- **Owner:** integration-owner (replace with your name)
- **Date:** 2026-10-20

## Context

The mapping did not say whether `Quantity` meant ordered, delivered or invoiced quantity.
Partial invoices made the difference visible: ordered 10, invoiced 4.

## Options

1. Ordered quantity
2. Delivered quantity
3. Invoiced quantity

## Decision

Use the invoiced quantity, because the target is an invoice line.

## Consequences

- CI now rejects any quantity field without a `quantityBasis`.
- Matching against receipts is a separate rule, not part of this mapping.
