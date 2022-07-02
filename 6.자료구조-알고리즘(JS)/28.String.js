// String

// 텍스트 길이에 상관없이 문자열 형태로 저장되는 자료형
// JS에서는 글자 하나만 저장할 수 있는 char자료형 없음
// JS에서 문자열은 페이지 인코딩 방식과 상관없이 항상 UTF-16 형식을 따름

// 대표 속성(property)과 메서드(method)
// .. 문자열 길이: String.length
// .. 문자열 접근: String.charAt(index), String.charCodeAt(index)
// .. 문자열 검색: String.indexOf(), String.lastIndexOf(), String.includes(), String.startsWith()등
// .. 문자열 변환: String.toUpperCase(), String.toLowerCase()
// .. 문자열 치환: String.replace()
// .. 문자열 추출: String.slice(), String.substring(), String.substr()
// .. 문자열 분할: String.split()



// 문자 정의/표기

// 정의 방식
// string 정의 방법: "hello"(큰 따옴표), "hello"(작은 따옴표), Stirng()
// 문자열과 변수 혼합 표현 방법: `Hello`(역 따옴표)

let str_1 = "hello_1", str_2 = String("Hello_2");
let num = 3, str_3 = `hello_${num}`;

console.log(str_1); // output: hello_1
console.log(str_2); // output: Hello_2
console.log(str_3); // output: hello_3
console.log(`hello_${2*2}`); // output: hello_4


// 문자표기
// 다양한 문자 표기 방법: Line feed(\n), Carriage return(\r), Backslash(\\), Tab(\t), Unicode(\u{})
console.log("line\nfeed");
/* output: line
            feed */
console.log("carriage\rreturn");
/* output: carriage
            return */
console.log("backslash \\")
// output: backslash \
console.log("tab\ttab");
// output: tab tab
console.log("smile: \u{1F60D}")
// output: smile: (사랑스러워하는 이모티콘 나옴)


// 문자열 길이/접근(length 반복문에서 자주 사용된다 중요함)

// 문자열 길이
// 문자열 길이 확인 방법: String.length

let str = `hello
world
!!!`
let newline_string = "hello\nworld\n!!!";

console.log(str.length); // length에 줄바꿈 2번 까지 포함되서 count된다 // output: 15
console.log(newline_string.length); // length에 \n까지 포함되서 count된다. // output: 15


// 문자 접근
// 문자열 내 개별 문자 접근 방법: String.charAt(index), String.charCodeAt(index), String[index]
let str = "hello, world!!!";

console.log(str.charAt(1));
console.log(str.charCodeAt(1));
console.log(str[0]);


// 문자열 검색/변환

// 문자열 검색
// 문자열 검색(index): String.indexOf(substr,pos), String.lastIndexOf(substr.pos)
// 문자열 검색(bool): String.includes(substr, pos), String.startsWith(substr, pos), String.endsWith(substr, pos)

let text = "hello, world!!!";

console.log(text.indexOf("l")); // output: 2
console.log(text.indexOf("l", 3));
console.log(text.lastIndexOf("1"));

console.log(text.includes("Hello"));
console.log(text.startsWith("ello", 1));
console.log(text.endsWith("world"));


// 문자열 대소문자 변환
// 대소문자 변환: String.toUpperCase(), String.toLowerCase()
let str = "HeLlo!!";
console.log(str.toUpperCase());
console.log(str.toLowerCase());