// Problem #10 Solution: RFIs (Request For Information) Status Report

function countRFIStatus(rfis) {
  return rfis.reduce((acc, rfi) => {
    acc[rfi.status] = (acc[rfi.status] || 0) + 1;

    return acc;
  }, []);
}

const rfis = [
  { id: 1, status: "open" },
  { id: 2, status: "pending" },
  { id: 3, status: "closed" },
  { id: 4, status: "open" },
];

console.log("Problem #10 Output:", countRFIStatus(rfis)); // { open: 2, pending: 1, closed: 1 }
