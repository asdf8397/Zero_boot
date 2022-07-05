/** 배열의 특성
 * 1. 객체
 * 2. index: value(딕셔너리)
 */

const arr = [1,2,3]; // 배열
console.log(arr); // [1,2,3]

const arr2 = new Array(1,2,3,4,5); // 배열을 새로 만들기 할때 new Array(지정함)
/* new Array는 배열, items: new Array(안에 있는) 1,2,3,4,5 같은 items들
    이것들은 객체로 변환된다,, 객체로 변환될 것들을 items라고 한다.
 */
console.log(arr2);

console.log("");

console.log(arr); // [1,2,3,4,5]
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // undefined
console.log(arr[4]); // undefined

console.log("");

console.log(arr2[0]); // 1
console.log(arr2[1]); // 2
console.log(arr2[2]); // 3
console.log(arr2[3]); // 4
console.log(arr2[4]); // 5
console.log(arr2[5]); // undefined

console.log("");

const arr3 = new Array(1,2);
console.log(arr3); // [1,2]
arr3[2] = 3; // 배열의 [2]자리에 3을 추가함
console.log(arr3); // [1,2,3]
arr3[3] = 4;
console.log(arr3); // [1,2,3,4]
arr3[4] = 5;
console.log(arr3); // [1,2,3,4,5]