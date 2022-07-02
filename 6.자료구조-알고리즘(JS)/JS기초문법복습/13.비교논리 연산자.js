// 비교 연산자
// 비교 연산자 예제

console.log("z" > "a"); // output: true
console.log("hello" < "hi"); // output: true
console.log("hello" >= "helloo"); // output: false
console.log("5" <= 10); // output: false
console.log(true == 1); // output: true
console.log(false != 123); // output: true
console.log(true === 1); // output: false
console.log(false !== 123); // output: true

// 논리 연산자
// 좌항과 우항의 피연산자 간의 논리 값을 연산하여 참 또는 거짓을 결과로 얻는 연산자
// 논리 연산자: &&(and), || (or), !(not)

// 논리 연산자의 예제
console.log(true || false); // output: true
console.log(Boolean(0 || false)); // output: false
console.log(Boolean(123 || false)); // output: true
console.log(Boolean(123 && 0)); // output: false
console.log(Boolean(false && false)); // output: false
console.log(Boolean(false && true)); // output: false
console.log(Boolean(true && 3)); // output: true
console.log(Boolean(0 && false)); // output: false 
console.log(!false); // output: true
console.log(!123); // output: false