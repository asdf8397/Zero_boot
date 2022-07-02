// Number

// JS에서 일반적인 숫자는 64비트 형식의 IEEE-754 표준 기반 형태로 저장되는 자료형
// 10진수 외에도 16진수, 2진수, 8진수의 다양한 진수 사용
// ... 16진수(Hexadecimal) 표기: 0xFF
// ... 8진수(Octal) 표기: 0o71
// ... 2진수(Binary) 표기: 0b1101

//  대표 상수 값
/*
[MAX | MIN]_VALUE, [MAX | MIN]_SAFE_INTERGER,[POSITIVE | NEGATIVE]_INFINITY, NaN

대표 메서드
... 문자열로 변환: Number.toString()
... 특정 자리수까지 제한하여 숫자 표현: Number.toFixed(), Number.toPrecision()
... 타입 확인: Number.isNaN(), Number.isFinite()
*/

// 지수 / 진법

// 지수 표기법
// 아주 큰 숫자나 아주 작은 숫자를 표기하기 위해 지수 표기법(e)으로 0의 개수를 대체 표기 가능


/* 지수 표기법(Exponential notation) */
let billion_1 = 1000000000 // 10억
let billion_2 = 1e9 // 1 + 0.9개
let us = 1e-6; // micro sec, 왼쪽으로 6번 소수점 이동

console.log(billion_1); // 1000000000
console.log(billion_2); // 1000000000
console.log(us); // 0.000001

// 진법 표기
// 진법 표기를 지원하기 위해 0x(16진수), 0o(8진수), 0b(2진수)로 N 진수 표기 가능

/* N 진법(Base N) */
console.log(0x0f); // 15
console.log(0o17); // 15
console.log(0b1111); // 15


// Number 상수 값
// Number 상수 값
// 지수로 표기되는 양수 최대/최소 값: Number.MAX_VALUE, Number.MIN_VALUE
/* 안전하게 표기되는 최대(양수)/최소(음수)값: Number.MAX_SAFE_INTEGER, 
Number.Min_SAFE_INTEGER */
// 무한대 양수/음수 값: Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
// 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형: Number.NaN


// 형 변환(Type Casting)
// 지수의 양수 최대
console.log(Number.MAX_VALUE); // output: 1.7976931348623157e+308
// 지수의 음수 최대
console.log(Number.MIN_VALUE); // output: 5e-324

// 안전하게 표기되는 최대(양수)
console.log(Number.MAX_SAFE_INTEGER); // output: 9007199254740991
// 안전하게 표기되는 최소(음순)
console.log(Number.MIN_SAFE_INTEGER); // output: -9007199254740991

// 무한대 양수
console.log(Number.POSITIVE_INFINITY);
// 무한대 음수
console.log(Number.NEGATIVE_INFINITY);

// 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형
console.log(Number.NaN);
console.log(NaN);

// 대표 메서드(1)

// 형변환
// Number to String: Number.toString(), String(Number), Number+""를 통해 변환가능

let us = 1e-6; // micro sec, 왼쪽으로 6번 소수점 이동
console.log(us.toString()); // output: 0.000001
console.log(typeof us.toString()); // output: string
console.log(typeof String(us)); // output: string
console.log(typeof (num + "")); // output: string


// 자리 수 표현
// 소수의 자리 수 길이를 제한: Number.toFixed(pos)
// 정수와 소수의 자리 수를 합한 길이로 제한: Number.toPrecision(pos)
let num_1 = 125.0;
let num_2 = 123.456;
console.log(num_1 - num_2); // output: 1.54399999999997

console.log((num_1 - num_2).toFixed(3)); // output: 1.544
// (num_1 - num_2)에서 .toFixed(3)를 하면 1.543999999997 긴 소수점 뒷자리에서 .3번째자리까지 맞춰줄때 .toFixed를 써주게 된다.

console.log((num_1 - num_2).toPrecision(3)); // output: 1.54
// (num_1 - num_2)에서 .toPrecision(3)을 해주면 1.54399999999997에서 소수점을 포함하지않고 소수점 앞의 1부터 3번째 자리까지 output되게한다


// 대표 메서드(2)

// Number 자료형 확인
// 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값(NaN)인지 확인: Number.isNaN()
// 정상적인 유한수인지 확인: Number.isFinite()

console.log(!Number.isNaN(0.123)); // output: true
console.log(!Number.isNaN(123 / "hello")); // output: false
console.log(Number.isFinite(-123)); // output: true
console.log(Number.isFinite(Infinity)); // output: true
console.log(Number.isFinite("hello")); // output: false


// 정수와 실수 형 변환
// 정수로 변환하는 방법(N 진수로 명시적 변환도 가능): Number.parseInt()
// 실수로 변환하는 방법:Number.parseFloat()

console.log(Number.parseInt("125px")); // output: 125
console.log(Number.parseFloat("1.25em")); // output: 1.25
console.log(Number.parseInt("1.25em")); // output: 1
console.log(Number.parseInt("t123")); // output: NaN
console.log(Number.parseInt("0f", 16)); // output: 15