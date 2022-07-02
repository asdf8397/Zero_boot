/* Array */

let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1);
console.log(arr_2);

let fruits = ["apple", "orange", "melon"];
console.log(fruits); // output: ['apple', 'orange', 'melon']
console.log(fruits.length); // output: 3
console.log(fruits[0]); // output: apple
console.log(fruits[1]); // output: orange
console.log(fruits[2]); // output: melon

fruits[1] = "kiwi";
console.log(fruits); // output: ['apple', 'orange', 'melon']


// 배열의 실체

let nums = []
nums.push("one");
nums.push("two");
console.log(nums); // output: ["one","two"]
console.log(nums.length); // output: 2

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums); // output: ["one","two", once: 'once', twice: 'twice']
console.log(nums.length); // output: 2


/* 배열 타입 Array.isArray(value) */
// isArray: 전달된 데이터가 배열이면 true , 배열이 아니면 false
let num = 123.456;
let str = "Here I am!";
let fruits2 = ["apple", "orange", "melon"];
console.log(Array.isArray(num)); // output: false
console.log(Array.isArray(str)); // output: false
console.log(Array.isArray(fruits)); // output: true


// 배열 요소 삭제
let fruits3 = ["apple", "orange", "melon"];

console.log(fruits3); // output: ['apple', 'orange', 'melon']
console.log(fruits3.length); // output: 3

delete fruits3[1];
console.log(fruits3); // output: ['apple','melon']
console.log(fruits3.length); // output: 3 // 이유는 배열에 빈 곳은 <1 empty item>으로 채워진다.