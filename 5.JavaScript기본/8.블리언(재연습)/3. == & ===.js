/** 비교연산자
 * == vs ===
 * 동일연산자, 동등연산자
 * equality(==, ===)
 * 
 * == 느슨한 비교
 * === 엄격한 비교
 * 
 * 비교연산자를 사용할때는 느슨한 비교연산자를 사용하지말고 엄격한 비교 연산자를 사용할 것
 */

// 느슨한 비교
console.log(Boolean("1" == 1)); // true
console.log("1" == 1); // true
console.log(0 == []); // true
console.log(0 == ""); // true
console.log("" == []); // true

// 엄격한 비교
console.log("1" == 1); // false
console.log(0 === []); // false
console.log(0 === ""); // false
console.log("" === []); // false


