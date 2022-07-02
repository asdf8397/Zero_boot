let user = [
    {name:"bob", age: 17, job:false},
    {name:"alice", age: 20, job:false},
    {name:"john", age: 27, job:true},
];

console.log(user);
/* output:
[
  { name: 'bob', age: 17, job: false },
  { name: 'alice', age: 20, job: false },
  { name: 'john', age: 27, job: true }
]
*/


let filter_job = user.filter(function(users) {
    return users.job === false;
});
console.log(filter_job);
/* output:
[
  { name: 'bob', age: 17, job: false },
  { name: 'alice', age: 20, job: false }
]
*/

let filter_age = user.filter(function(users){
    return users.age === 20;
});
console.log(filter_age);
/* output:
[ { name: 'alice', age: 20, job: false } ]
*/

let filter_age2 = user.filter(function(users) {
    return users.age > 19;
});
console.log(filter_age2);
/* output:
[
  { name: 'alice', age: 20, job: false },
  { name: 'john', age: 27, job: true }
]
*/

let filter_name = user.filter(function(users) {
    return users.name;
});
console.log(filter_name);
/* output:
[
  { name: 'bob', age: 17, job: false },
  { name: 'alice', age: 20, job: false },
  { name: 'john', age: 27, job: true }
]
*/


let filter_name2 = user.filter(function(users) {
    return users.name === "bob";
});
console.log(filter_name2);
/* output:
[ { name: 'bob', age: 17, job: false } ]
*/

/* forEach() */
// use for loop

let nums = [1,2,3];
for(let i = 0; i < nums.length; i++) {
    console.log(nums[i]); // output: 1,2,3
};


/* use forEach */
nums.forEach(function(i) {
    console.log(i);
    // forEach는 nums의 배열들이 forEach로 들어와서 for문의 회전처럼 돌면서 배열을 출력
});
// output: 1,2,3

이부분만 다시 듣자 잘 모르겠음
/* use map */
let num2 = [1,2,3,4,5];
let use_map = num2.map(function (item) {
    return item *2;
});
console.log(use_map); // output: 2,4,6,8,10


let num3 = [1,2,3,4,5];
let call_count = 0;

console.log("result \t value \t index");
let sum = num3.reduce(function (accumulator, item, index, array) {
    console.log(accumulator, "\t\t", item, "\t\t", index);
    call_count++;
    return accumulator + item;
}, 0);

console.log(call_count);
console.log(sum);