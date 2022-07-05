/** 산술 연산자
 *  +, -, / , *, %
 */

1+1
2-1
10/5
10%2
2*2

console.log(1+1); // 2
console.log(2-1); // 1
console.log(10/5); // 2
console.log(10%2); // 0
console.log(2*2); // 4

let x = 5;
++x; // +1로 x에 대입되어 들어감
console.log(x); // 6

let z = 5;
z++;
console.log(z); // 6

/* 증가 */
let x2 = 1;
x2 = x2 + 1;
console.log(x2); // 2
x2++;
console.log(x2); // 3

/* 감소 */
let z2 = 1;
z2 = z2 - 1;
console.log(z2); // 0
z2--;
console.log(z2); // -1

/* 연산 */
console.log(3 + 4 * 5); // 23
console.log(4 * 3 ** 2); // 3 **2 부터 계산 3의 2승 계산후 *4를 해줌
// 결과 36

