const User = require("./index");

const user = new User();

user.incProgress(1);

console.log(user.progress, user.rank);
