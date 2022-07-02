/* 값 */
// 더 이상 평가 될 수 없는 하나의 식으로 ___ 자료형으로 간단히 이루는 값

// 자료형(DATA TYPE)
/*
* 1. 숫자형
* true 블리언(논리형)
* A 문자
* ABC 문자열
* */

// 문자열 값(원시 값)
var str = "apple";
Big_English = str.toUpperCase() // 대문자 변형
console.log(Big_English); // output: APPLE
let str2 = "banana";
console.log(str2.toUpperCase()); // 직접적인 대문자 변형 BANANA

const un = undefined; // 공간을 차지 하지 않은 상태로 데이터가 없는상태
const nu = null; // 데이터가 차지할 공간이 있음에도 안에 데이터의 내용이 없는상태
const bool = false; // false 거짓
const bool2 = true; // true 진실
const num = "0"; // 문자 0
const str3 = "문자열" // str형 문자열

if (num === 0) {
    console.log("num은 0입니다.")
} else {
    console.log("num은 0이 아닙니다.")
};