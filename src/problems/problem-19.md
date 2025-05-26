# Problem #19: Safety Incident Tracker

## Problem

Track safety incidents and produce a report of incidents per month, by severity.

## Explanation

- Each incident has a `date` (YYYY-MM-DD) and `severity`.
- Return an object: for each month, a count of each severity.

## Input

```js
const incidents = [
  { date: "2024-06-01", severity: "high" },
  { date: "2024-06-15", severity: "low" },
  { date: "2024-07-01", severity: "medium" },
];
```

## Output

```js
{
  "2024-06": { high: 1, low: 1 },
  "2024-07": { medium: 1 }
}
```
