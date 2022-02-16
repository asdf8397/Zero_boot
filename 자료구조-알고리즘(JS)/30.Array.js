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

console.log(arr_1);
console.log(arr_2);

let fruits = ["apple", "orange", "melon"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "kiwi";
console.log(fruits);