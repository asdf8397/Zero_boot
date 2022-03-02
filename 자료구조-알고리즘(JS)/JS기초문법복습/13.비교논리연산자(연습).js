헷갈린다 다시한번 보자

// 비교연산자
console.log("z" < "a"); // output: false
console.log("hello" < "hi"); // output: true
console.log("hello" >= "helloo"); // output:  false
console.log("5" <= 10); // output: true
console.log("5" < 10); // output: true JS에서는 String과 int형을 동일시함
console.log(true == 1); // output: true // 간단하게 확인
console.log(true === 1); // output: false // true와 1은 같지않음을 확인 String부터 확인 int까지
console.log(false != 123); // output: true
console.log(false !== 123); // output: true

// 논리 연산자 &&(and), ||(or), !(not)
console.log(true || true); // output: true
console.log(Boolean(0 || false)); // output: false 메모: 0은 false 1은 true
console.log(Boolean(123 || false)); // output: true
console.log(Boolean(123 && 0)); // output: false
console.log(Boolean(false && false)); // output: false
console.log(Boolean(false && true)); // output: false
console.log(Boolean(true && 3)); // output: true
console.log(Boolean(0 && false)) // output: false
console.log(!false); // output: true
console.log(!123); // output: false