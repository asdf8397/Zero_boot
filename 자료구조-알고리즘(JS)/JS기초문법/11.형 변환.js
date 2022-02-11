// String 형변환
console.log(String(123)); // 123
console.log(String(1/0)); // Infinity
console.log(String(-1/0)); // -Infinity
console.log(String(NaN)); // NaN
console.log(String(true)); // true
console.log(String(false)); // false
console.log(String(undefined)); // undefined
console.log(String(null)); // null

// 형 변환 예제(Number)
// Number는 정수와 실수를 모두 포함하는 자료 형 변환이므로, 정수 혹은 실수의 명시적 변환은 parse 함수 사용
// 정수 변환: parseInt(피연산자), 실수 변환: parseFloat(피연산자)

console.log(Number("")); // output: 0 없으므로 0
console.log(Number("123")); // output: 123
console.log(Number("hello")); // output: NaN,,, 출력이 안되는 이유는 Number(String임으로)
console.log(Number("123hello")); // output: NaN,,, 출력이 안되는 이유는 Number에(String이 들어가있으므로)
console.log(Number(true)); // output: 1
console.log(Number(false)); // output: 0
console.log(Number(null)); // output: 0
console.log(Number(undefined)); // output: NaN,,, 아예 없기때문에

console.log(parseInt(123.123)); // int처럼 소수점 제외 123 출력
console.log(parseFloat(123.123)); // float 소수점 포함 123.123출력


// 형 변환 예제 Boolean(true, false) 
// 문자열 또는 숫자가 있으면 true 문자가 없거나 숫자 null, undefined 등의 것들은 false
console.log(Boolean("")); // output: false
console.log(Boolean("123")); // output: true
console.log(Boolean("hello")); // output: true
console.log(Boolean("0")); // output: true
console.log(Boolean(0)); // output: false
console.log(Boolean(123)); // output: true
console.log(Boolean(NaN)); // output: false
console.log(Boolean(null)); // output: false
console.log(Boolean(undefined)); // output: false

