# Problem #1: Project Overlap Checker

## Problem

Given a list of project objects, each with a `startDate` and `endDate`, implement a function to determine if any of the projects overlap in time.

## Explanation

Two projects are considered to overlap if:

- The start date of one project is **before** the end date of another project.
- The end date of the first project is **after** the start date of the other project.

## Input

An array of project objects, for example:

```js
const projects = [
  { name: "Project A", startDate: "2024-01-01", endDate: "2024-02-01" },
  { name: "Project B", startDate: "2024-01-20", endDate: "2024-03-01" },
];
```

## Output

The function should return `true` if any projects overlap, and `false` otherwise.
