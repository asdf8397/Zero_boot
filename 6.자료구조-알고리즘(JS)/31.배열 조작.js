// 배열 조작 - (1)
// 배열 추가/삭제(LIFO - Back) // LIFO: last in first out
// 배열 추가: Array.push(element), 배열삭제: Array.prototype()

let fruits = ["apple", "orange", "melon"];

ret = fruits.push("watermelon");
console.log(fruits); // output: ["apple", "orange", "melon", "watermelon"];
console.log(fruits.length); // output: 4
console.log(ret); // output: 4
ret = fruits.pop(); 
console.log(fruits); // output: ["apple", "orange", "melon"]
console.log(ret); // output: watermelon /// ret는 .pop에 의해서 삭제된 데이터를 ret를 통해서 가져올수있다


// 배열 추가/삭제(LIFO - Front) 
// 배열 추가: Array.unshift(element), 배열삭제: Array.shift()
// pop은 데이터를 삭제
let fruits2 = ["apple", "orange", "melon"];

ret2 = fruits2.unshift("watermelon"); 
// unshift를 통해서 배열의 ["watermelon", "apple", "orange", "melon"]
console.log(fruits2);
console.log(fruits2.length);
console.log(ret2);

ret2 = fruits2.shift();

console.log(fruits2); // output: ["apple", "orange", "melon"]
console.log(ret2); // output: watermelon
// shift();는  watermelon을 return해서 watermelon을 출력한다.
ret2 = fruits2.unshift("watermelon");
console.log(fruits2); // output: ["watermelon", "apple", "orange", "melon"]
console.log(ret2); // 4


// 배열 조작 - (2)
// 배열 삭제/변경
// 배열요소 삭제/변경: Array.splice(index[, deleteCount, elem1, ...., elemN])

let fruits3 = ["apple", "orange", "melon"];

console.log(fruits3.splice(1)); // output: ["orange", "melon"]
// splice(1)은 배열에서 orange melon 출력 1번 배열 이후부터 출력이 됨
console.log(fruits3); // output: ["apple"]

fruits3 = ["apple", "orange", "melon", "strawberry"];
console.log(fruits3.splice(1,1)); // output: ["orange"]
// splice(1,1)은 1번 배열을 지정하고 1번배열 1개만 삭제할거야

// console.log(fruits3.splice(1,2)); // output: ["melon", "strawberry"] // ["orange"]는 삭제되서 그자리에 melon과 strawberry가 들어옴

console.log(fruits3); // output: ["apple", "melon", "strawberry"]

console.log(fruits3.splice(1,1, "mango", "kiwi")); 
// output: ["melon"]  // "orange"삭제되고 그 자리에 "melon"이 들어옴 그리고 1,1을 지정한 자리에 mango, kiwi 들어옴
console.log(fruits3); // output: ["apple", "mango", "kiwi", "strawberry"]


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
// output: 

// 2. use for ...(element) of
for(let fruits6 of fruits6) {
    console.log(fruits6);
}

// 3. use for ...(key) in
for(let key in fruits6) {
    console.log(fruits6[key]);
}