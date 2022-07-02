// 문자열 분할
// 배열로 문자열 분할: String.split(Separator, limit)
let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result); // output: [ 'apple', 'banana', 'melon' ]
// .split(" ") split안에 들어있는 (" ")는 어떤것을 기준으로 나눌때 예를들어 (,)은 ,을 기준으로 나눌때 사용

console.log(result[0]); // output: apple
console.log(result[1]); // output: banana
console.log(result[2]); // output: melon

let text = "hello";

result = text.split("");
console.log(result); // output: [ 'h', 'e', 'l', 'l', 'o' ]
// hello밖에 없기때문에 .split("")안에 스펠링을 잘라서 나눠서 배열로 출력
console.log(result.length); // output: 5 ,,, hello의 길이
console.log(result[0]); // output: h

result = text.split("", 3);
console.log(result); // output: [ 'h', 'e', 'l' ]
// .split("", 3)을 하면 배열식으로 자르는게 아니라 순서식으로 잘라서 h e i로 자르고
console.log(result.length); // output: 3
// 길이는 3개로 나타날수있다.