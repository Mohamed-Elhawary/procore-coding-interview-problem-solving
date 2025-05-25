# Problem #12: Duplicate Document Detection

## Problem

Given a list of document file names and hashes, detect and return duplicates.

## Explanation

- If two documents have the same hash, they’re duplicates.
- Return an array of duplicate file names.

## Input

```js
const documents = [
  { name: "plan1.pdf", hash: "abc123" },
  { name: "plan2.pdf", hash: "def456" },
  { name: "plan1_copy.pdf", hash: "abc123" },
];
```

## Output

```js
["plan1_copy.pdf"];
```
