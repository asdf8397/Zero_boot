/* BigInt */

/**
 * BigInt
 * 안정적인 범위의 정수
 */

/* Number.MAX_VALUE */
// Number.MAX_VALUE 속성은 JS가 표현할 수 있는 제일 큰 양의 Number값이라고 해둔다.

/* BigInt */
// BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대인 2^23-1보다 큰 정수를 표현할 수 있는 내장 객체

console.log(Number.MAX_VALUE); // JS에서 가장 큰 Number들
// output: 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER); // JS에서 사용할 수 있는 가장 안전한 큰 Number들
// output: 9007199254740991

console.log(123123123123123123123123123123123123123123);
// output: 1.2312312312312312e+41
// 아주아주 큰 값이라서 뒤로갈수록 number가 생략이 된다
console.log(123123123123123123123123123123123123123123n);
// ouput: 123123123123123123123123123123123123123123n
// 아주아주 큰 값이라서 생략이 된다 생략을 안하게 하려면 number뒤에 n을 붙여주면 생략을 안함

console.log(BigInt(123123123123123123123123123123123123123123));
// output: 123123123123123124525448915071753290514432n
// 아주 큰 값은 생략이 되는데 n을 붙여줘도 된다 하지만 BigInt()를 이용해서 n을 붙여준 것처럼 똑같이 할 수 있다

console.log(BigInt(0) === 0); // false
// BigInt값의 0 === 일반적인 0은 false이다
console.log(BigInt(0) == 0); // true
// BigInt값의 0과 일반적인 0은 느슨한 부등식 == 에선 true이다