// Problem #14 Solution: Field Input Validation

function validateProject(formData, existingProjects) {
  const errors = [];

  if (!formData.name || !formData.startDate || !formData.endDate) {
    errors.push("Required field missing");
  }

  if (existingProjects.some((project) => project.name === formData.name)) {
    errors.push("Name is not unique");
  }

  if (formData.startDate > formData.endDate) {
    errors.push("End date before start date");
  }

  return { valid: errors.length === 0, errors };
}

const formData1 = {
  name: "Project X",
  startDate: "2024-06-01",
  endDate: "2024-06-10",
};

const formData2 = {
  name: "Project Y",
  startDate: "2024-06-01",
  endDate: "2024-06-10",
};

const existingProjects = [{ name: "Project Y" }];

console.log(
  "Problem #14 Output_1:",
  validateProject(formData1, existingProjects)
); // { valid: true, errors: [] }

console.log(
  "Problem #14 Output_2:",
  validateProject(formData2, existingProjects)
); // { valid: false, errors: "Name is not unique" }
