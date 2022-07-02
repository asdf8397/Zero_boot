/* 호이스팅 */

// using var


/* const let var 차이 */
/*
< const >
const는 상수: 지정된 값으로 변할수없을값을 지정할때 사용

< var, let의 공통점 >
let과 var는 변수로 지정하고 변할 수 있는 값을 지정할때 사용


let var의 차이점
var는 변수선언에서 동일한 변수를 지정해도 에러 발생 (X)
let은 var의 이러한 문제점을 고친것
*/

/* 호이스팅 설명 */

/* var에서의 호이스팅
console.log(b); output: undifined 
여기서 b는 변수를 지정해준적이 없어서 원래는 Syntax error발생해야하지만 var는 undifined를 지정해줘버린다(호이스팅)
var b = 20;
console.log(b); output: 20
*/
/* let에서의 호이스팅
console.log(a); output: Syntax error 여기선 a의 변수를 지정해준적이 없다 output하면 Syntax error발생
let a = 10;
console.log(a); output: 10;
*/

/* var 예시 */
console.log(a);
var a = 10;
console.log(a);

/* 결과 출력하면 */
// output: undefined
// output: 10


/* let 예시 */
console.log(b);
let b = 20;
console.log(b);


/* 결과 출력하면 */
// output: Syntex error
// output: 20

/* 호이스팅의 예 */
// using var
console.log(name1); // output: undefined(찾을수없음)
var name1 = "john";
console.log(name1); // output: john

