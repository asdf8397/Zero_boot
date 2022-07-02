/* 함수 */

// 함수의 정의
/* 1. 함수 선언식(function declarations)
    function func (arg1, arg2, .... argN) {
        expression
    }
*/
function aaa(x, y) { // 함수 선언식
    return x + y;
};
console.log(aaa(30, 40));

/* 2. 함수 표현식(function expressions)
const func = function (arg1, arg2, .... argN) {
    expression;
} */
const bbb = function(x, y) { // 함수 표현식
    return x + y;
};

/* 3. 화살표 함수(arrow function)
const func = (arg1, arg2 ... argN) => expression; */
const ccc = (x, y) => x + y;

/* 함수 호출(void 함수_반환이 없는 함수) */

// 1. default value
function print_add(x, y = 10) {
    console.log(x + y);
}
print_add(20, 30, 30); // output: 50
print_add(10,20); // output: 30
print_add(10); // output: 20
print_add(); // output: 없음 NaN

function print_min() {
    console.log(arguments[0] - arguments[1]);
}
print_min(30, 40, 50); // output: -10
print_min(10, 30); // output: -20
print_min(10); // output: NaN
print_min(); // output: NaN


/* 함수 변환 */

function add(x, y) {
    return x + y;
    console.log("hello!");
}
add();

function dummy() {}

function checkAge(age) {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(add(10, 20)); // output: 30
console.log(dummy()); // output: undefined;
console.log(checkAge(14)); // output: false
console.log(checkAge(20)); // output: true