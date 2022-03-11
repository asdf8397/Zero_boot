/* primitive type */
typeof undefined; // 'undefined'
typeof true; // 'boolean'
typeof "string"; // 'string'
typeof 123; // number
typeof 9007199254740992n; // 'bigint' // 최근에 나온 타입
typeof Symbol(); // 'Symbol'
typeof null; // 'object'

let a = typeof Number.MAX_SAFE_INTEGER; // 숫자의 가장 안전한 값을 초과한 number을 bigint라고 한다.

/* 원시 값 */

const test = "string";
console.log(test.toUpperCase()); // STRING


console.log(test); // string

test1 = test.toUpperCase();

console.log(test1); // SSTRING 담아서 조절해야함


const bool = false;
console.log(!bool); // true
console.log(bool); // false

bool1 = !bool;
console.log(bool1); // 원시타입 조절