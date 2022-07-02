/* 배열탐색 */
// indexOf는 ()안에 들어가는 값을 찾고싶다 할때 사용한다

/* indexOf, lastIndexOf */
let fruits = ["apple","orange","banana","orange","melon"];

console.log(fruits.indexOf("orange")); // output: 1
console.log(fruits.indexOf("Orange")); // output: -1
console.log(fruits.indexOf("orange", 3)); // output: 3
console.log(fruits.lastIndexOf("orange")); // output: 3
console.log(fruits.lastIndexOf("orange", -3)); // output: 1
console.log(fruits.lastIndexOf("orange", 0)); // output: -1


/* includes */
// 포함되어있는지 true false로 확인
console.log(fruits.includes("banana")); // output: true
console.log(fruits.includes("Banana")); // output: false
console.log(fruits.includes(0)); // output: false

/* 배열 변형 */
// 배열 정렬
// .sort() 오름차순으로 정렬 / .reverse() 내림차순으로 정렬
let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort()); // output: [-1, 0, 1, 2, 4, 5]
console.log(nums.reverse()); // output: [5, 4, 2, 1, 0, -1]


let company = ["삼성전자","LG전자","애플","바이두","테슬라","알리바바","텐센트","카카오","네이버","구글","마이크로소프트"];
console.log(company);
console.log(company.sort());
console.log(company.reverse());

/* 배열변환 */
let fruits2 = ["apple","orange","banana","melon"];
let str1 = fruits2.join();
let str2 = fruits2.join("-");
let str3 = fruits2.join("");
console.log(fruits2); // output: ["apple","orange","banana","melon"];
console.log(str1); // output: apple,orange,banana,melon
console.log(str2); // output: apple-orange-banana-melon
console.log(str3); // output: appleorangebananamelon


let str_separator = fruits2.join(";");
console.log(str_separator); // output: apple;orange;banana;melon;
let result = str1.split(";");
console.log(result); // output: [ 'apple,orange,banana,melon' ]

// split는 문자열을 인자로 주어진 문자열일 기준으로 쪼개서 배열에 담는다