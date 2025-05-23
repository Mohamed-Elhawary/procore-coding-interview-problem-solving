# Document Approval Workflow

## Problem

Determine document approval status from a sequence of approvals.

## Explanation

- If any approval step is `"rejected"`, the status is `"rejected"`.
- If all steps are `"approved"`, the status is `"approved"`.
- Otherwise, the status is `"pending"`.

## Input

An array representing the approval status at each step, for example:

```js
const approvalSteps = ["approved", "pending", "approved"];
```

## Output

A string: either `"approved"`, `"pending"`, or `"rejected"`.
