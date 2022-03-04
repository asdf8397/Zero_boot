// 문자열 치환
// 처음 만나는 요소 문자열 치환(치환된 문자열 변환)
// 정규 표현식 활용 문자열 치환: 문자열에 정규 표현식 기입 → /치환문자열/g(전체)i(대소문자 구분X)

let text = "hello world!!!";
let changed_text = "";

changed_text = text.replace("world", "earth");

console.log(changed_text); // output: hello earth!!!
console.log(text); // output: hello world!!!

console.log(text.replace("!","?")); // output: hello world?!!
console.log(text.replace("!","i")); // output: hello worldi!!

let text1 = "helLo world!!"
console.log(text1.replace(/l/g,"i")); 
// output: heiLo worid!! ,,,, /l/g는 helLo world!! 여기서 l을 i로 바꿔줘라 모든 l을
console.log(text1.replace(/l/gi,"i"));
// output: helLo world!! ,,,, /l/gi helLo world!! 여기서는 l을 대소문자 구분없이 i로 바꿀때 사용


// 문자열 추출
// 위치 기반 문자열 추출: String, slice(start, end), String.substring(start, end)
// 길이 기반 문자열 추출: String.substr(start, length)

let text2 = "hello, world!";

console.log(text2.slice(0, 5)); // output: hello
console.log(text2.slice(4, 5)); // output: o
console.log(text2.slice(4)); // output: o, world!
console.log(text2.slice(-4)); // output: rld! ... 역방향으로 0,1,2,3,4 이렇게 count

// substring: end > start -> start > end
console.log(text2.slice(2, 6)); // output: llo,
console.log(text2.slice(6, 2)); // output: llo, 6부터 2까지 출력
console.log(text2.substring(2, 6)); // output: llo, 2부터 6까지 출력
console.log(text2.substring(6, 2)); // output: llo, 6부터 2까지 출력

let text3 = "HELLO, WORLD!";
console.log(text3.substr(2, 6)); // output: llo, w
// substr어디서 시작해서 어디까지 출력하고 싶을때 지정하는것


// 문자열 분할
// 배열로 문자열 분할: String.split(Separator, limit)
let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result); // output:

console.log(result[0]);
console.log(reuslt[1]);
console.log(result[2]);


let text = "hello";

result = text.split("");
console.log(result);
console.log(result.length);
console.log(result[0]);

result = text.split("", 3);
console.log(result);
console.log(result.length);