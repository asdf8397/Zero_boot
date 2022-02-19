// forEach()

// 배열 요소 별 콜백 함수 각각에 실행: Array.apply.forEach(function(item, index, arry){})
// item: 배열 요소, index: 배열 위치, array: 배열

// use for loop
let nums = [1,2,3];
for(let i = 0; i< nums.length; i++) {
    console.log(nums[i]);
} // output: 1,2,3


// use forEach
nums.forEach(function(i){ 
    // foreach는 num의 배열들이 foreach로 들어와서 for문이 실행된것처럼 돈다
    // 그러면서 순서대로 출력됨
    console.log(i);
}); // output: 1,2,3


// map()
// 배열 요소 별 함수 호출 및 결과를 배열로 반환: Array.map(function(item, index, array){})
// item: 배열요소, index: 배열위치, array: 배열

// use for loop
let nums1 = [1,2,3,4,5];
let use_for_loop = [];
for(let i = 0; i < nums1.length; i++) {
    use_for_loop.push(nums1[i] * 2);
}
console.log(use_for_loop); // output: 2,4,6,8,10


// use map
let nums2 = [1,2,3,4,5];
let use_map = nums2.map(function (item) {
    return item * 2;
});
console.log(use_map)
// output: [2,4,6,8,10]
/* use_map의 안에 item이 있는데 이 item은 *2 연산이 되고 .map에 의해서
 use_map에 저장되게 된다 이것을 console.log(use.map)으로 output함 */


// find()
// 콜백함수의 조건을 만족하는, 단 하나의 값만 변환: Array.find(function(item,index,array){})
// item: 배열요소, index: 배열위치, array: 배열

let users = [
    { name1: "bob", age: 17, job: false },
    { name1: "alice", age: 20, job: false },
    { name1: "john", age: 27, job: true },
];

let find_job = users.find(function (user) {
    return user.job == false;
});
console.log(find_job);
// output: { name: "bob", age: 17, job: false }
/* find_job에서 return user.job == false
 이때 제일 먼저 output되는것은 {name1: "bob", age: 17, job: false이다*/

let find_age = users.find(function (user) {
    return user.age > 19;
});
console.log(find_age);
// output: { name1: "alice", age: 20, job: false }


// filter()
// 콜백 함수의 조건을 만족하는 값을 배열로 반환: Array.filter(function(item, index, array){})
// item: 배열요소, index: 배열위치, array: 배열

let users1 = [
    { name2: "bob", age: 17, job: false },
    { name2: "alice", age: 20, job: false },
    { name2: "john", age: 27, job: true },
];

let filter_job = users1.filter(function (user) {
    return user.job == false;
});
console.log(filter_job);



let filter_age = users.filter(function (user) {
    return user.age > 19;
});
console.log(filter_age);


// reduce()
// 요소 별 함수 수행 누적 결과값 반환: Array.reduce(function(accumulator, item, index,array){})
// accumulator: 이전 함수 결과(initial로 초기값 설정 가능), item: 배열요소, index: 배열위치, array: 배열

let num = [1,2,3,4,5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = num.reduce(function (accumulator, item, index, array) {
    console.log(accumulator, "\t\t", item, "\t\t", index);
    call_count++;
    return accumulator + item;
}, 0);

console.log(call_count);
console.log(sum);