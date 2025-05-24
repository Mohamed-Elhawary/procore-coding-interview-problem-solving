// Problem #7 Solution: Task Dependencies (Topological Sort)

function getTaskExecutionOrder(tasks) {
  const result = [];

  const map = {};

  const visited = {};

  tasks.forEach(task => map[task.id] = task.dependsOn);

  function visit(task) {
    if (visited[task] === "temp") throw new Error("Cycle");

    if (!visited[task]) {
      visited[task] = "temp";

      (map[task] || []).forEach(visit);

      visited[task] = "perm";

      result.push(task);
    }
  }

  tasks.forEach(task => visit(task.id));

  return result;
}

const tasks1 = [
  { id: "A", dependsOn: [] },
  { id: "B", dependsOn: ["A"] },
  { id: "C", dependsOn: ["B"] }
];

const tasks2 = [
  { id: "A", dependsOn: ["B", "C"] },
  { id: "B", dependsOn: ["C"] },
  { id: "C", dependsOn: [] },
];

const tasks3 = [
  { id: "C", dependsOn: ["A"] },
  { id: "B", dependsOn: ["C"] },
  { id: "A", dependsOn: [] },
];

const tasks4 = [
  { id: 'A', dependsOn: ['B'] },
  { id: 'B', dependsOn: ['C'] },
  { id: 'C', dependsOn: ['A'] }
];

console.log("Problem #7 Output_1:", getTaskExecutionOrder(tasks1)); // ["A", "B", "C"]

console.log("Problem #7 Output_2:", getTaskExecutionOrder(tasks2)); // ["C", "B", "A"]

console.log("Problem #7 Output_3:", getTaskExecutionOrder(tasks3)); // ["A", "C", "B"]

console.log("Problem #7 Output_4:", getTaskExecutionOrder(tasks4)); // Error Cycle
