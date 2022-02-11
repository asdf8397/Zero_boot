// 객체 복사 문제점

let user3 = {
    name3: "john",
    age3: 23,
};

let admin3 = user3;

admin3.name3 = "park";

console.log(admin3.name3); // output: "park"
console.log(user3.name3); // output: "john" → "park"

user3.age3 = 30;
console.log(user3.age3); // output: 30
console.log(admin3.age3); // output: 23 → 30

// Object복사
// object의 값을 복사할 때는 대상 전체가 아닌 object내 주소 값만 복사되는 문제 발생
// 가리키는 대상 전체를 복사하는 방법은 얕은 복사(Shallow copy), 깊은 복사(Deep copy)를 통해 가능

// 얕은 복사(shallow copy) -1
let user4 = {
    name4: "john",
    age4: 23,
};

let admin4 = {}

// shallow copy
for(let key in user4) {
    admin4[key] = user4[key];
}

admin4.name4 = "park";

console.log(admin4.name4);
console.log(user4.name4);

// 얕은 복사(shallow copy) -2
let user5 = {
    name5: "john",
    age5: 23,
};

let admin5_obj = Object.assign({},user5);

admin5_obj.name5 = "park";
user5.age5 = 30;

console.log(admin5_obj.name5);
console.log(user5.name5);
console.log(admin5_obj.age5);
console.log(user5.age5);

// 얕은 복사(shallow copy) -3
// ES6에서부터 지원하는 전개 연산자(Spread Operator)를 이용한 복사

let user6 = {
    name6: "john",
    age6: 23,
};

let admin6_spread = {...user6};

admin6_spread.name6 = "park";
user6.age6 = 30;

console.log(admin6_spread.name6);
console.log(user6.name6);
console.log(admin6_spread.age6);
console.log(user6.age6);