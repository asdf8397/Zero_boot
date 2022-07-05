const sigleQuote = "string";
const doubleQuote = "string";

/* ES2015+ */
const backQuote = "string";
console.log(sigleQuote); // string
console.log(doubleQuote); // string
console.log(backQuote); // string

/** 빈문자를 만들때
 * 아무것도 없이 ""를 써줘도 된다.
 * 아무것도 없는 문자열을 null을 써주게 되면 console.log()를 해주면 null로
 * 출력된다.
 */
const empty = "";
console.log(empty); // 아무것도 출력안됨

const empty2 = null;
console.log(empty2); // null

const empty3 = undefined;
console.log(empty3); // undefined

console.log(`${empty} hello`); // hello
console.log(`${empty2} hello`); // null hello
console.log(`${empty3} hello`); // undefined hello