// Problem #12 Solution: Duplicate Document Detection

function findDuplicateDocuments(documents) {
  const map = {};

  const duplicates = [];

  for (const document of documents) {
    if (map[document.hash]) {
      duplicates.push(document.name);
    } else {
      map[document.hash] = document.name;
    }
  }

  return duplicates;
}

const documents = [
  { name: "plan1.pdf", hash: "abc123" },
  { name: "plan2.pdf", hash: "def456" },
  { name: "plan1_copy.pdf", hash: "abc123" },
];

console.log("Problem #12 Output:", findDuplicateDocuments(documents)); // [ "plan1_copy.pdf" ]
