// 여기서 부터 배열조작(2)

// 배열 조작 - (3)
// 배열삭제(index)
// 배열 요소 삭제: Array.slice([start], [end])

let fruits4 = ["apple", "orange", "melon"];

console.log(fruits4.slice(1)); // output: ["orange", "melon"]
console.log(fruits4); 

console.log(fruits4.slice(1,2));
console.log(fruits4.slice(-2));


// 배열 병합
// 다중 배열 병합: Array.concat(arg1, arg2....)

let fruits5 = ["apple", "orange", "melon"];

console.log(fruits5.concat("strawberry"));
console.log(fruits5.concat(["cherry", "banana"]));
console.log(fruits5.concat(["cherry", "banana"], "mango"));

// 배열 반복문
let fruits6 = ["apple", "orange", "melon"];

// 1. use for (index)
for(let i = 0; i < fruits6.length; i++) {
    console.log(fruits6[i]);
}
//output: ["apple", "orange", "melon"]


// 2. use for ...(element) of
for(let New_name of fruits6) {
    console.log(New_name);
}
// output: apple, orange, melon


// // 3. use for ...(key) in
for(let key in fruits6) {
    console.log(fruits6[key]);
}
// output: [apple, orange, melon]