// Problem #1 Solution: Project Overlap Checker

function hasOverlappingProjects(projects) {
  projects.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  for (let i = 1; i < projects.length; i++) {
    const currentProjectStartDate = new Date(projects[i].startDate);

    const prevProjectEndDate = new Date(projects[i - 1].endDate);

    if (currentProjectStartDate <= prevProjectEndDate) return true;

    return false;
  }
}

const projects = [
  { name: "A", startDate: "2024-05-01", endDate: "2024-05-10" },
  { name: "B", startDate: "2024-05-09", endDate: "2024-05-20" },
  { name: "C", startDate: "2024-05-22", endDate: "2024-06-04" },
  { name: "D", startDate: "2024-06-03", endDate: "2024-06-20" },
];

console.log(hasOverlappingProjects(projects)); // true
