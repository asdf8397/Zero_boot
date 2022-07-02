/* 문자열 치환 */

let text = "hello world!!!";
let changed_text = "";

changed_text = text.replace("world", "earth");

console.log(changed_text); // output: hello earth
console.log(text); // output: hello world!!!

console.log(text.replace("!","?")); // output: hello world?!!
console.log(text.replace("!","i")); // output: hello worldi!!

let text1 = "hello world!!"
console.log(text1.replace(/l/g,"i")); // output: heiio world ,,, l을 i로 변환
console.log(text1.replace(/l/gi,"i")); // output: heiio worid!!

/* 문자열 추출 */

let text2 = "hello, world!";

console.log(text2.slice(0, 5)); // output: hello
console.log(text2.slice(4, 5)); // output: o
console.log(text2.slice(4)); // output: o, world!
console.log(text2.slice(-4)); // output: rld!

console.log(text2.slice(2, 6)); // output: llo,
console.log(text2.slice(6, 2)); // output: llo,
console.log(text2.substring(2, 6)); // output: llo,
console.log(text2.substring(6, 2)); // output: llo,

let text3 = "HELLO, WORLD!";
console.log(text3.substr(2,6));
// substr 어디서 시작해서 어디까지 출력하고 싶을떄 지정하는 것


// 문자열 분할
// 배열로 문자열 분할: String.split(Separator, limit)
// 문자열을 인자로 주어진 문자열일 기준으로 쪼개서 배열에 담는다
let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result); // output: ['apple', 'banana', 'melon']

console.log(result[0]); // output: apple
console.log(result[1]); // output: banana
console.log(result[2]); // output: melon

let text4 = "hello";

result2 = text4.split(" ");
console.log(result2); // output: ['hello']
console.log(result2.length); // output: 1
console.log(result2[0]); // output: hello

result3 = text4.split("", 3);
console.log(result3); // output: [h,e,l] 
console.log(result.length); // output: 3