// Problem #15 Solution: Multi-Site Project Summary

function summarizeProjects(projects) {
  const result = {};

  for (const project of projects) {
    if (!result[project.site])
      result[project.site] = { totalProgress: 0, totalBudget: 0 };

    result[project.site].totalProgress += project.progress;

    result[project.site].totalBudget += project.budget;
  }

  return result;
}

const projectsDetails = [
  { site: "East", progress: 50, budget: 10000 },
  { site: "West", progress: 30, budget: 8000 },
  { site: "East", progress: 20, budget: 4000 },
];

console.log("Problem #15 Output:", summarizeProjects(projectsDetails));

/*
{
  East: { totalProgress: 70, totalBudget: 14000 },
  West: { totalProgress: 30, totalBudget: 8000 }
}
*/
