// Problem #21 Solution: Cheapest Worker Assignment

function assignCheapestWorkers(workers, trades) {
  const assigned = new Set();

  const result = [];

  for (const trade of trades) {
    const candidates = workers
      .filter(
        (worker) => worker.trades.includes(trade) && !assigned.has(worker.email)
      )
      .sort((a, b) => a.cost - b.cost);

    if (candidates.length) {
      result.push(candidates[0].email);

      assigned.add(candidates[0].email);
    } else {
      return null;
    }
  }

  return result;
}

const workersData = [
  { email: "mo@sd.com", trades: ["cement", "bricks"], cost: 60 },
  { email: "ali@sd.com", trades: ["cutting", "cement"], cost: 80 },
  { email: "sara@sd.com", trades: ["bricks", "cutting"], cost: 70 },
];

const trades = ["cement", "bricks", "cutting"];

console.log("Problem #21 Output:", assignCheapestWorkers(workersData, trades)); // ["mo@sd.com", "sara@sd.com", "ali@sd.com"]
