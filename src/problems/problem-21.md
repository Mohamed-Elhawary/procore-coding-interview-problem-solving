# Problem #21: Cheapest Worker Assignment

## Problem

Given an array of workers (each with a list of trades they can do and a cost), and an array of required trades, assign to each trade the cheapest available worker who has not already been assigned to another trade. If no worker can do a trade, that trade remains unassigned.

## Explanation

- For each trade in the `trades` array:
  - Find all workers who can do the trade and have **not been assigned** to another trade.
  - Assign the **cheapest** such worker to the trade.
  - A worker can be assigned only once.
  - If no available worker can do a trade, leave it unassigned.
  - Return and Array of the assigned workers.

## Input

```js
const workers = [
  { email: "mo@sd.com", trades: ["cement", "bricks"], cost: 60 },
  { email: "ali@sd.com", trades: ["cutting", "cement"], cost: 80 },
  { email: "sara@sd.com", trades: ["bricks", "cutting"], cost: 70 },
];

const trades = ["cement", "bricks", "cutting"];
```

## Output

```js
["mo@sd.com", "sara@sd.com", "ali@sd.com"];
```
