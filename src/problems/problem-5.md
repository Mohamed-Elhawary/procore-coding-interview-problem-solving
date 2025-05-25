# Problem #5: Daily Log Summary

## Problem

Summarize the total hours worked by each worker.

## Explanation

- For each daily log entry, add up the `hoursWorked` for each `workerId`.
- Produce a summary of total hours per worker.

## Input

An array of daily log entries, for example:

```js
const logs = [
  { workerId: 1, hoursWorked: 8, date: "2024-05-01" },
  { workerId: 1, hoursWorked: 4, date: "2024-05-02" },
  { workerId: 2, hoursWorked: 5, date: "2024-05-01" },
];
```

## Output

An object mapping each `workerId` to the total hours they worked.
