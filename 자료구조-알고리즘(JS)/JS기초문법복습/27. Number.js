/* Number */

/* 지수 표기법(Exponential notation) */
let billion_1 = 1000000000; // output: 10억
let billion_2 = 1e9; // 1 + 0.9개 10억
let us = 1e-6; // micro sec, 왼쪽으로 6번 소수점 이동

console.log(billion_1); // 1000000000 ,,, 10억
console.log(billion_2); // 1000000000 ,,, 10억
console.log(us); // 0.000001

/* 진법 표기 */

/* N 진법(Base N) */
console.log(0x0f); // 15
console.log(0o17); // 15
console.log(0b1111); // 15

/* 형 변환(Type Casting) */

// 지수의 양수 최대
console.log(Number.MAX_VALUE);
// 지수의 음수 최대
console.log(Number.MIN_VALUE);

// 안전하게 표기되는 최대 (양수)
console.log(Number.MAX_SAFE_INTEGER);
// 안전하게 표기되는 최소 (음수)
console.log(Number.MIN_SAFE_INTEGER);

// 무한대 양수
console.log(Number.POSITIVE_INFINITY);
// 무한대 음수
console.log(Number.NEGATIVE_INFINITY);

// 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형
console.log(Number.NaN);
console.log(NaN);

// 대표 메서드(1)

// 형변환

// let us = 1e-6;
// console.log(us.toString()); // output: 0.000001
// console.log(typeof us.toString()); // output: String
// console.log(typeof String(us)); // output: String
// console.log(typeof (num + "")); // output: String


/* 자리 수 표현 */
let num_1 = 125.0;
let num_2 = 123.456;
console.log(num_1 - num_2); // output: 1.543999999999997
console.log((num_1 - num_2).toFixed(3)); // output: 1.544
console.log((num_1 - num_2).toPrecision(3)); // output: 1.54 소수점 3번째 자리 반올림


// 대표 메서드(2)
// .isNaN: 매개변수가 숫자인지 확인
// .isFinite: 매개변수가 유한한 값인지 확인
console.log(!Number.isNaN(0.123)); // output: true
console.log(!Number.isNaN(123 / "hello")); // output: false
console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(Infinity)); // true
console.log(Number.isFinite("hello")); // false


// 정수와 실수형 변환
console.log(Number.parseInt("125px")); // output: 125
console.log(Number.parseFloat("1.25em")); // output: 1.25
console.log(Number.parseInt("1.25em")); // output: 1
console.log(Number.parseInt("t123")); // output: NaN
console.log(Number.parseInt("0f", 16)); // output: 15