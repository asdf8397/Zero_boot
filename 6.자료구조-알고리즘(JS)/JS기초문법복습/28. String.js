/* String */

// 대표 속성(Property)과 메서드(method)
// ... 문자열 길이: String.length
// ... 문자열 접근: String.charAt(index), String.charCodeAt(index)
// ... 문자열 검색: String.indexOf(), String.lastIndexOf(), String.includes(), String.startSwitch()
// ... 문자열 변환: String.toUpperCase(), String.toLowerCase()
// ... 문자열 치환: String.replace()
// ... 문자열 추출: String.slice(), String.substring(), String.substr()
// ... 문자열 분할: String.split()


let str_1 = "hello_1", str_2 = String("Hello_2");
let num = 3, str_3 = `hello_${num}`;

console.log(str_1); // output: hello_1
console.log(str_2); // output: Hello_2
console.log(str_3); // output: hello_3
console.log(`hello_${2*2}`); // output: hello_4


/* 문자표기 */
console.log("line \n feed");
/* output: line
            feed */

console.log("carriage \r return");
/* output:  carriage
                return */

console.log("backslash \\ ");
// output: backslash \

console.log("tab \t tab");
// output: tab  tab

console.log("smile: \u{1F60D}");
// output: 웃음 이모티콘 \u{1F60D}

let str = `hello
world
!!!`;
let newline_MY_String = "Hello \n World \n My \n JAVASCRIPT!!!";
console.log(str);
console.log(newline_MY_String);


/* 문자접근 */
// charAt()은 string처럼 많은 문자를 쓸때 char타입은 안되서 charAt()으로 변환시킴
// charCodeAt()은 문자 index에 해당하는 유니코드 값을 반환하는 함수
let str_double = "hello world!!!"
console.log(str_double);
console.log(str.charAt(1));
console.log(str.charCodeAt(1));
console.log(str[0]);


/* 문자열 검색/반환 */
// indexOf: 문자열 내에서 특정한 문자열의 index 값을 리턴한다.
// lastindexOf: 문자열에서 탐색하는 문자열이 마지막으로 등장하는 위치에 대한 index를 반환
let text = "hello, world!!!";
console.log(text.indexOf("l"));
console.log(text.indexOf("l", 3));
console.log(text.lastIndexOf("1"));
// .includes()는 문자열이 특정 문자열을 포함하는지 확인하는 메서드입니다.
// startswith() 메서드는 문자열이 특정 문자로 시작하는지 확인하여 결과를 true, false로 반환
// endsWith() 메서드는 문자열이 특정 문자로 끝나는지 확인하여 결과를 true, false로 반환
console.log(text.includes("Hello")); // output: false
console.log(text.startsWith("ello", 1)); // output: true
console.log(text.endsWith("world")); // output: false

/* 문자열 대소문자로 변환 */
// 대소문자 변환: String.toUpperCase(), String.toLowerCase()
let str_double_Two = "HeLlo!!";
console.log(str_double_Two.toUpperCase); // output: [Function: toUpperCase]
console.log(str_double_Two.toLowerCase); // output: [Function: toLowerCase]
console.log(str_double_Two.toUpperCase()); // output: HELLO!!
console.log(str_double_Two.toLowerCase()); // output: hello!!