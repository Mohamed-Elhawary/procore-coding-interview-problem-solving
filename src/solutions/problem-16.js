// Problem #16 Solution: Attachment File Type Filter

function filterFilesByType(files, allowedTypes) {
  return files.filter((file) => {
    return allowedTypes.some((type) => file.name.endsWith(type));
  });
}

const files = [
  { name: "plan.pdf" },
  { name: "photo.jpg" },
  { name: "archive.zip" },
];

const allowedTypes = [".pdf", ".jpg", ".png"];

console.log("Problem #16 Output:", filterFilesByType(files, allowedTypes)); // [ { name: "plan.pdf" }, { name: "photo.jpg" } ]
