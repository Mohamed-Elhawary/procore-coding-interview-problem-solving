// Problem #6 Document Approval Workflow

function getApprovalStatus(steps) {
  if (steps.some((step) => step === "rejected")) return "rejected";
  if (steps.every((step) => step === "approved")) return "approved";

  return "pending";
}

const steps1 = ["approved", "pending", "approved"];

const steps2 = ["approved", "approved"];

const steps3 = ["approved", "rejected"];

console.log("Problem #6 Output_1:", getApprovalStatus(steps1)); // pending
console.log("Problem #6 Output_2:", getApprovalStatus(steps2)); // approved
console.log("Problem #6 Output_3:", getApprovalStatus(steps3)); // rejected
