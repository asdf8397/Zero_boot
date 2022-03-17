const sigleQuote = "string";
const doublequote = "string";

// ES2015+
const backquote = "string";

console.log(sigleQuote);
console.log(doublequote);
console.log(backquote);

// 빈문자를 만들때
// 아무것도 없이 ""를 써줘도 된다
// 아무것도 없는 문자열을 null을 써주게 되면 console.log()를 해주면 null로 출력된다
const empty = "";
console.log(empty); // output: 아무것도 출력 안됨

const empty2 = null;
console.log(empty2); // output: null

const empty3 = undefined;
console.log(empty3); // output: undefined

console.log(empty + " hello"); // output: 빈칸hello
console.log(empty2 + " hello2"); // output: null hello
console.log(empty3 + " hello3"); // output: undefined hello