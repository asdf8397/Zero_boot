/* primitive type */
typeof undefined; // undefined
typeof true; // boolean
typeof false; // boolean
typeof "String" // String
typeof 123; // number
typeof Symbol(); // Symbol;
typeof null; // object

let a = typeof Number.MAX_SAFE_INTEGER;
// 숫자의 가장 안전한 값을 초과한 number를 bigint라고 한다.

/* 원시 값 */
const test_upper = "string";
console.log(test_upper.toUpperCase()); // STRING;
const test_lower = "STRING";
console.log(test_lower.toLowerCase()); // string

const bool  = false;
console.log(!bool); // true;
console.log(bool); // false;

const boool = true;
bool2 = !boool;
console.log(bool2); // false
console.log(!bool2); // true
 
