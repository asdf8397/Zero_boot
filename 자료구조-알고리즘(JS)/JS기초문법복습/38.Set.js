/* set은 중목을 허용하지 않음 */
let set = new Set();
let num = new Set([1,2,3,4,5]);
let str = new Set("Hello");

console.log(set); // output: Set(0) {}
console.log(num); // output: Set(5) {1,2,3,4,5}
console.log(str); // output: set(4) {'H','e','l','o'}

/* 1. add */ // add는 set으로 된 배열에 추가할때 사용함
set.add(1).add(1).add(10).add(20);
console.log(set); // output: set(3) {1,10,20}

/* 2. has */
console.log(set.has(10)); // true  / set배열에 10이 들어있어서 그래서 true
console.log(set.has(2)); // false  / set배열에 2가 안들어있음 그래서 false

/* 3. delete */
set.delete(1); // 1이 있기때문에 삭제됨
set.delete(-1); // -1없기때문에 삭제 안됨
console.log(set); // output: Set(2) {10, 20}


/* Set 반복문 */

let str2 = new Set("Hello!");
console.log(str2); // output: Set(5) { 'H', 'e', 'l', 'o', '!' }

for(let item of str2) console.log(item);
for(let item of str2.keys()) console.log(item);
for(let item of str2.values()) console.log(item);
for(let item of str2.entries()) console.log(item);
// entries는 반복하면서 배열을 반환한다
/*
[ 'H', 0번 'H'0배열 ]
[ 'e', 1번 'e'1배열 ]
[ 'l', 2번 'l'2배열  ]
[ 'o', 3번 'o'3배열 ]
[ '!', 4번 '!'4배열 ]
*/