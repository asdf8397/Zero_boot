/**
 * 암시적 & 명시적 형변환
 */

/** 형변환 하는 방법
 * !! => Boolean
 * Number(값) String(값) Boolean(값) Array.from(값) <= 명시적 형
 * () 괄호 안의 값은 number 때는 number에 맞는 값으로
 * string일땐 string에 맞는 값으로 변환
 */

/** 암시적 형변환
 * 따로 지정해주지 않았으면 자동적으로 결과에서 number, String이 나뉘어서 적힌다.
 */

const result1 = 1 + "입니다.";
const result2 = `${1} 입니다.`;
const result3 = "11" + 11;
const result4 = `11 ${11}`;
const result5 = "2" * "2";
console.log(result1); // 1입니다.
console.log(result2); // 1입니다.
console.log(result3); // 1111
console.log(result4); // 1111
console.log(result5); // 4

/* 비교 */
console.log(typeof result1); // string
console.log(typeof (result1)); // string
console.log(typeof result2); // string
console.log(typeof (result2)); // string
console.log(typeof result3); // string
console.log(typeof (result3)); // string
console.log(typeof result4); // string
console.log(typeof (result4)); // string
console.log(typeof result5); // number
console.log(typeof (result5)); // number

/** 명시적 형변환
 * 따로 string number를 지정해주고 number, string으로 결과 도출
 */

let change_result1 = String(1) + "입니다";
let change_result2 = Number("11") + 11;
let change_result3 = Number("5") * 3;
let change_result4 = Number(String(["111"])) + 111;
console.log(change_result1); // 1입니다.
console.log(change_result2); // 22
console.log(change_result3); // 15
console.log(change_result4); // 222

console.log(typeof change_result1); // string
console.log(typeof (change_result1)); // string
console.log(typeof change_result2); // number
console.log(typeof (change_result2)); // number
console.log(typeof change_result3); // number
console.log(typeof (change_result3)); // number
console.log(typeof change_result4); // number
console.log(typeof (change_result4)); // number