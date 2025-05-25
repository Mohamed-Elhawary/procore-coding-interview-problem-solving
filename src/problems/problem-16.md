# Problem #16: Attachment File Type Filter

## Problem

Given a list of file attachments, filter out files that are not allowed (e.g., only PDFs and images).

## Explanation

- Given an allowed set of file extensions, return only allowed files.

## Input

```js
const files = [
  { name: "plan.pdf" },
  { name: "photo.jpg" },
  { name: "archive.zip" },
];

const allowedTypes = [".pdf", ".jpg", ".png"];
```

## Output

```js
[{ name: "plan.pdf" }, { name: "photo.jpg" }];
```
