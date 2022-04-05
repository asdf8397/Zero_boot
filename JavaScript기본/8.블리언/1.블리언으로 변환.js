/**
 * - Boolean
 *  ON: True
 *  OFF: false
 *  !(Boolean)으로 나타냄 알고있을 것
 */

console.log(Boolean("STRING")); // output: true
console.log(!"string"); // output: false
console.log(!!"string"); // output: true

console.log(!false); // output: true
console.log(!!false); // output: false
console.log(!!!false); // output: true

let samsung = 5;
samsung = 11;
if(samsung < 10) {
    console.log("구매해 주셔서 감사합니다")
} else {
    console.log("고객님 다음번에 구매해주세요")
}
