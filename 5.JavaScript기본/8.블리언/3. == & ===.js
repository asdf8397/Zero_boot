/**
 * == vs === (비교 연산자)
 * 동일연산자, 동등연산자
 * eqaulity
 */

// == → 느슨한 비교
// === → 엄격한 비교


// 느슨한 비교 ==
console.log(Boolean("1" == 1)); // output: true
console.log("1" == 1); // output: true
console.log(0 == []); // output: true
console.log(0 == ""); // output: true
console.log("" == []); // output: true


// 엄격한 비교 ===
console.log("1" === 1); // output: false
console.log(0 === []); // output: false
console.log(0 === ""); // output: false
console.log("" === []); // output: false

// 비교연산자에서 절대 느슨한 비교연산자가 아니라 엄격한 비교연산자를 사용할 것