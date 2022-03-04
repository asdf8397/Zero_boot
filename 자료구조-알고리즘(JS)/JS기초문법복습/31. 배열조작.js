/* 배열 조작 - (1) */

let fruits = ["apple","orange","melon"];
console.log(fruits); // output: ["apple","orange","melon"]

ret = fruits.push("watermelon"); // push는 추가
console.log(fruits); // output: ["apple","orange","melon","watermelon"]
console.log(fruits.length); // output: 4
console.log(ret); // output: 4
ret = fruits.pop(); // pop은 삭제
console.log(fruits); // output: ["apple","orange","melon"]
console.log(ret); // output: watermelon // .pop에 의해 삭제된 것을 watermelon을 가져옴


// 바열 추가 / 삭제
// unshift는 배열의 제일 앞에 추가 / shift는 배열의 제일 앞의 것을 삭제
let fruits2 = ["apple","orange","melon"];
ret2 = fruits2.unshift("watermelon");
console.log(fruits2); // output: ["watermelon","apple","orange","melon"]
console.log(ret2); // output: 4

// shift
let fruits3 = ["a","b","c","d","e","f","g"];
ret3 = fruits3.shift();
console.log(fruits3); // output: [ 'b', 'c', 'd', 'e', 'f', 'g' ]
console.log(ret3); // output: a

/* 배열 조작 - (2) */
let fruits4 = ["apple","orange","melon"];
console.log(fruits4.splice(1)); // output: ["orange","melon"]
console.log(fruits4); // output: ["apple"]

fruits4 = ["apple","orange","melon","strawberry"];
console.log(fruits4.splice(1,1)); // output: ["orange"] // orange 삭제

console.log(fruits4); // output: [ 'apple', 'melon', 'strawberry' ]

console.log(fruits4.splice(1,1, "mango","kiwi")); // output: ['melon'] 삭제
console.log(fruits4); // output: ['apple','mango','kiwi','strawberry'];

let fruits5 = ["apple","orange","melon"];
console.log(fruits5.slice(1)); // output: ['orange','melon']
console.log(fruits5); // output: ['apple','orange','melon']

console.log(fruits5.slice(1,2)); // output: ['orange']
console.log(fruits5.slice(-2)); // output: ['orange','melon']

/* 배열 병합 */
// 다중 배열 병합: Array.concat(arg1, arg2.....)
// concat을 주어졌을때 뒤에 배열에 stirng문자 합치기
let fruits6 = ["apple","orange","melon"];
console.log(fruits6.concat("strawberry")); // output: ['apple','orange','melon','strawberry']
console.log(fruits6.concat(["cherry","banana"])); // output: ['apple','orange','melon','cheery','banana']
console.log(fruits6.concat(["cherry","banana"], "mango")); // output: ['apple','orange','melon','cherry','banana','mango']