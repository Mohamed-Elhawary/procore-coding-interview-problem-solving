// Problem #17 Solution: Punch List Completion Rate

function punchListCompletion(items) {
  const totals = {};

  const completed = {};

  const rates = {};

  items.forEach((item) => {
    totals[item.category] = (totals[item.category] || 0) + 1;

    if (item.completed)
      completed[item.category] = (completed[item.category] || 0) + 1;
  });

  for (const category in totals) {
    rates[category] = Math.round(
      100 * ((completed[category] || 0) / totals[category])
    );
  }

  return rates;
}

const items = [
  { category: "Electrical", completed: true },
  { category: "Electrical", completed: false },
  { category: "Plumbing", completed: true },
];

console.log("Problem #17 Output:", punchListCompletion(items)); // { Electrical: 50, Plumbing: 100 }
