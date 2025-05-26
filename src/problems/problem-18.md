# Problem #18: Contact Directory Search

## Problem

Implement a fuzzy search on a directory of people (by name, company, or role).

## Explanation

- Given a search term, return contacts whose name, company, or role includes the term (case-insensitive).

## Input

```js
const contacts = [
  { name: "Alice", company: "BuildCo", role: "Manager" },
  { name: "Bob", company: "PlanIt", role: "Engineer" },
];

const searchTerm = "plan";
```

## Output

```js
[{ name: "Bob", company: "PlanIt", role: "Engineer" }];
```
