/* Math */

/* 1. MAX/MIN */
console.log(Math.max(1, -1)); // output: 1
console.log(Math.min(1, -1)); // output: -1

console.log(Math.max(1, -1, 5, 23, 17, -4)); // output: 23
console.log(Math.min(1, -1, 5, 23, 17, -4)); // output: -4

let nums = [1, -1, 5, 23, 17, -4];
// use apply
console.log(`Max: ${Math.max.apply(null, nums)}`); // output: Max: 23
console.log(`Max: ${Math.min(null, nums)}`); // output: Max: NaN

// use spread
console.log(`Max: ${Math.max(...nums)}`); // output: Max: 23
console.log(`Min: ${Math.min(...nums)}`); // output: Min: -4


/* 2. ABS */
// .abs는 절대값
console.log(Math.abs(1)); // output: 1
console.log(Math.abs(-1)); // output: 1
console.log(Math.abs(-Infinity)); // output: Infinity

/* 속성 및 랜덤 */
// 0과 1사이의 난수 랜덤 값: Math.random();

/* 1. Math property */
console.log(Math.E); // output: 2.718
console.log(Math.PI); // output: 3.141592653589793 // 원주율


/* 2. Random */
for(let i = 0; i < 3; i++) {
    console.log(Math.random());
} // output: 랜덤으로 3개의 랜덤값이 추출된다.

for(let i = 0; i < 3; i++) {
    console.log(Number.parseInt(Math.random() * 10));
} // output: 랜덤으로 3개의 값을 추출하고 parseInt 정수의 값으로 추출한다.

/* 제곱 / 제곱근 / 소수점 처리 */

/* 1. pow */ // pow 특정숫자와 거듭제곱 값을 계산해주는 함수
// console.log(Math.pow(대상숫자, 거듭제곱 횟수))
console.log(Math.pow(2,3)); // output: 8
console.log(2 ** 3); // output: 8  // 2의 3제곱
console.log(3 ** 3); // output: 27 // 3의 3제곱

/* 2. sqrt */ // sqrt 특정숫자의 제곱근 값을 계산해주는 함수
console.log(Math.sqrt(4)); // output: 2
console.log(Math.sqrt(2)); // output: 1.4142135.......
console.log(Math.sqrt(9)); // output: 3

/* 3. round, ceil, floor */

/* round */ // round 반올림
console.log(Math.round(3.5)); // output: 4
console.log(Math.round(-2.3)); // output: -2
console.log(Math.round(-2.7)); // output: -3

/* ceil */ // ceil 올림
console.log(Math.ceil(3.5)); // output: 4
console.log(Math.ceil(-2.3)); // output: -2
console.log(Math.ceil(-2.7)); // output: -2

/* floor */ // floor 내림
console.log(Math.floor(3.7)); // output: 3
console.log(Math.floor(-2.3)); // output: -3
console.log(Math.floor(-2.7)); // output: -3