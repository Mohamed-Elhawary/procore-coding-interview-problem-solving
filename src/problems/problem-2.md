# Problem #2: Resource Allocation

## Problem

Assign each task to a worker who has the required skill.

## Explanation

- Each task has a `requiredSkill`.
- Each worker has a `skills` array (the set of skills they possess).
- Your goal is to map each task to a worker who has the skill required for that task.
- If no worker is available for a task, indicate that the task is unassigned.

## Input

An array of tasks and workers, for example:

```js
const tasks = [
  { id: 1, name: "Welding", requiredSkill: "welding" },
  { id: 2, name: "Painting", requiredSkill: "painting" },
];
const workers = [
  { id: 1, name: "Alice", skills: ["welding", "carpentry"] },
  { id: 2, name: "Bob", skills: ["painting"] },
];
```

## Output

A mapping of each task to a worker who has the required skill.  
If multiple workers have the required skill, you can assign any of them.  
If no worker is available for a task, indicate that the task is unassigned (e.g., by assigning `null`).
