// Math
/*
. 표준 Built-in 객체로서 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체
. Math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적이기에 Math.function()으로 언제든 호출 가능
. 대표 속성(property)및 메서드(method)
    ... 오일러 상수(e): Math.E
    ... PI: Math.PI
    ... 절대값: Math.abs(x)
    ... 최대값: Math.max(x)
    ... 최소값: Math.min(x)
    ... 랜덤 난수 값: Math.random()
    ... 제곱과 제곱근: Math.pow(x,y), Math.sqrt(x)
    ... 소수점 처리: Math.round(x), Math.ceil(x), Math.floor(x),
*/


// 최대/최소/절대값
// 최대값: Math.max(...x), 최소값: Math.min(...x), 절대값: Math.abs(x)
// 배열을 인수로 받아 최대/최소를 산출하려면 apply함수 혹은 스프레드 문법 사용 필요

/* 1. MAX/MIN */
console.log(Math.max(1, -1)); // output: 1  // () 안에서 최대값은 1
console.log(Math.min(1, -1)); // output: -1  // () 안에서 최소값은 -1

console.log(Math.max(1, -1, 5, 23, 17, -4));  // output: 23
console.log(Math.min(1, -1, 5, 23, 17, -4));  // output: -4

let nums = [1, -1, 5, 23, 17, -4];
// use apply
console.log(`Max: ${Math.max.apply(null, nums)}`); // output: 23
console.log(`Min: ${Math.min.apply(null, nums)}`); // output: -4
// use spread
console.log(`Max: ${Math.max(...nums)}`); // output: 23
console.log(`Min: ${Math.min(...nums)}`); // output: -4

/* 2. ABS */
console.log(Math.abs(1)); // output: 1 //// abs는 절대값을 구할때 사용
console.log(Math.abs(-1)); // output: 1  //// abs는 절대 값을 구할때 사용
console.log(Math.abs(-Infinity)); // output: Infinity  /// abs는 절대 값이므로 +Infinity


// 속성 및 랜덤
// 0과 1사이의 난수 랜덤 값: Math.random()

/* 1. Math property */
console.log(Math.E);  // output: 2.718281828459045
console.log(Math.PI);  // output: 3.141592653589793


/* 2. Random */
for (let i = 0; i < 3; i++) {
    console.log(Math.random());
}
// output:



for (let i = 0; i < 3; i++) {
    console.log(Number.parseInt(Math.random() * 10));
}