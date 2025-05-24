// Problem #8 Solution: Cost Calculation

function calculateProjectCosts(expenses) {
  let total = 0;

  const byCategory = {};

  expenses.forEach((expense) => {
    total += expense.amount;

    byCategory[expense.category] =
      (byCategory[expense.category] || 0) + expense.amount;
  });

  return { total, ...byCategory };
}

const expenses = [
  { category: "Materials", amount: 100 },
  { category: "Labor", amount: 200 },
  { category: "Materials", amount: 50 },
];

console.log("Problem #8 Output:", calculateProjectCosts(expenses)); // { total: 350, byCategory: { Materials: 150, Labor: 200 } }
