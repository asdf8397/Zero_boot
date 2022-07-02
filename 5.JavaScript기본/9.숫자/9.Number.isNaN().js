/* Number.isNaN() */

/** Not a Number는
 * 숫자로 읽어낼 수 없다.
 * 잘못된 계산 결과식
 * 정의할 수 없는 결과식
 * 문자열이 포함된 계산식(덧셈 제외)
 */

/** NaN을 검사하는 방법은 2가지가 있다
 * isNaN, Number.isNaN 방법 2가지 
 * isNaN(느슨한 검사), Number.isNaN(엄격한 검사)
 */
// 느슨하게 검사
isNaN(undefined);
isNaN({});
isNaN("문자열");

console.log(isNaN(undefined));
console.log(isNaN({}));
console.log(isNaN("문자열"));


// ES2015+ (엄격하게 검사) 2015년 이후부터 수정되서 적용됨
// Not a Number(NaN)을 검사하기 위해서는 엄격한 검사인 ES2015+인 Number.isNaN을 이용할 것
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("문자열");

console.log(Number.isNaN(undefined));
console.log(Number.isNaN({}));
console.log(Number.isNaN("문자열"));