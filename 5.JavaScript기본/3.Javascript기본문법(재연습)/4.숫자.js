/* 숫자 */
// JS는 값을 비교할때 엄격한 비교를 해줘야한다.
console.log(1 === 1.0); // output: true

// Math.pow는 제곱
console.log((Math.pow(2, 2))); // output: 4
// Math.pow는 제곱
console.log((Math.pow(2, 9999))) // output: infinity

// isNaN은 숫자를 찾는 것을 숫이자면 true, 숫자가 아니면 false로 나타낸다.
console.log(isNaN(1)); // false
console.log(isNaN("Hi")); // true