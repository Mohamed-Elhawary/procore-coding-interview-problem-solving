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

const formData = {
  name: "Project X",
  startDate: "2024-06-01",
  endDate: "2024-06-10",
};

const existingProjects = [{ name: "Project Y" }];

console.log("Problem #14 Output:", validateProject(formData, existingProjects));

/*
  [ 
    { room: "101", startTime: "09:30", endTime: "11:00" },
    { room: "101", startTime: "09:45", endTime: "10:15" }
  ]
  */
