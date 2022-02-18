// 고차함수
// 하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수
// 매개변수로 전달되는 함수는 콜백함수(Callback function)
// 대표 배열 조작 메서드
/*
.. 임의 정렬: Array.sort(callback function)
.. 반복 작업: Array.forEach()
.. 콜백함수 결과 배열 반환: Array.map()
.. 조건 만족하는 하나의 값 반환: Array.find()
.. 조건 만족하는 값 배열로 반환: Array.filter()
.. 누적 결과 값 반환: Array.reduce()
*/

// 고차함수 scrollTo()
// 문제점: 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
// 원인: sort메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생

let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums.sort()); // output: -1,0,1,10,12,2,20,3,4
// nums의 배열을 오름차순으로 정렬하고 있지만 nums의 number → string으로 바꿔서 output해준다
// 그 결과 글자로 정렬되게되서 -1,0,1,10,12(1)로 보고 그 다음 2,20 그다음 3,4 이렇게 출력
console.log(nums.reverse()); // output: 4,3,20,2,12,10,1,0,-1
// 내림차순 배열에서 number → string으로 바꿔서 정렬하게 된다 그러면 4,3,20,2,12,10,1,0,-1 이렇게 출력


// 한계점: 대소문자 구분 없이 정렬하고 싶지만, 대소문자 구분되어 정렬
let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort()); // Orange, apple, melon, orange
// 오른차순 배열에서 string은 대문자가 먼저 나온다 그래서 Orange 이후에 apple, melon, orange 순으로 정렬
console.log(fruits.reverse()); // output: orange, melon, apple, Orange
// 내림차순 배열에서 string은 소문자가 먼저 나오고 대문자가 나온다 그래서 orange, melon, apple, Orange 순으로 정렬



// sort() 고차함수 - (1)
// sort() 함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행 가능

// [before]
let nums = [1,-1,4,0,10,20,12];
console.log(nums.sort()); // output: -1,0,1,10,12,20,4
console.log(nums.reverse()); // output: 4,20,12,10,1,0,-1


// [after]
let ascending_order = function(x,y) {
    return x-y;
}

let descending_order = function(x,y) {
    return y-x;
}

let nums = [1,-1,4,0,10,20,12];
console.log(nums.sort(ascending_order)); // output: -1,0,1,4,10,12,20
// 오름차순으로 정렬 가능
// ascending_order은 function(x,y) {return x-y}로 연산해서 let nums = [1,-1,4,0,10,20,12]에 나와있는 배열이 계산되면 output에 오름차순대로 출력됨
console.log(nums.sort(descending_order)); // output: 20,12,10,4,1,0,-1
// 내림차순으로 정렬
// descending_order은 function(x,y) {return y-x}로 연산해서 let nums = [1,-1,4,0,10,20,12]에 나와있는 배열이 계산되면 output에 내림차순으로 출력됨


// sort() 고차함수  - (2)
let ascending_order1 = function(x,y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x>y) return 1;
    else if (y>x) return -1;
    else return 0;
};


let descending_order1 = function(x,y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x < y) return 1;
    else if (y < x) return -1;
    else return 0;
};


let fruits1 = ["apple", "Orange", "orange", "melon"];
console.log(fruits1.sort(ascending_order1)); // output: ["apple","melon","Orange","orange"]
console.log(fruits1.sort(descending_order1)); // output: ["Orange","orange","melon","apple"]