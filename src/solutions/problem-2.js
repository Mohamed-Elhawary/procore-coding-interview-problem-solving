// Problem #2 Solution: Resource Allocation

function assignWorkersToTasks(tasks, workers) {
    const result = {};

    for (const task of tasks) {
        const worker = workers.find(worker => worker.skills.includes(task.requiredSkill));

        result[task.id] = worker ? worker.id : null
    };

    return result;
}

const tasks = [
    { id: 1, name: "Welding", requiredSkill: "welding" },
    { id: 2, name: "Painting", requiredSkill: "painting" },
];

const workers = [
    { id: 1, name: "Alice", skills: ["welding", "carpentry"] },
    { id: 2, name: "Bob", skills: ["painting"] },
];

console.log("Problem #2 Output:", assignWorkersToTasks(tasks, workers));
