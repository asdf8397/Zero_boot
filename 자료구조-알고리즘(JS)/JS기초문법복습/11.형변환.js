// String 형변환
console.log(String(123)); // output: 123
console.log(String(1/0)); // output: Infinity
console.log(String(-1/0)); // output: -Infinity
console.log(String(NaN)); // output: NaN
console.log(String(true)); // true
console.log(String(false)); // false
console.log(String(undefined)); // undefined
console.log(String(null)); // null

// 형 변환 예제(Number)

console.log(Number("")); // output: 0
console.log(Number("123")); // output: 123
console.log(Number("hello")); // output: NaN
console.log(Number("123hello")); // output: NaN
console.log(Number(true)); // output: 1
console.log(Number(false)) // output: 0
console.log(Number(null)); // output: 0
console.log(Number(undefined)); // output: NaN

// 소수점 뒷자리 출력
console.log(parseInt(123.123)); // output: 123 int형식으로 소수점매김
console.log(parseFloat(123.123)); // output: 123.123 float형식으로 소수점 뒷자리

// 형 변환 예제 Boolean(true, false)
// true false에서 숫자 또는 문자가 있을경우 true 숫자가 없거나 문자 없거나 null, undefined는 false
console.log(Boolean("")); // false
console.log(Boolean("123")); // true
console.log(Boolean("hello")); // true
console.log(Boolean("0")); // true
console.log(Boolean(0)); // false
console.log(Boolean(123)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false