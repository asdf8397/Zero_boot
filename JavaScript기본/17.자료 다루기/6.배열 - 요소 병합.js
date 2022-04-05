/* 6. 배열 - 요소 병합 */
/* Array.prototype.concat(); */
// concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열로 반환합니다.

const array = ["JS", "HTML", "CSS"];
const newArray = array.concat(["TS", "JAVA"]);
console.log(array); // output: ['JS','HTML','CSS'] /// concat은 원본이 변형되지 않음
console.log(newArray); // output: ['JS','HTML','CSS','TS','JAVA'] // .concat으로 TS, JAVA를 배열의 뒤에 바로 추가함

const newArray2 = ["TS", "JAVA"].concat(array);
console.log(newArray2); // output: ['TS','JAVA','JS','HTML','CSS'] 
/* ["TS", "JAVA"]라는 배열이 있고 여기 뒤에 .concat(array)를 붙이면 ["JS", "HTML", "CSS"]이 붙게된다. */


/* 배열구조분해 */
const newArray3 = [...array, "TS", "JAVA"] 
/* ...array는 기존의 있던 배열을 나타내게됨 뒤에 "TS", "JAVA"를 붙이면 
    output: ['JS','HTML','CSS','TS','JAVA'] 로 출력됨*/


/* 배열을 따로 할당해서 합치는 방법 */
const array10 = ["JS","HTML","CSS"];
const other = ["TS","JAVA"];
console.log(...array10, ...other); // output: JS HTML CSS TS JAVA
// 둘다 따로 배열을 할당하고 따로 ,을 넣어서 출력을 했지만 배열로 출력이 안되고 배열의 element가 출력이 된다

const array_Sum = [...array10, ...other];
console.log(array_Sum); // output: ['JS','HTML','CSS','TS','JAVA']
// array_Sum을 [] 중괄호로 묶어서 안에 const array10, other의 element를 넣었을때 출력은 배열 형식으로 출력됨
