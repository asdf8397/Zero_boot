/* 8.배열 - 요소 정렬 */
/**
 * sort  
 * 정렬 되어있지 않는 배열을 정렬할때 사용한다.
 */

const numbers = [4,2,5,1,3];
const orderNumbers = numbers.sort(function(a, b) {
    return a-b;
});

console.log(orderNumbers); // output: [ 1, 2, 3, 4, 5 ]

const numbers2 = [4,2,5,1,3];
const orderNumbers2 = numbers2.sort(function(a, b) {
    return b-a
});
console.log(orderNumbers2); // output: [ 5, 4, 3, 2, 1 ]

const strings = ["마","가","라","나","다"];
const orderString = strings.sort(function(a,b) {
    return a.localeCompare(b);
});
console.log(orderString); // output: [ '가', '나', '다', '라', '마' ]

const strings2 = ["마","가","라","나","다"];
const orderString2 = strings2.sort(function(a,b) {
    return b.localeCompare(a);
});
console.log(orderString2); // output: [ '마', '라', '다', '나', '가' ]
/* .localeCompare()은 메서드는 기준 문자열과 비교했을때 비교 대상 문자열이 정렬상 전에 오는지
후에 오는지 혹은 같은 순서에 배치되는지 알려주는 숫자를 리턴합니다. */


/* return을 화살표 함수로 사용가능하다. */
/*const string3 = ["마","가","라","나","다"];
const orderString3 = string3.sort(function(a, b) => b.localeCompare(a)) */

// console.log(orderSTring3); 화살표(=>) 함수로 return을 대신할 수 있음

const String4 = ["마","가","라","나","다"];
const 내림차순 = (a,b) => b.localeCompare(a); // => return 대신 화살표 함수 사용할 수 있음
const orderNumbers3 = String4.sort(내림차순);
console.log(orderNumbers3);