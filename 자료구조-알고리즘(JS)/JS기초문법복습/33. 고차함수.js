/* 고차함수 */

let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums.sort()); // output: [-1,  0, 1, 10, 12, 2, 20, 3,  4]
// String으로 순서 정렬되서 이렇게 이렇게 정렬
console.log(nums.reverse()); // output: [4, 3, 20,  2, 12, 10, 1,  0, -1]
// String으로 순서 정렬

// 한계점: 대소문자 구분 없이 정렬하고 싶지만, 대소문자 구분되어 정렬
let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort());
// output: ['Orange','apple','melon','orange']
console.log(fruits.reverse());
// output: ['orange','melon','apple','Orange']


// [before]
let nums2 = [1,-1,4,0,10,20,12];
console.log(nums2.sort()); // output: -1,0,1,10,12,20,4
console.log(nums2.reverse()); // output: 4,20,12,10,1,0,-1


// [after] // 배열을 정렬할때 사용
function ascending_order(x, y) {
    return x - y; // 오름차순 return
}

function descending_order(x, y) {
    return y - x; // 내림차순 return
}

let nums3 = [1,-1,4,0,10,20,12];
console.log(nums2.sort(ascending_order)); // [-1,0,1,4,10,12,20]
console.log(nums2.reverse(descending_order)); // [20,12,10,4,1,0,-1]

/* sort() 고차함수 - (2) */
// .toUpperCase() 대문자
// .toLowerCase() 소문자
function ascending_order1(x, y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x > y) return 1;
    else if(y > x) return -1;
    else return 0;
};

function descending_order(x, y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x < y) return 1;
    else if(x > y) return -1;
    else return 0;
}

let fruits2 = ["apple","Orange","orange","melon"];
console.log(fruits2.sort(ascending_order)); // ['apple','Orange','orange','melon']
console.log(fruits2.sort(descending_order)); // ['Orange','orange','melon','apple']


/* sort() 고차함수 - (3) */
// 콜백함수 ascending_order, descending_order 공용화


function ascending_order2(x, y) {
    if(typeof x === "string") x = x.toUpperCase();
    if(typeof y === "string") y = y.toUpperCase();

    return x > y ? 1 : -1;
};
console.log(fruits2.sort(ascending_order2));
console.log(fruits2.sort(ascending_order2));

function descending_order2(x, y) {
    if(typeof x === "string") x = x.toUpperCase();
    if(typeof y === "string") y = y.toUpperCase();

    return x < y ? 1 : -1;
};
console.log(fruits2.sort(descending_order2));
console.log(fruits2.sort(descending_order2));

let nums1 = [1,-1,4,0,10,20,12];
console.log(nums1.sort(ascending_order2));
console.log(nums1.sort(descending_order2));

let fruits3 = ["apple","Orange","orange","melon"];
console.log(fruits3.sort(ascending_order2));
console.log(fruits3.sort(descending_order2));