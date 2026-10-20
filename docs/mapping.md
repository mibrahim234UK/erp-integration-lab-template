# Invoice line mapping

> Practice document. Every name, field and quantity here is invented.

## Purpose

Describes how the fictional supplier portal sends invoice lines to the fictional ERP.
The machine-readable version is [`mappings/invoice-line.json`](../mappings/invoice-line.json).
CI checks that file on every pull request.

## Quantity rule

The `Quantity` target uses the **invoiced** quantity.

| Ordered | Delivered | Invoiced | Value sent |
|---|---|---|---|
| 10 | 6 | 4 | 4 |

Why: the decision is recorded in [ADR 0001](decisions/0001-invoice-quantity-basis.md).

## Assumptions

- Partial invoices are allowed.
- Price and currency come from the invoice header and line, not the purchase order.
- A business owner must confirm these rules before any real use.
