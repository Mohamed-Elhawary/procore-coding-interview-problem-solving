// Problem #11 Solution: Permission-Based Action Filter

function filterActions(actions, userRole) {
  return actions.filter((action) => action.roles.includes(userRole));
}

const actions = [
  { name: "edit", roles: ["admin", "editor"] },
  { name: "view", roles: ["admin", "editor", "viewer"] },
  { name: "delete", roles: ["admin"] },
];

const userRole = "editor";

console.log("Problem #11 Output:", filterActions(actions, userRole)); // [ { name: "edit", ... }, { name: "view", ... } ]
