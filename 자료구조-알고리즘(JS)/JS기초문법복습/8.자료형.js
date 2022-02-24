// 자료형
// typeof는 어떤 자료형인지 나타낼때 사용한다.

console.log(typeof undefined); // output: undefined
console.log(typeof 123); // output: number // int
console.log(typeof 456n); // output: bigint
console.log(typeof true); // output: boolean
console.log(typeof "hello"); // output: string
console.log(typeof Symbol("id")); // output: symbol
console.log(typeof Math); // output: Object
console.log(typeof null); // output: Object 원래 null이지만 호환성 문제때문에 Object로 나두고 있음
console.log(typeof console.log); // output: function

let str = "hello world";
console.log(typeof str); // output: string

let name_check = true; 
let age_check = false;
let value_check = 10 > 3;

console.log(name_check); // true
console.log(age_check); // false
console.log(value_check); // true

console.log(typeof null); // output: null

const null_check = null;
console.log(null_check === null); // output: true

let name;
console.log(name); // output: undefined /// name이라고 변수지정했지만 안의 값이 없다

let name1;
name1 = "Kim";
console.log(name1); // output: Kim;


let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1 / 0;
let num_4 = 123456n;

console.log(num_1 - num_2); // output: -0.456000000000000000000307
console.log((num_1 - num_2).toFixed(3)); // .toFixed() ← 괄호 안에 소수점 몇 자리까지 길이를 제한함
// output: -0.456
console.log(num_3); // output: 나눌수 없으므로 infinity
console.log(num_1 / "hello") // output: NaN /// 나눌 수 없으므로
console.log(typeof num_4); // output: bigint /// typeof로 물어봤으니까 bigint로 출력됨