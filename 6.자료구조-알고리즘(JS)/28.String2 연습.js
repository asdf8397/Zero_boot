let newline_string = "helloworld!!!";
let a = `hello world`
console.log(newline_string.length);
console.log(a.length);


// 문자열 검색/변환

// 문자열 검색
// 문자열 검색(index): String.indexOf(substr,pos), String.lastIndexOf(substr.pos)
// 문자열 검색(bool): String.includes(substr, pos), String.startsWith(substr, pos), String.endsWith(substr, pos)

let text = "hello, world!!!";

console.log(text.indexOf("l")); 
// output: 2 ,,, l은 let text = "hello, world!!!" 문자열의 2번 문자열에 걸치므로 제일 첫번째 output: 2
console.log(text.indexOf("l", 3)); 
// output: 3 ,,, l을 3번 문자열부터 찾는다고했을때 3번에 걸치므로 output: 3
console.log(text.indexOf("l", 4));
// output: 4 ,,, l을 4번 문자열부터 찾기시작했을때 l은 10번 문자열에서 나타나므로 output: 10
console.log(text.lastIndexOf("l"));
// output: 1 ,,, l을 뒤 문자열부터 찾기 시작했을때 l은 뒤 문자열에서 1번에 걸치므로 output: 1


console.log(text.includes("Hello"));
// includes let text에서 Hello가 포함되어있는지 찾을때 output: true
console.log(text.startsWith("ello"));
// startsWith는 text에서 ello가 있는지 있긴하지만 Hello안에 있는것이 아닌 ello있을때 treu,,,, output: false
console.log(text.startsWith("ello",1))
// output: true
console.log(text.endsWith("world"));
// output: false,,, 마지막에 !!!가 있으므로 false
console.log(text.endsWith("!!!"));
// ouput: true ,,,, 마지막에 !!!가 있으므로 true

// 문자열 대소문자 변환
// 대소문자 변환: String.toUpperCase(), String.toLowerCase()
let str = "HeLlo!!";
console.log(str.toUpperCase());
// output: HELLO!! ,,, toUpperCase() 출력할때 대문자로 출력해라
console.log(str.toLowerCase());
// output: hello!! ,,, toLowerCase() 출력할때 소문자로 출력해라