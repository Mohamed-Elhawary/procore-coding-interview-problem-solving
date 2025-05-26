# Problem #17: Punch List Completion Rate

## Problem

Given punch list items (each with a completed status), calculate completion percentage per category.

## Explanation

- Each item has a `category` and `completed` boolean.
- Return completion rate for each category.

## Input

```js
const items = [
  { category: "Electrical", completed: true },
  { category: "Electrical", completed: false },
  { category: "Plumbing", completed: true },
];
```

## Output

```js
{ Electrical: 50, Plumbing: 100 }
```
