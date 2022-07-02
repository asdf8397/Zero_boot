// 객체 복사 문제점

let user3 = {
    name: "jack",
    age: 23,
    weight: 68,
    height: 178
};

let admin3 = user3;

admin3.name = "Park";

console.log(admin3.name); // output: Park
console.log(user3.name); // output: Park


user3.age = 30;
console.log(user3.age); // output: 30
console.log(admin3.age); // output: 30

// Object 복사

// 얕은복사(Shallow copy) - 1
let user4 = {
    name4: "Park",
    age4: 25,
    weight: 69 + "KG",
    height: 178 + "cm"
};

console.log(user4.name4); // output: Park
console.log(user4.age4); // output: 25
console.log(user4.weight); // output: 69KG
console.log(user4.height); // output: 178cm

let admin4 = {};

// shallow copy
for (let key in user4) {
    admin4[key] = user4[key]; // 여기서 admin4과 user4를 연결할때는 [key]배열 형식으로 들어가야한다.
}

console.log(admin4); // output: Park

admin4.name4 = "Kim";

console.log(admin4.name4); // output: Kim

// 얇은 복사(Shallow copy) - 2
let user5 = {
    name5: "Sorialgi",
    what: "Every Coding Study",
};

let admin5_obj = Object.assign({},user5);
console.log(admin5_obj); // output: {name5: "Sorialgi", what: "Every Coding Study",}
console.log(admin5_obj.user5); // output: undefined
console.log(admin5_obj.what); // output: Every Coding Study


// 얇은 복사(Shallow copy) - 3

let user6 = {
    name6: "진호",
    age6: 20,
};

let admin6_spread = {user6};
console.log(admin6_spread); //{ user6: { name6: '진호', age6: 20 } }
// 일단 지금은 단지 user6를 admin6_spread에 담았을뿐이다.

console.log(admin6_spread.name6); // output: undefined 지정안해줬기때문에
console.log(admin6_spread.age6); // output: undefined 지정안했기때문에

console.log(user6.name6); // output: 진호
console.log(user6.age6); // output: 20
admin6_spread.name6 = "Cat";
admin6_spread.age6 = 8;

console.log(admin6_spread.name6); // output: Cat
console.log(admin6_spread.age6); // output: 8