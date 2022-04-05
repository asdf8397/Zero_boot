/* 숫자 */
// JS는 값을 비교할때 엄격한 비교를 해줘야한다 ""==="" 3개
console.log(1 === 1.0); // true

// Math.pow는 제곱
console.log((Math.pow(2, 9999))); // Infinity

// isNaN은 숫자를 찾는 것으로 숫자이면 true 숫자가 아니면 false로 나타낸다
console.log(isNaN(1)); // true
console.log(isNaN("가나다")); // false