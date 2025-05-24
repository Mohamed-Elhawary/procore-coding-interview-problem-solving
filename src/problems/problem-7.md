# Task Dependencies (Topological Sort)

## Problem

Return a valid execution order for tasks given their dependencies.

## Explanation

- Each task has a list of `dependsOn` task ids.
- Return an array with a valid order for executing all tasks (topological sort).

## Input

An array of tasks, for example:

```js
const tasks = [
  { id: 'A', dependsOn: ['B', 'C']},
  { id: 'B', dependsOn: ['C']},
  { id: 'C', dependsOn: []},
];
```

## Output

An array of task ids in a valid execution order.
