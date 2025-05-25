# Problem #4: Gantt Chart Data Preparation

## Problem

Convert project phases into a Gantt chart-friendly format, including each phase's duration in days.

## Explanation

- For each phase, calculate the number of days between `startDate` and `endDate` (inclusive).
- Add a `duration` property to each phase object.

## Input

An array of project phases, for example:

```js
const phases = [
  { name: "Excavation", startDate: "2024-05-01", endDate: "2024-05-03" },
  { name: "Construction", startDate: "2024-06-04", endDate: "2024-09-02" },
];
```

## Output

An array of phase objects, each with a `duration` property (in days).
