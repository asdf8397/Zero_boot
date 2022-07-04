/** Boolean
 * ON: true
 * OFF: false
 * !(Boolean)으로 나타냄 알고 있을 것
 */

console.log(Boolean("STRING")); // true // Boolean이 맞다
console.log(Boolean(!"STRING")); // false
console.log(Boolean(!!"STRING")); // true

console.log(!false) // true
console.log(!!false); // false
console.log(!!!false); // true

let apple_IOS = 100;
let samsung_Android = 80;

if (samsung_Android < apple_IOS) {
    console.log("이번 시리즈는 갤럭시다 ")
} else {
    console.log("이번 시리즈는 애플이다.")
}