// 함수
// 함수는 다수의 명령문을 코드 블록으로 감싸고, 하나의 실행 단위로 만든 코드의 집합
// 유사한 동작을 하는 코드를 하나로 묶어, 범용성을 확대시킨 블록코드
// 함수는 정의 부분과 호출 부분으로 구성
// 함수는 가급적 한가지 일만 하며, 매개 변수는 최대 3개 이내로 작성을 권장


// 함수의 정의
/* 1. 함수 선언식(function declarations)
function func (arg1, arg2, ... argN) {
    expression;
}
*/
function add(x, y) {
    return x + y;
}

/* 2. 함수 표현식(function expressions)
const func = function (arg1, arg2, ...argN) {
    expression;
} */
const add = function (x, y) {
    return x + y;
};

/* 3. 화살표 함수 (arrow function)
const func = (arg1, arg2 ...argN) => expression; */
const add = (x, y) => x + y;


// 함수 호출 (void 함수_반환이 없는 함수)
// Javascript 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음
// ES6에서 도입된 기본값을 통해 undefined 변수가 들어올 경우 값 초기화 지정 가능


// 1. default value
function print_add(x, y = 10) { //print_add같은 함수의 값만 보더라도 어떤 일을 하는지 알수있다
    console.log(x + y);
}
print_add(10, 20, 30); // output: 30
// function print_add(x,y)에 10,20이 들어가서 결과값 output: 30 출력됨
print_add(10, 20); // output: 30
// function print_add(x,y)에 10,20이 들어가서 결과값 output: 30 출력됨
print_add(10); // output: 20
/* function print_add(x,y)에 들어가야할값이 10밖에 없음 이럴때 10은 x에 할당하고
나머지를 x,y = 10일때 10이 y에 할당되서 console.log(x + y)에서 연산이 되고 결과값은 output: 20이 나온다 */
print_add(); // output: NaN
// print_add() 괄호안에 아무것도 할당 되어있지 않으므로 결과는 output: NaN이 출력된다


// 2. dynamic parameters
function print_min() {
    console.log(arguments[0] - arguments[1]);
}
print_min(10, 20, 30); // output: 10
// print_min(10,20,30)에서 arguments[0]-arguments[1]에서 [0]은 10 [1]은 20... 연산하면 output: 10
print_min(10, 20); // output: -10
// print_min(10,20)에서 arguments[0]-arguments[1]하면 [0]은 10 [1]은 20.... 연산하면 output: -10
print_min(10); // output: NaN
// print_min(10)이란 값은 있으나 arguments[0] arguments[1]중에 어디에 적용되는지 모르므로 NaN출력됨
print_min(); // output: NaN
// print_min() print_min의 괄호안에 값이 없으므로 NaN


// 함수 반환
// return 후 코드는 수행되지 않으며, default return value는 undefined

function add(x, y) {
    return x + y;
    console.log("hello!"); // 미수행 코드W
}

function dummy() {}

function checkAge(age) {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(add(10, 20));
console.log(dummy());
console.log(checkAge(14));
console.log(checkAge(20));