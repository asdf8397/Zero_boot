// 7.변수와 상수

// 변수란?
// 변수
/*
변경 가능한 값을 저장하기 위한 기억공간(memory)
사용하기 전 반드시 선언 필요
중복 선언 불가능
키워드: let
*/

let A = 123;
console.log(A);

A = 456;
console.log(A);

// let A = 789; 
// console.log(A); // Syntax errer 발생

// 상수란?
// 상수
// 변경 불가능한 값을 저장하기 위한 기억공간
// 사용하기 전 반드시 선언 필요
// 중복 선언 불가능
// 키워드: const

const B = 123;
console.log(B);

B = 456; // 재설정하면 SyntaxError 발생한다 const는
console.log(B); // SyntaxError발생 

// 변수/상수 예제코드
// 선언 후 할당
let hi;
hi = "hello";
console.log(hi);

// 선언과 동시에 초기화
let halo = "Hello!";
console.log(halo);

// 한 줄에 여러 변수 선언과 초기화
let name = "john", age = 13, msg = "hello";
console.log(name);
console.log(age);
console.log(msg);

// 상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTHDAY = "2000.1.1";
console.log(TESTCASE);
console.log(BIRTHDAY)
