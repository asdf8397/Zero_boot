/** 정수(Integer)
 * -- JS는 부동소수점(IEEE - 754) Number만 존재
 * -- 정수를 저장하는 2가지 방법
 * 1. 10진 소수가 없는 작은 Number는 정수를 오래 유지 (예, 31비트)
 * 2. 비트 연산자를 이용 32비트를 정수로 바꿔 변환
 */

// 안전한 정수의 최대 값
Number.MAX_SAFE_INTEGER;
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
let number_MAX = Number.MAX_SAFE_INTEGER;
console.log(number_MAX); // 9007199254740991

// 안전한 정수의 최소 값
Number.MIN_SAFE_INTEGER;
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
let number_MIN = Number.MIN_SAFE_INTEGER;
console.log(number_MIN); // -9007199254740991

/** 소수점을 다루는 방법에 가깝다.
 * 가장 가까운 정수를 내릴때 floor
 * 숫자의 소수점을 제거 
 */
console.log(Math.floor(4.2));
// output: 4 ,,, 소수점 뒷자리 제거
const a = Math.floor(4.2);
console.log(a); // output: 4

console.log(Math.floor(4.6));
// output: 4
const b = Math.floor(4.6);
console.log(b);

/** 가장 가까운 정수를 올릴때
 * Math.ceill은 소숫점 뒷자리 그냥 올림
 */
console.log(Math.ceil(4.9)); // output: 5
const c = Math.ceil(4.9);
console.log(c); // output: 5
console.log(Math.ceil(4.4)); // output: 5

/** 가장 가까운 정수로 반올림
 *  소수점 뒷자리 반올림
 */
const d = Math.round(3.2);
console.log(d); // output: 3
const e = Math.round(4.6);
console.log(e); // 5