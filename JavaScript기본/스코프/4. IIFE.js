/* IIFE */
/**
 * 즉시 실행 함수 표현식
 * (IIFE, Immdiately Invoked Function Expression)
 * ㄴ 블럭 스코프를 흉내내는 새로운 스코프를 만들어내는 것(즉시실행 함수)
 */

const result = 2 * 3 + 4;
console.log(result); // output: 10

const result2 = 2 * (3+4)
console.log(result2); // output: 14

function a() {}
a(); // function에서 설정한 것이 출력이된다.
/*
function a() {} 함수를 실행 시킬때는 a()를 실행시키면 호출 되서 output된다.
*/

(function () {
    let new_name = "Samsung Battery";
    console.log(new_name);
})
(); // output: Samsung Battery
/* 어떻게 출력이 가능한것인가는 function을 지정한 함수를 감싸고 있는 것이 거대한 () 함수이다
그렇기때문에 거대한 함수가 funciton을 감싸고 있기때문에 그냥 (); 호출만해주면 즉시 function에서 지정한
값들이 호출이된다. */

// 즉시실행함수는
(function() { // IIFE 시작
    // IIFE 내부 동작 코드
}) () // IIFE 종료

// 주의할점
// 여러개를 같이 사용할수있다 단, 세미콜론을 찍어줘서 구분을 해줘야한다.

// ();();(); 이처럼 여러개를 사용할 수 있음
// (function() {});(function() {});(function() {});(function() {});(function() {});

(function(num) {
    console.log(num); // output: 1
})(1);
