// Array

// 배열
// 여러 개체(Entity)값을 순차적으로 나열한 자료 구조(알고리즘 내 사용 빈도 多)
// 배열 내 값을 요소(Element)라고 하며, 배열 요소는 index로 접근
// 대표 속성(property)과 메서드(method)
// ... 배열 크기 및 배열 여부 확인: Array.length, Array.isArray()
// ... 배열 추가/삭제: Array.push() Array.pop(), Array.shift(), Array.unshift(), Array.splice(), Array.slice()등
// ... 배열탐색: Array.indexOf(), Array.lastIndexOf(), Array.includes()
// ... 배열 변형(callback 미사용): Array.sort(), Array.reverse(), Array.join()

// 배열선언/접근/속성

// 선언: "new Array()"혹은 "[]"를 통해 선언하며, 사이즈 혹은 값을 입력하여 초기화도 가능
// 접근 방법: "Array[index]"를 통해 index를 통하여 O(1)접근
// 배열 속성: "Array.length"를 통해 배열 요소의 개수 확인 가능

let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1); // output: [ <10 empty items> ] ... new Array(10)으로 지정했기 때문에
console.log(arr_2); // output: []

let fruits = ["apple", "orange", "melon"];
console.log(fruits); // output: ["apple", "orange", "melon"]
console.log(fruits.length); // output: 3 ..... 배열로 했을때 0,1,2 총 3개
console.log(fruits[0]); // output: apple
console.log(fruits[1]); // output: orange
console.log(fruits[2]); // output: melon

fruits[1] = "kiwi"; // 배열 1자리에 orange자리에 kiwi를 넣어줌
console.log(fruits); // output: [ 'apple', 'kiwi', 'melon' ]


// 배열의 실체
// js에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체
// 메모리가 연속적인 밀집 배열(dense array)가 아닌 비 연속적인 희소 배열(sparse array)

let nums = [];

nums.push("one"); // nums안에 .push 밀어넣어 준다 "one"을 밀어넣어 준다.
nums.push("two"); // nums안에 .push 밀어넣어 준다 "two"을 밀어넣어 준다.
console.log(nums.length); // output: 2
console.log(nums); // output: ["one","two"]

nums["once"] = "once"; // nums안에 ["once"]배열을 만들고 "once"를 밀어 넣는다
nums["twice"] = "twice"; // nums안에 ["twice"]배열을 만들고 "twice"를 밀어 넣는다.
console.log(nums.length);
console.log(nums); // [ 'one', 'two', once: 'once', twice: 'twice' ]

console.log(Object.getOwnPropertyDescriptors(nums));
/* Object.getOwnpropertyDescriptors(nums);는 Object안에 들어간 메서드의 객체의
모든 속성들의 설명자(descriptor) => 여기선 (nums)임 이것을 자세히 설명할때 사용함 */


// 배열타입확인 및 요소 삭제
// 배열 타입 확인

// 배열 타입 확인 방법: Array.isArray(value)
let num = 123.456;
let str = "Here I am!";
let fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(fruits));


// 배열 요소 삭제
// 배열 일부 요소 삭제: delete array[index] (삭제해도 배열 사이즈가 그대로인 문제점)

let fruits2 = ["apple", "orange", "melon"];

console.log(fruits2);
console.log(fruits2.length);

delete fruits2[1];
console.log(fruits2);
console.log(fruits2.length);