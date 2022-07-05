/** instanceof
 * (객체) 인스턴스 어떤 생성자로 생성된 것인지
 * 문법: {} instanceof Object
 */

const obj = {};
const arr = [];
const func = function () {};

// object, array
/* obj instanceof Object; */
let a = obj instanceof Object;
console.log(a); // true
console.log(obj instanceof Object); // true
/* instanceof로 비교했을때 obj로 지정한 것은 Object가 맞음 */

/* array instanceof Array */
let b = arr instanceof Array;
console.log(b); // true
console.log(arr instanceof Array);

/* func instanceof Function */
let c = func() instanceof Function;
console.log(c); // true
console.log(func instanceof Function); // true

/* new Date() instanceof Object */
let d = Date() instanceof Object
console.log(d); // false Date() 앞에 new가 붙어야 object가 성립됨

let e = new Date() instanceof Object
console.log(e); // true,,, object가 맞음
console.log(new Date() instanceof Object); // true

/* undefined instanceof Object; */
let f = undefined instanceof Object;
console.log(f); // false ,,,, undefined는 undefined 그 자체
console.log(undefined instanceof Object); // false

/* null instanceof Object */
console.log(null instanceof Object); // false ,,, null은 object가 아님
let g = null instanceof Object;
console.log(g); // false ,,,, null은 object가 아님
