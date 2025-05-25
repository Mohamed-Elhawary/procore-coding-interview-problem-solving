# Problem #3: Materials Stock Alert

## Problem

Return all materials whose quantity is below a given threshold.

## Explanation

- Loop through the inventory.
- If a material's quantity is less than the threshold, include its name in the result.

## Input

An array of inventory items and a threshold, for example:

```js
const inventory = [
  { name: "Cement", quantity: 40 },
  { name: "Bricks", quantity: 200 },
];

const threshold = 100;
```

## Output

An array of material names whose quantity is below the threshold.
