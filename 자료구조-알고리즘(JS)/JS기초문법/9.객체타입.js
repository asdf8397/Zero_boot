// 객체타입

// object
// object는 다수의 원시 자료형을 포함하거나 복합한 개체(entity)를 표현할 수 있는 자료형
// object는 Object() 혹은 중괄호({})를 통해 생성
// obejct의 개체는 key:value형태로 표현하며, 접근은 object.key형태로 표현


// 객체 예제 코드(1)
let user = {
    name1: "John",
    age: 27,
};

console.log(typeof user);
console.log(typeof user.name1);
console.log(typeof user.age);

console.log(user)
console.log(user.name1);
console.log(user.age);

user.age = 30;
console.log(user.age);

// 객체 예제 코드(2)


/* 객체(object)에 객체(entity) 추가는 obj.key=value, 
삭제는 delete 명령어를 통해 수행*/

let user2 = {
    name2: "john",
    age2: 27,
};

console.log(user2);

user2.weight2 = 72; //.weight 선언한 let user안에 weight가 없지만 추가된다.
console.log(user2);

delete user2.age2; // delete는 let user2안에 선언한 age2를 삭제하게 한다.
console.log(user2);

// 객체 복사 문제점
let user3 = {
    name3: "john",
    age3: 23,
};

let admin3 = user3;

admin3 = name3 = "park";

console.log(admin3.name3); // output: "park"
console.log(user3.name3); // output: "park"

user3.age3 = 30;
console.log(user3.age3); // output: 30
console.log(admin3.age3); // output: 30