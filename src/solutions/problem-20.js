// Problem #20 Solution: Daily Crew Attendance Tracker

function dailyCrewAttendance(attendance) {
  const summary = {};

  for (const object of attendance) {
    if (!summary[object.date]) summary[object.date] = new Set();

    summary[object.date].add(object.worker);
  }

  Object.keys(summary).forEach((date) => {
    summary[date] = summary[date].size;
  });

  return summary;
}

const attendance = [
  { worker: "Alice", date: "2024-06-01" },
  { worker: "Bob", date: "2024-06-01" },
  { worker: "Alice", date: "2024-06-01" },
  { worker: "Charlie", date: "2024-06-02" },
  { worker: "Alice", date: "2024-06-02" },
];

console.log("Problem #20 Output:", dailyCrewAttendance(attendance)); // { "2024-06-01": 2,  "2024-06-02": 2 }
