# Project #15: Multi-Site Project Summary

## Problem

Given projects across multiple sites, aggregate the data to show progress and budget by site.

## Explanation

- Each project has a `site`, `progress`, and `budget`.
- Return an object with totals per site.

## Input

```js
const projects = [
  { site: "East", progress: 50, budget: 10000 },
  { site: "West", progress: 30, budget: 8000 },
  { site: "East", progress: 20, budget: 4000 },
];
```

## Output

```js
{
  East: { totalProgress: 70, totalBudget: 14000 },
  West: { totalProgress: 30, totalBudget: 8000 }
}
```
