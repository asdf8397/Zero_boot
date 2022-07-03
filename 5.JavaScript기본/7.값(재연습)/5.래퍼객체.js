/* 원시값의 래퍼 객체 */
const bool = false;
const num = 123;
const str = "String";
console.log(bool); // false
console.log(num); // 123
console.log(str); // String

const bool2 = new Boolean(false);
const num2 = new Number(123);
const str2 = new String("string");
console.log(bool2); // [Boolean: false]
console.log(num2); // [Number: 123];
console.log(str2); // [String: "string"]

console.log(typeof bool); // boolean
console.log(typeof num); // Number
console.log(typeof str); // String

console.log(typeof bool2); // Object
console.log(typeof num2); // object
console.log(typeof str2); // object

let New_boolean = false;
let New_num = 123;
let New_str = "String";
let New_boolean2 = new Boolean(false);
let New_num2 = new Number(123);
let New_str2 = new String("String");

console.log(New_boolean instanceof Boolean); // false
console.log(New_num instanceof Boolean); // false
console.log(New_str instanceof Boolean); // false
console.log(New_boolean2 instanceof Boolean); // true 유일한 boolean
console.log(New_num2 instanceof Boolean); // false
console.log(New_str2 instanceof Boolean); // false