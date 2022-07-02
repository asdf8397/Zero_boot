let users1 = [
    { name2: "bob", age: 17, job: false },
    { name2: "alice", age: 20, job: false },
    { name2: "john", age: 27, job: true },
];

let filter_job = users1.filter(function (user) {
    return user.job == false;
});
console.log(filter_job);
// output: { name2: "bob", age: 17, job: false }


let filter_age = users1.filter(function (user) {
    return user.age > 19;
});
console.log(filter_age);
// output: { name2: "alice", age: 20, job: false }

let filter_name = users1.filter(function (user) {
    return user.age > 19, user.job === true;
});