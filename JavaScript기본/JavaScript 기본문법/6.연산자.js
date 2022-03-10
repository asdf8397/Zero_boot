/* 연산자 */
// 값의 연산을 위한 사용되는 부호
// 연산의 대상이 되는 피연산자
// 연산을 부호로 표현하는 연산자

/* 연산자(Operator)
= (할당 연산자)
== (비교 연산자)
+ (산술 연산자)
& (비트 연산자)
&& (논리 연산자)
*/

/* 비교 연산자 */
/*
동등(==) 피연산자가 서로 같으면 true를 반환합니다
부등(en_US) (!=) 피연산자가 서로 다르면 true를 반환합니다.
일치(en_US) ( === ) 두 피연산자의 값과 타입이 모두 같은 경우 true를 반환합니다
                    Object.js 와 JavaScript에서의 같음을 참고하세요
불일치(en_US) (!==) 피연산자의 값 또는 타입이 서로 다를 경우 true를 반환합니다
큼(en_US) (>) 왼쪽 피연산자가 오른쪽 피연산자보다 크면 true를 반환합니다.
크거나 같음(en_US) (>=) 왼쪽 피연산자가 오른쪽 피연산자와 같거나 크면 true를 반환합니다
작음(en_US) (<) 왼쪽 피연산자가 오른쪽 피연산자보다 작으면 true를 반환합니다.


// === 서로 같은지 엄격하게 검사
// !== 서로 다른지 엄격하게 검사
// == 서로 같은지 느슨하게 검사
// != 서로 다른지 느슨하게 검사

*/


/* 산술 연산자 */

let count = 0;
// count += 1; // 1을 더해주고 양쪽에 변수와 값이 있으므로 이항연산자이다
count ++; // 양쪽에 변수 값이 없으므로 단항연산자이다 (증가 연산자)
count ++;
count ++;
count ++;
count ++;
count ++;

count --; // 단항연산자 (감소 연산자)

console.log(count);


/* 논리 연산자 */
// 완전 중요하다 제일 많이 사용된다
// &&은 둘다 true 이면 true이다 하나라도 false 이면 false이다
// 둘다 참일때 true 그 외에는 false를 반환한다.
// && → and → 그리고!

var a1 = true && true;
var a2 = true && false;
var a3 = false && true;
var a4 = false && 3 == 4;
var a5 = 'Cat' && 'Dog';
var a6 = false && 'Cat';
var a7 = 'Cat' && false;

console.log(a1); // true
console.log(a2); // false
console.log(a3); // false
console.log(a4); // false
console.log(a5); // Dog
console.log(a6); // false
console.log(a7); // false


/* OR연산자 */
// ||는 둘중 하나가 true이면 true로 반환한다
// || → or → 또는!!

var a1 = true || true;
var a2 = true || false;
var a3 = false || true;
var a4 = false || 3 == 4;
var a5 = 'Cat' || 'Dog';
var a6 = false || 'Cat';
var a7 = 'Cat' || false;


console.log(a1); // true
console.log(a2); // true
console.log(a3); // true
console.log(a4); // false
console.log(a5); // Cat
console.log(a6); // Cat
console.log(a7); // Cat


// 논리 NOT(en_US)(!)
// 값을 뒤집어 볼 수 있는 값

var not1 = !true;
var not2 = !false;
var not3 = !'Cat';

console.log(not1); // false
console.log(not2); // true
console.log(not3); // false


/* 삼항연산자 */
const 삼항연산자 = 1 === '1' ? '참일때' : '거짓일때';

let temp2;

if (1 === '1') {
    temp2 = '참일때';
} else {
    temp2 = '거짓일때';
}