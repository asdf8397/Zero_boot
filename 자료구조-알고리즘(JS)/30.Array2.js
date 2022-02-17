// 배열타입확인 및 요소 삭제
// 배열 타입 확인

// 배열 타입 확인 방법: Array.isArray(value)
// Array는 배열 .isArray(배열인지 아닌지 확인)
let num = 123.456;
let str = "Here I am!";
let fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num)); // output: false
console.log(Array.isArray(str)); // output: false
console.log(Array.isArray(fruits)); // output: true


// 배열 요소 삭제
// 배열 일부 요소 삭제: delete array[index] (삭제해도 배열 사이즈가 그대로인 문제점)

let fruits2 = ["apple", "orange", "melon"];

console.log(fruits2); // output: ["apple", "orange", "melon"];
console.log(fruits2.length); // output: 3

delete fruits2[1];
console.log(fruits2); // output: ["apple",<1 empty item>, "melon"];
// output은 apple, melon으로 들어가야되지만 js는 <1 empty item>으로 되고 배열이 있는 것으로 나타냄 그래서 배열 갯수는 3이다.
console.log(fruits2.length); // output: 3

// 메모 일반적으로 배열을 삭제할땐 delete를 사용하지 않는다 삭제된 공간이 안비어있게 되므로 문제가 발생할 가능성 있음