// Problem #5 Solution: Daily Log Summary

function summarizeWorkerHours(logs) {
  return logs.reduce((acc, log) => {
    acc[log.workerId] = (acc[log.workerId] || 0) + log.hoursWorked;

    return acc;
  }, {});
}

const logs = [
  { workerId: 1, hoursWorked: 8, date: "2024-05-01" },
  { workerId: 1, hoursWorked: 4, date: "2024-05-02" },
  { workerId: 2, hoursWorked: 5, date: "2024-05-01" },
];

console.log("Problem #5 Output:", summarizeWorkerHours(logs));
