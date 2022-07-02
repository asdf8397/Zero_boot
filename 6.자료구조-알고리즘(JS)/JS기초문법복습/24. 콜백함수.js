/* 콜백함수 */

// 콜백함수(Callback_function)
function callback_func() {
    console.log("I'm callback function");
}
callback_func(); // output: I'm callback function

// 고차함수(Higher-order function)
function higher_order_func(callback) {
    console.log("I'm higher-order function");
}
higher_order_func(); // output: I'm higher-order function

function landing_over_func(callback) {
    console.log("My airplane is here");
    callback();
}
landing_over_func(callback_func);
// output: My airplane is here
/* console.log를 호출하려고한다 이때 callback();으로 호출하고
이것은 landing_over_func(callback ← console.log에서 호출한것과 연결고리) 그리고
landing_over_func은(callback_func) func이 함수의 호출 연결고리 *


// 고차함수가 가능하다.
/* 함수를 다른 변수와 동일하게 다루는 언어는 일급함수를 가졌다고 표현한다.
    일급 함수는 함수를 다른 함수에 매개변수로 제공하거나 함수가 함수를 반환 할 수
    있으며 변수에도 할당할 수 있다
    함수를 변수에 담아주거나 인자 매개변수로 전달이 가능하다.
    즉 변수에 담을수 있고, 인자나 값으로도 사용이 가능하다.*/

    
// 콜백함수 예제들

function add(x, y) {
    return x + y;
}
console.log(add(30, 40));

function add4(output, x, y) {
    return output(x, y);
}
console.log(add4(add, 100, 100));

function add1() {
    let x = 10;
    let y = 20;
    console.log(x + y);
}
add1();

function add2() {
    console.log("안녕하세요 JS입니다.")
}
add2();

function bbb(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function calculator(callback, x, y) {
    return callback(x, y);
}
console.log(calculator(bbb, 7, 3)); // output: 10
console.log(calculator(sub, 7, 3)); // output: 4
console.log(calculator(mul, 7, 3)); // output: 21
console.log(calculator(div, 7, 3)); // output: 2.3333333333

/* 원시타입 */
// call by value

let a = 1;
let add = function (b) {b = b + 1};
add(a);
console.log(a); // output: 1


/* 객체타입 */
// call by reference

let a = {v: 1};
let add = function (b) {b.v = b.v + 1}
add(a);
console.log(a.v); // output: 2