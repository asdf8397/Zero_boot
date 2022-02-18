// 배열탐색
// index탐색(앞에서부터): Array.indexOf(item, from)
// index탐색(뒤에서부터): Array.lastIndexOf(item, from)
// 값 포함 여부 확인: Array.includes(item, from)

// indexOf는 ()안에 들어간 값을 찾고싶다 할때 사용한다.
let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange")); // output: 1
console.log(fruits.indexOf("Orange")); // output: -1
// 배열안에 소문자 orange가 있는데 대문자 Orange는 없기때문에 output해줄때 -1로 출력된다
console.log(fruits.indexOf("orange", 3));
/* indexOf는("orange", 3) 앞에서부터 orange를 찾아서 그 자리에서 3번째 orange를 찾으면
    output: 3 이것은 orange가 있는 자리가 orange에서 3번째이다. */

console.log(fruits.lastIndexOf("orange"));
// output: 3
// lastIndexOf는 count를 끝에서 시작해서 배열 앞에서봤을때 3번 배열로 나올때 출력을 3이라고 된다

console.log(fruits.lastIndexOf("orange", -3));
// output: 1
// lastIndexOf("orange", -3)은 뒤에서부터 count했을때 제일 첫번째 나오는 orange를 배열로 했을때 1이다
console.log(fruits.lastIndexOf("orange", 0));
// output: -1
// lastIndexOf("orange", 0)은 뒤에서부터 count했을때 0번째 배열로 정했을때 orange의 위치는 -1이다 지정된것보다 더 뒤이기 때문

// includes
// includes는 banana가 있는지 없는지 true, false로 구분한다.
console.log(fruits.includes("banana"));
// output: true
console.log(fruits.includes("Banana"));
// output: false
console.log(fruits.includes(0));
// output: false


// 배열 변형

// 배열정렬
// 내림차순 정렬: Array.reverse(), 오름차순 정렬: Array.sort()
let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort()); // output: [-1, 0, 1, 2, 4, 5]
console.log(nums.reverse()); // output: [5, 4, 2, 1, 0, -1]

let fruits1 = ["apple", "orange", "banana", "melon"];
console.log(fruits1.sort()); // output: ["apple", "banana", "melon", "orange"]
console.log(fruits1.reverse()); // output: ["orange", "melon", "banana", "apple"]


// 배열 변환
// 배열 값을 문자열로 변환: Array.join(separator)
/* separator는 매개변수로 배열의 각 요소를 구분할 문자열 */
/* */
let fruits2 = ["apple", "orange", "banana", "melon"];
let str1 = fruits2.join();
let str2 = fruits2.join("-");
let str3 = fruits2.join("")

// join은 배열의 안에 값을 배열값으로 output하려고 할때 변경값을 줄수있다 .join(괄호안에 들어가는값이 변경하는 것)
console.log(str1); // output: apple, orange, banana, melon
console.log(str2); // output: apple-orange-banana-melon
console.log(str3); // output: appleorangebananamelon

let str_separator = fruits2.join(";");
console.log(str_separator); // output: apple;orange;banana;melon;
let result = str1.split(";");
console.log(result); // output: ["apple", "orange", "banana", "melon"] 
// apple;orange;banana;melon; 같이 마침표를 없을때 무엇을 없앨때 .split(;)를 사용하면 된다.