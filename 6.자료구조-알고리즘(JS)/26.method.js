// 함수의 표현
// 다양한 방법으로 함수 정의가 가능하며, 함수 표현식처럼 함수를 정의하여 변수에 저장 가능

/* 1. 함수 선언식(Function Declarations) */
function add_1(x, y) {return x + y};

/* 2. 함수 표현식(Function Expressions) */
const add_2 = function (x, y) {return x + y;};

/* 3. 화살표 함수(Arrow Function) */
const add_3 = (x, y) => x + y;

const add_4 = add_1;

console.log(add_4(1, 3)); // output: 4

console.log(add_1 == add_2); // output: false
// add_1과 add_2의 선언해서 {}안에 넣어준 메모리 값이 다르니까 다르다고 할수있다
console.log(add_1 == add_4); // output: true
// add_4의 console.log값을 그대로 add_1에 넣어줘서 연산을 했기때문에 같다 true이다

console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3));
console.log(Object.getOwnPropertyDescriptors(add_4));
/* Object.getOwnPropertyDescriptors는 지정해준 값들의 내부의 
값들이 어떻게 지정되어있는지 볼수있다. */


// 함수 저장
// 배열의 요소(element) 혹은 객체의 속성(property)에 함수를 정의하여 저장 가능

let list = ["john", 27, function hello_func() {console.log("hello");}];
let obj = {
    name: "john",
    age: 27,
    hello_func() {
        console.log("hello");
    },
};
function hello_func() { 
    console.log("hello");
}

hello_func();
obj.hello_func();
list[2]();

console.log(typeof hello_func);
console.log(typeof obj.hello_func);
console.log(typeof list[2]);

console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(list));


// method
// 객체에 저장된 값이 함수인 경우, 메서드(method)라고 부름