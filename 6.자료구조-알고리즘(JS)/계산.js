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
console.log(fruits1.sort(ascending_order1));
console.log(fruits1.sort(descending_order1));


// 기억되살림 typeof는 1(number) a(string)타입 같이 이런 것들의 타입을 물어볼때 사용
// toUpperCase()는 대문자로 변환
let ascending_order2 = function(x,y) {
    if(typeof x === "string") x = x.toUpperCase();
    if(typeof y === "string") y = y.toUpperCase();

    return x > y ? 1 : -1; // 오름차순 정렬
};

let descending_order2 = function(x,y) {
    if(typeof x === "string") x = x.toUpperCase();
    if(typeof y === "string") y = y.toUpperCase();

    return x < y ? 1 : -1; // 내림차순 정렬
};

let nums1 = [1,-1,4,0,10,20,12];
console.log(nums1.sort(ascending_order2)); 
// output: -1,0,1,4,10,12,20
console.log(nums1.sort(descending_order2)); 
// output: 20,12,10,4,1,0,-1 // sort는 오름차순임에도 불구하고 return 조건문으로 내림차순 선정가능

let fruits3 = ["apple","Orange","orange","melon"];
console.log(fruits3.sort(ascending_order2)); // output: ["apple","melon","orange","Orange"]
console.log(fruits3.sort(descending_order2)); // output: ["Orange","orange","melon","apple"]