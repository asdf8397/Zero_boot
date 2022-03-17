/* 1. 숫자 리터럴 */
/* BigInt */

// JS에서 표기할 수 있는 number표기를 벗어난 nuber표기를 할때 BigInt를 사용한다.
// JS에서 표기할 수 있는 안전한 number를 표기를 벗어난 것을 표기할때 BigInt를 사용함 IEEE 754

let a = Number.MAX_SAFE_INTEGER
console.log(a); // output: 9007199254740991

// 사람은 10진수를 사용하고 컴퓨터는 2진수를 사용한다

/* 16진수를 사용할때 */
/* 보통 잘 사용하지 않으며 CSS에서 실수를 사용해서 효과 넣을때 사용할수있음
3.141 : 3.141
0xFF : 255
5e2 : 500
*/