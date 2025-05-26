// Problem #19 Solution: Safety Incident Tracker

function incidentsByMonthAndSeverity(incidents) {
  const result = {};

  for (const incident of incidents) {
    const month = incident.date.slice(0, 7);

    if (!result[month]) result[month] = {};

    result[month][incident.severity] =
      (result[month][incident.severity] || 0) + 1;
  }

  return result;
}

const incidents = [
  { date: "2024-06-01", severity: "high" },
  { date: "2024-06-15", severity: "low" },
  { date: "2024-07-01", severity: "medium" },
];

console.log("Problem #19 Output:", incidentsByMonthAndSeverity(incidents));

/*
{
  "2024-06": { high: 1, low: 1 },
  "2024-07": { medium: 1 }
}
*/
