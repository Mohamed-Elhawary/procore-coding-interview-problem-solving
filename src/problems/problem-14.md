# Problem #14: Field Input Validation

## Problem

Write a function to validate form fields for creating a new project (e.g., required fields, valid dates, unique project name).

## Explanation

- Check that all required fields are present.
- Dates are valid.
- Project name is unique.


## Input

```js
const formData = { name: "Project X", startDate: "2024-06-01", endDate: "2024-06-10" };

const existingProjects = [ { name: "Project Y" } ];
```

## Output

```js
{ valid: true, errors: [] }
```
