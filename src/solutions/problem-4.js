// Problem #4 Solution: Gantt Chart Data Preparation

function prepareGanttData(phases) {
  return phases.map((phase) => {
    const start = new Date(phase.startDate);

    const end = new Date(phase.endDate);

    const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    return { ...phase, duration };
  });
}

const phases = [
  { name: "Excavation", startDate: "2024-05-01", endDate: "2024-05-03" },
  { name: "Construction", startDate: "2024-06-04", endDate: "2024-09-02" },
];

console.log("Problem #4 Output:", prepareGanttData(phases));
/* 
[
  {
      "name": "Excavation",
      "startDate": "2024-05-01",
      "endDate": "2024-05-03",
      "duration": 3
  },
  {
      "name": "Construction",
      "startDate": "2024-06-04",
      "endDate": "2024-09-02",
      "duration": 91
  }
]
*/
