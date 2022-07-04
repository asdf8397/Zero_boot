/** Infinity
 * -- 너무 크거나 작다
 * -- 지수 1023까지만 허용
 * -- Js에서 표현할 수 없을때 사용한다.
 */
Math.pow(2, 1024);
console.log(Math.pow(2, 1024));
// Math.pow()는 2의 1024 제곱


const result = isFinite(Math.pow(2, 1024));
// isFinite()는 들어간 숫자가 유한이면 true 무한이면 false로 판별해서 출력한다.
console.log(result);

const re_result = isFinite(Math.pow(2,2));
console.log(re_result);
// isFinite()는 들어간 숫자가 유한이면 true 무한이면 false로 판별해서 출력한다.

let number = 3;
console.log(number); // 3
console.log(isFinite(number)); // true
let Infin = Infinity;
console.log(Infin); // Infinity
console.log(isFinite(Infin)); // false
let Not_a_Number = NaN;
console.log(Not_a_Number); // NaN 
console.log(isFinite(Not_a_Number)); // false