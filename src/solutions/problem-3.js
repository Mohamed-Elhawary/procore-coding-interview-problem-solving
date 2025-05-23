// Problem #3 Solution: Materials Stock Alert

function lowStockMaterials(inventory, threshold) {
  const thresholdMaterials = inventory.filter(
    (item) => item.quantity < threshold
  );

  return thresholdMaterials.map((item) => item.name);
}

const inventory = [
  { name: "Cement", quantity: 40 },
  { name: "Bricks", quantity: 200 },
];

console.log("Problem #3 Output:", lowStockMaterials(inventory, 100));
