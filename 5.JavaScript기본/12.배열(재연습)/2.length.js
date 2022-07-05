/** length
 * 배열의 length
 * 배열에서 가장 높은 인덱스를 추적
 */

const arr = [1,2,3];
console.log(arr); // [1,2,3]
console.log(arr.length); // 3

const arr2 = [1,2,3];
arr2[5] = undefined;
console.log(arr2); // [ 1, 2, 3, <2 empty items>, undefined ]
/* 5번째 배열에 undefined를 넣는다고 했을때  2개는 비어있음 그래서
* <2 empty items>라고 나오게 된다. */
console.log(arr2.length); // 6
/* undefiend로 비어있지만 undefined도 length로 계산되서 6으로 나옴 */

const arr3 = [1,2,3,4,5,6,7,8,9];
console.log(arr3.length); // 9
let a = arr3.length = 20;
console.log(a); // 20
/* 배열의 길이는 1~9까지의 길이로 했을때 9이다
* 하지만 arr3.length = 20;이라고 임의 수를 넣고 답을 구하면
* 길이는 20이 된다.
*/

const arr4 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr4); // [1,2,3,4,5,6,7,8,9,10]
console.log(arr4.length); // 10

let b = arr4.length = 0;
console.log(b); // 0
/* 원래는 배열의 길이는 10이다 하지만 arr4.length = 0;으로 0
* 을 배열의 길이에 넣고 이것을 출력 했을 때는 0이 된다.*/
