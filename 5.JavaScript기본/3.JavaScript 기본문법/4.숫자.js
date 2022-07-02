/* 숫자 */
// JS는 값을 비교할때 엄격한 비교를 해줘야한다 ""==="" 3개
console.log(1 === 1.0); // true

// Math.pow는 제곱
console.log((Math.pow(2, 9999))); // Infinity

// isNaN은 매개변수가 숫자가 아니면 true 매개변수가 숫자이면 false로 반환
console.log(isNaN(1)); // false
console.log(isNaN("가나다")); // true