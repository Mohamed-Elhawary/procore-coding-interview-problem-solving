# Problem #13: Meeting Scheduling Conflicts

## Problem

Given a set of meeting times and room assignments, check for double-bookings.

## Explanation

- Each meeting has a `room`, `startTime`, and `endTime`.
- Return a list of meetings that overlap in the same room.

## Input

```js
const meetings = [
  { room: "101", startTime: "09:00", endTime: "10:00" },
  { room: "101", startTime: "09:30", endTime: "11:00" },
  { room: "102", startTime: "09:00", endTime: "10:00" },
  { room: "101", startTime: "11:00", endTime: "12:00" },
  { room: "101", startTime: "09:45", endTime: "10:15" },
];
```

## Output

```js
[
  { room: "101", startTime: "09:30", endTime: "11:00" },
  { room: "101", startTime: "09:45", endTime: "10:15" },
];
```
