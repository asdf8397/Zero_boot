/* 함수의 표현 */

/* 1. 함수 선언식(Function Declarations) */
function add_1(x, y) {
    return x + y
};
console.log(add_1(3, 4)); // output: 7

/* 2. 함수 표현식(Function Expressions) */
const add_2 = function (x, y) {
    return x + y
};
console.log(add_2(10, 10)); // output: 20

/* 3. 화살표 함수(Arrow Function) */
const add_3 = (x, y) => x + y;

const add_4 = add_1;
console.log(add_4(1, 10)); // output: 11

console.log(add_1 == add_2); // output: false
console.log(add_1 == add_4); // output: true

/* 함수 저장 */
// 배열의 요소(element) 혹은 객체의 속성(property)에 함수를 정의하여 저장 가능

let list = [
    "john",
    27,
    function Hello_function() {
        console.log("hello");
    }
];

let obj = {
    name: "Jack",
    age: 28,
    Hello_Javascript_world() {
        console.log("Hi");
    },
};

function Hello_Hello_Function() {
    console.log("hi, my name is");
}

Hello_Hello_Function(); // output: hi, my name is
obj.Hello_Javascript_world(); // output: Hi
list[2](); // output: hello
// 배열은 .()해줄필요 없음 그냥 ()으로 연결할 것

/* this */
// 메서드에서 객체 내부의 속성(property)값을 접근할 수 있는 지시자
// 객체 내부에 접근할수 있는 지시자(this)

let obj2 = {
    name: "Kim ",
    age: 28,
    HELLO_JAVASCRIPT_WORLD2() {
        console.log("Hello " + this.name + this.age);
    }
};
obj2.HELLO_JAVASCRIPT_WORLD2();

// this 예제
// this를 사용하는 method는 추가 가능하며, 이때 this는 runtime에 결정되어 호출한 객체에 따라 다름

let user = {
    name3 : "John_Kim"
};
let admin = {
    name4: "admin_Lee"
};

// hello_func내 this 값은 런타임에 결정
function hello_func() {
    console.log("hello " + this.name3);
    console.log("hello " + this.name4);
}
hello_func();

user.func = hello_func;
admin.func = hello_func;

// 출력담당  func() - 출력담당
user.func(); // hello john_kim
admin.func(); // hello admin_Lee

user["func"](); // hello john_kim
admin["func"](); // hello admin_Lee