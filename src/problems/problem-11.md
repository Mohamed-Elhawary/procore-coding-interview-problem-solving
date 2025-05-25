# Problem #11: Permission-Based Action Filter

## Problem

Filter a list of possible actions on a document by a user’s role and permissions.

## Explanation

- Each action has allowed roles.
- Given a user’s role, return only allowed actions.

## Input

```js
const actions = [
  { name: "edit", roles: ["admin", "editor"] },
  { name: "view", roles: ["admin", "editor", "viewer"] },
  { name: "delete", roles: ["admin"] },
];
const userRole = "editor";
```

## Output

```js
[ { name: "edit", ... }, { name: "view", ... } ]
```
