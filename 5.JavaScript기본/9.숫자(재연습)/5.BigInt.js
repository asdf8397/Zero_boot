/** BigInt
 * 안정적인 범위의 정수
 *
 * Number.MAX_VALUE
 * Number.MAX_VALUE 속성은 JS가 표현할 수 있는 제일 큰 양의 Number값이라고
 * 해둔다.
 * 
 * BigInt
 * BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대인 2^23-1보다
 * 큰 정수를 표현할 수 있는 내장객체
 */

console.log(Number.MAX_VALUE) // JS에서 가장 큰 Number들
// output: 1.7976931348623157e+308

console.log(Number.MAX_SAFE_INTEGER)
// JS에서 사용할 수 있는 수 중에서 가장 안전한 큰 Number들
// output: 9007199254740991

console.log(123123123123123123123123123123123123123123123123123);
// output: 1.2312312312312313e+50

console.log(123123123123123123123123123123123123123123123123n);
// output: 123123123123123123123123123123123123123123123123n
// 아주 큰 수에 n을 붙이면 끝까지 출력이 됨
 
console.log(BigInt(0) === 0);
// 엄격한 검사
// BigInt의 0과 일반적인 0은 다르다
// 값은 false이다.
/** 엄격한 검사
 * BigInt의 0과 일반적인 0의 부등식은 다르다
 * 결과는 false
 */

console.log(BigInt(0) == 0);
/** 느슨한 검사
 * BigInt값이 0일때 일반적인 0의 부등식은 같다.
 * 결과는 true
 */