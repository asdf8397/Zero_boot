/** typeOf
 * primitive value 구분할때: string, number, bigInt, boolean
 * undefined, Symbol, null
 *
 * typeOf: 지금의 값이 어떤 타입인지 프로그램이 알려준다.
 */

// typeof "string"; // string
// typeof 123; // number
// typeof 1n; // BigInt
// typeof true; // Boolean
// typeof Symbol(); // symbol
// typeof undefined; // undefined
// typeof func(); // function
// typeof []; // object
// typeof {}; // object
// typeof null; // object

console.log(typeof "string"); // type: string
console.log(typeof ("string")); // type: string
console.log("");
console.log(typeof 123); // type: number
console.log(typeof (123)); // type: number
console.log("");
console.log(typeof 1n); // type: BigInt
console.log(typeof (1n)); // type: BigInt
console.log("");
console.log(typeof true); // type: boolean
console.log(typeof (true)); // type: boolean
console.log("");
console.log(typeof Symbol()); // type: symbol
console.log(typeof (Symbol())); // type: symbol
console.log("");
console.log(typeof undefined); // type: undefined
console.log(typeof (undefined)); // type: undefined
console.log("");

/* function은 typeof의 검사에 안됨 type error 발생*/
// console.log(typeof func()); // type: function
// console.log(typeof (func())); // type: function
console.log(typeof []); // type: object
console.log(typeof ([])); // type: object
console.log("");
console.log(typeof {}); // type: object
console.log(typeof ({})); // type: object
console.log("");
console.log(typeof null); // type: object
console.log(typeof (null)); // type: object

/* null은 원래 설계오류이다
* object가 아니지만 초기에 object로 설정되서
* 계속 object로 등록은 되어있다.
* */