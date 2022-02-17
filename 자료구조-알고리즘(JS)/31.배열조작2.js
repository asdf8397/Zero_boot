let fruits3 = ["apple", "orange", "melon"];

console.log(fruits3.splice(1)); // output: ["orange", "melon"]
// splice(1)은 배열에서 orange melon 출력 1번 배열 이후부터 출력이 됨
console.log(fruits3); // output: ["apple"]

fruits3 = ["apple", "orange", "melon", "strawberry"];
console.log(fruits3.splice(1,1)); // output: ["orange"]
// splice(1,1)은 1번 배열을 지정하고 1번배열 1개만 삭제할거야
console.log(fruits3.splice(1,2));
console.log(fruits3);

console.log(fruits3.splice(1,1, "mango", "kiwi"));
console.log(fruits3);