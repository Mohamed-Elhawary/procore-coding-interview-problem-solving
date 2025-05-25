# Problem #10: RFIs (Request For Information) Status Report

## Problem

Given a list of RFIs, count how many are open, closed, or pending.

## Explanation

- Each RFI has a `status` ("open", "closed", "pending").
- Return an object with a count for each status.

## Input

```js
const rfis = [
  { id: 1, status: "open" },
  { id: 2, status: "pending" },
  { id: 3, status: "closed" },
  { id: 4, status: "open" },
];
```

## Output

```js
{ open: 2, pending: 1, closed: 1 }
```
