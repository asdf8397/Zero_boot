/* 3. Not a Number */

/**
 * Not a Number => 숫자가 아니다
 * - NaN
 * - Number.NaN
 */

Number(undefined);
parseInt("숫자로 변환 불가능한 문자열");
Math.log(-1);
10 + NaN;
"가나다라" / 10;

console.log(Number(undefined)); // undefined가 number로 될 수 없어서 NaN이다
console.log(parseInt("숫자로 변환 불가능한 문자열")); // parseInt("숫자로 변환 불가능한 문자열") number로 해줄수 없기때문에 NaN
console.log(Math.log(-1)); // Math.log에서 log함수에서 -1을 숫자로 표현할수 없으므로 NaN
console.log(10 + NaN); // 10 + NaN과 연산을 했기때문에 NaN이다
console.log("가나다라" / 10); // 문자열과 숫자가 나눠지는데 연산이 안되기때문에 NaN

console.log("가나다라" + 10); // 문자열과 숫자가 더해지기때문에 가나다10 문자열에 숫자가 "10" 문자로 붙어서 가나다라10으로 된다
console.log("가나다라" - 10); // NaN