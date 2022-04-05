/**
 * 삼항 연산자
 * 3개의 피연산자, 조건 연산자
 */

const val = (조건) ? 참일때: 거짓일때
// ex) const val = (if) ?(일때) true: false

/*
ex)
if(조건) {
    val1= 참일때;
} else {
    val2 = 거짓일때
}
*/

const age = 21;
const isAdult = age > 20 ? "성인" : "미성연자";
console.log(isAdult);