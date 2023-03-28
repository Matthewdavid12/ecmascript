

const user = { username: "matthew", age: 34, coutry: "CO" };


const { username, ...values } = user;


console.log(username);

console.log(values);