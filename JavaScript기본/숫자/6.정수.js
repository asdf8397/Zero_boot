/* 정수 */
/**
 * # 정수(Integer)
 * -- JS는 부동소수점(IEEE - 754) Number만 존재
 * -- 정수를 저장하는 2가지 방법
 * 1. 10진 소수가 없는 작은 Number는 정수로 오래 유지 (예. 31비트)
 * 2. 비트 연산자를 이용 32비트 정수로 바꿔 변환
 */

// 안전한 정수의 최대 값
Number.MAX_SAFE_INTEGER;
console.log(Number.MAX_SAFE_INTEGER); // output: 9007199254740991

// 안전한 정수의 최소 값
Number.MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER); // output: -9007199254740991

// 소수점을 다루는 방법에 가깝다
let a = Math.floor(4.2); // output: 4
let b = Math.floor(4.6); // output: 4
// 가장 가까운 정수로 내릴때 / floor 바닥

let c = Math.ceil(4.9); // output: 5
// 가장 가까운 정수로 올릴때 / 천장

let d = Math.round(3.2); // output: 3
let e = Math.round(4.6); // output: 5
// 가장 가까운 정수로 반올림 / 반올림


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

