# Problem #8: Cost Calculation

## Problem

Return the total cost and per-category cost from a list of project expenses.

## Explanation

- Add up the `amount` for all expenses to get the total.
- For each `category`, sum up its total as well.

## Input

An array of expenses, for example:

```js
const expenses = [
  { category: "Materials", amount: 100 },
  { category: "Labor", amount: 200 },
  { category: "Materials", amount: 50 },
];
```

## Output

An object: `{ total, byCategory }`  
Example: `{ total: 350, byCategory: { Materials: 150, Labor: 200 } }`
