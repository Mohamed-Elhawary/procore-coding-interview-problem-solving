# Problem #20: Daily Crew Attendance Tracker

## Problem

Given an array of attendance records for different workers and days, return a summary showing, for each date, how many unique workers were present.

## Explanation

- Each record includes a worker’s name and a date.
- Some workers may appear more than once per day (multiple check-ins); only count each worker once per day.
- Return an object where each key is a date and each value is the count of unique workers present that day.

## Input

```js
const attendance = [
  { worker: "Alice", date: "2024-06-01" },
  { worker: "Bob", date: "2024-06-01" },
  { worker: "Alice", date: "2024-06-01" },
  { worker: "Charlie", date: "2024-06-02" },
  { worker: "Alice", date: "2024-06-02" },
];
```

## Output

```js
{
  "2024-06-01": 2,
  "2024-06-02": 2
}
```
