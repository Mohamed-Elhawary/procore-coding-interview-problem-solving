# Change Order Tracking

## Problem

Compare two versions of a project’s task list and return an array of changes: which tasks were added, removed, or modified.

## Explanation

- Receive two arrays (old and new task lists). Each task has a unique `id`.
- If a task appears in the new list but not in the old, it’s "added".
- If it’s in the old but not the new, it’s "removed".
- If the `id` exists in both, but some properties (e.g. `name` or `status`) changed, it’s "modified".

## Input

```js
const oldTasks = [
  { id: 1, name: "Survey", status: "complete" },
  { id: 2, name: "Excavate", status: "pending" },
];

const newTasks = [
  { id: 2, name: "Excavate", status: "complete" },
  { id: 3, name: "Pour Concrete", status: "pending" },
];
```

## Output

```js
[
  { type: "removed", task: { id: 1, name: "Survey", status: "complete" } },
  { type: "modified", task: { id: 2, name: "Excavate", status: "complete" } },
  { type: "added", task: { id: 3, name: "Pour Concrete", status: "pending" } },
];
```
