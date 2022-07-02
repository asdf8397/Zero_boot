/**
 * 암시적 & 명시적 형변환
 */

// 형 변환하는 방법은
/* 
!! => Boolean
Number(값) string(값) Boolean(값) Array.from(값) ← 명시적인 형
()괄호 안의 값은 number때는 nuber에 맞는 값으로 string일땐 string에 맞는값으로 변환
*/

// 암시적 형변환 /// 따로 지정해주지 않았지만 자동적으로 결과에서 number, string이 나뉘어서 적힌다
const result1 = 1 + " 입니다"; // output: 1 입니다
const result2 = "11" + 11; // output: 1111
const result3 = "2" * "2"; // output: 4
console.log(typeof(result1)); // output: string ,,,,,, int(number)형 보다 string이 우선시 number와 string을 연산하면 string이됨
console.log(typeof(result2)); // output: string ,,,,, number보다 string이 우선시됨 number와 string이 연산하면 string이 됨
console.log(typeof(result3)); // output: number ,,,, string 숫자와 string 숫자가 연산이 된다.
console.log(result1);
console.log(result2);
console.log(result3);

// 명시적 형변환 /// 따로 string number를 지정해주고 number, string으로 결과 도출
let result4 = String(1) + " 입니다";
let result5 = Number("11") + 11;
let result6 = Number("5") * 3;
let result7 = Number(String(["111"])) + 111;
console.log(result4); // output: 1 입니다
console.log(result5); // output: 22
console.log(result6); // output: 15 
console.log(result7); // output: 222
console.log(typeof(result4)); // output: string
console.log(typeof(result5)); // output: number
console.log(typeof(result6)); // output: number
console.log(typeof(result7)); // output: number