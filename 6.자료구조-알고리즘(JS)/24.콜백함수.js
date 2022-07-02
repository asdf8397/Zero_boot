// 콜백함수
// 콜백함수(callback function)란 다른 함수의 매개변수로 전달되어 수행되어지는 함수
// 고차함수(Higher-order-function)란 매개변수를 통해 함수를 받아 호출하는 함수
        // 콜백함수(callback_function)
function callback_func() { // (3)
    console.log("I'm callback function");
}
        // 고차함수(Higher-order function)
function higher_order_func(callback) { // (2)
    console.log("I'm higher-order function");
    callback();
}
higher_order_func(callback_func) // (1)

/* higher_order_func(callback_func)을 호출하면 (2)의 고차함수 higher_order_func(callback)을 호출하게 되고
console.log("I'm higher-order function")을 호출하게 된다 그리고 higher_order_func(callback)함수에서 callback을
호출하게되고 callback();을 때리게 된다 이는 function callback_func()를 호출하게 되고
function callback_func()의 console.log("I'm callback function")을 출력하게 된다 */


// 콜백 함수 예제

function add(x, y) {
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

console.log(calculator(add, 7, 3)); // output: 10
console.log(calculator(sub, 7, 3)); // output: 4
console.log(calculator(mul, 7, 3)); // output: 21
console.log(calculator(div, 7, 3)); // output: 0.4222222222


// call by (원시타입)
// call by value
// 값에 의한 복사로 함수 내에서 매개 변수 값을 변경 시켜도 영향을 미치지 않음
// 원시타입(primitive type)을 매개변수로 넘겼을 때 발생

let a = 1;
let add = function (b) {b = b + 1}; // callee
add(a); // caller
console.log(a); // output: 1

/* function(b) {b = b + 1};로 지정한 function(b)를 let add에 넣어주고
  add(a)는 let a = 1;이면 let add에 넣어준 function (b) {b = b +1};의
  매개변수는 1이 된다
  결론적으로 console.log(a);를 했을땐 output: 1이 된다*/


// call by reference (객체타입)
// 주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
// 객체타입(object type)을 매개변수로 넘겼을 때 발생

var a = {v:1};
var add = function (b) {b.v = b.v + 1;}; // callee
add(a); // caller
console.log(a.v); // output: 2

// 생각 정리
/* var add = function (b) {b.v = b.v + 1};일때 add(a)가 function (b)에 들어가게 되고
var a = {v:1} var a를 지정한 값은 (b) {b.v = v + 1}이렇게 들어가게되고
연산이 진행되서 (a) {a.v = v + 1} 이렇게 진행되게 되며 (a)는 output 2가 되게 된다
그래서 결론 a.v는 console.log를 했을때 ouput:2가 된다 */