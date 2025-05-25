// Problem #9 Solution: Change Order Tracking

function trackTaskChanges(oldTasks, newTasks) {
  const changes = [];

  const oldMap = Object.fromEntries(oldTasks.map((task) => [task.id, task]));

  const newMap = Object.fromEntries(newTasks.map((task) => [task.id, task]));

  for (const key in oldMap) {
    if (!newMap[key]) {
      changes.push({
        type: "removed",
        task: oldMap[key],
      });
    } else if (newMap[key]) {
      changes.push({
        type: "modified",
        task: oldMap[key],
      });
    }
  }

  for (const key in newMap) {
    if (!oldMap[key]) {
      changes.push({
        type: "added",
        task: newMap[key],
      });
    }
  }

  return changes;
}

const oldTasks = [
  { id: 1, name: "Survey", status: "complete" },
  { id: 2, name: "Excavate", status: "pending" },
];

const newTasks = [
  { id: 2, name: "Excavate", status: "complete" },
  { id: 3, name: "Pour Concrete", status: "pending" },
];

console.log("Problem #9 Output:", trackTaskChanges(oldTasks, newTasks));

/*
[
    { type: "removed", task: { id: 1, name: "Survey", status: "complete" } },
    { type: "modified", task: { id: 2, name: "Excavate", status: "complete" } },
    { type: "added", task: { id: 3, name: "Pour Concrete", status: "pending" } }
]
*/
