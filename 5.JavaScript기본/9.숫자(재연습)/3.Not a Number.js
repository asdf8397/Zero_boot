/** 3. Not a Number
 * Not a Number => 숫자가 아니다.
 * NaN, Number.NaN
 */

Number(undefined);
parseInt("숫자로 변환 불가능한 문자열");
Math.log(-1);
10 + NaN;
"가나다라" / 10;

const a = Number(undefined); // Number에 undefined를 넣었기에
const b = parseInt("숫자로 변환 불가능한 문자열");
// parseInt에 문자인 숫자형을 변환시킬수 있지만 글자는 parseInt로 변환불가능
const c = Math.log(-1);
// Math.log(-1)에서 log함수를 -1을 숫자로 표현할 수 없어서
const d = 10 + NaN;
// 10 + NaN을 연산했기 때문에 NaN이 된다.
const e = "가나다라" / 10;
// 문자열과 숫자가 나눠지는 연산이 안되기 때문에 NaN
console.log(a); // NaN
console.log(b); // NaN
console.log(c); // NaN
console.log(d); // NaN
console.log(e); // NaN 