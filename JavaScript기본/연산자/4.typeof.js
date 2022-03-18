/* 4. typeOf */

// primitive value 구분할때: string, number, bigint, boolean, undefined, symbol, null
// typeOf: 지금의 값이 어떤 타입인지 프로그램이 찾아주게 한다.

typeof "string"; // String
typeof 123; // number
typeof 1n; // BigInt
typeof true; // Boolean
typeof Symbol(); // Symbol
typeof undefined; // undefined
// typeof func(); // function
typeof []; // object
typeof {}; // object
typeof null; // object

console.log(typeof("string"));
console.log(typeof(123));
console.log(typeof(1n));
console.log(typeof(true));
console.log(typeof(Symbol));
console.log(typeof(undefined));

const func = function() {};
function func2() {}
console.log(typeof(func));
console.log(typeof(func2));
console.log(typeof([]));
console.log(typeof({}));
console.log(typeof(null));
// null은 원래 설계오류다 object가 아니지만 초기에 object로 설정되서 계속 object로 등록은 되어있다.