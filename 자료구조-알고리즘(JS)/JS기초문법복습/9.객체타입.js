// 객체타입

let user = {
    name1: "John",
    age1: 21,
    heigh1: 177,
};

console.log(user.name1); // output: John
console.log(user); // output: {name1: "John", age1: 21, height1: 177,}
console.log(user.age1); // output: 21
console.log(user.heigh1); // output: 177

console.log(typeof user); // output: Object
console.log(typeof user.name1); // output: String
console.log(typeof user.age1); // output: number, Int
console.log(typeof user.heigh1); // output: number, Int

user.age1 = 30;

console.log(user.age1); // output: 30


// 객체 예제 코드_2
let user2 = {
    name: "Jackson",
    age: 27,
    weight: 88 + "KG",
};

console.log(typeof user2); // output: {name: "Jackson", age: 27, weight: 88}
console.log(typeof user2.name); // output: Jackson
console.log(typeof user2.age); // output: 27
console.log(typeof user2.weight); // output: 88KG

console.log(user2); // output: {name: "Jackson", "age: 27", weight: 88KG}
console.log(user2.name); // output: "Jackson"
console.log(user2.age); // output: 27
console.log(user2.weight); // output: 88KG

user2.age = 28;

console.log(user2.age); // output: 27

delete user2.name;
console.log(user2); // output: {name: "Jackson", age: 27, weight: 88KG}
console.log(user2.name); // output: Jackson


// 객체 복사 문제점
let user3 = {
    name3: "Steve",
    age3: 28 + "세",
    Now: "Starbucks"
};

let admin = user3;

console.log(admin.name3); // undefined

admin = name3 = "Park";

console.log(admin3.name3); // undefined