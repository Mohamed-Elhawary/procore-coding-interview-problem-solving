// Problem #18 Solution: Contact Directory Search

function searchContacts(contacts, term) {
  const convertedTerm = term.toLowerCase();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(convertedTerm) ||
      contact.company.toLowerCase().includes(convertedTerm) ||
      contact.role.toLowerCase().includes(convertedTerm)
  );
}

const contacts = [
  { name: "Alice", company: "BuildCo", role: "Manager" },
  { name: "Bob", company: "PlanIt", role: "Engineer" },
];

const searchTerm = "plan";

console.log("Problem #18 Output:", searchContacts(contacts, searchTerm)); // [{ name: "Bob", company: "PlanIt", role: "Engineer" }]
