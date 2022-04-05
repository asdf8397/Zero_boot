/* 함수(function) */
// 특정 일을 처리하는 코드 묶음

function func() {
    return hello;

};
// console.log(func());

function func1() {
    if (10 > 0) {
        return 'Hello';
    }
}

console.log(func1());

// 함수 선언문
function func2(num) {
    if (10 > num) {
        return 'Hello';
    }
}

// 함수 호출
console.log(func2(1));
console.log(func2(2));
console.log(func2(3));
console.log(func2(4));
console.log(func2(5));
console.log(func2(6));
console.log(func2(7));
console.log(func2(8));
console.log(func2(9));
console.log(func2(10));
console.log(func2(11));

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));


function multiple(num1, num2) {
    return num1 * num2;
}

console.log(multiple(3, 6));