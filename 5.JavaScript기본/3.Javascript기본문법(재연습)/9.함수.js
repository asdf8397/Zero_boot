/** 함수(function)
 * 특정 일을 처리하는 코드 묶음
 */

function func() { // 호출되서 밖으로 꺼내지기는 하지만 return을 활용해서 console에는 찍히지 않음
    return hello;
}

function function_solution() {
    if (0 < 10) {
        console.log("Hello")
    }
}
function_solution();

/* 함수 선언문 */
function solution_function (num) {
    if (num < 10) {
        console.log("오오 num이 10보다 작네요")
    } else {
        console.log("오오 num이 10보다 크네요")
    }
}
solution_function(1) // 오오 num이 10보다 작네요.
solution_function(11) // 오오 num이 10보다 크네요.
 
function input_Function(number1, number2) { // 자연스러운 코드 작성
    return number1 + number2
}
console.log(input_Function(2,6));

function input_function_re(number1, number2, number3) { // 출력이 됨 그러나 부자연스러움
    console.log(number1 + number2 + number3)
}
console.log(input_function_re(10, 10, 10));
// output: 출력했을때 30이라고 출력이 되고 undefined라고 출력이 됨

function multiflex(number1, number2) {
    return number1 * number2;
}
console.log(multiflex(10, 10)); // ouput: 100