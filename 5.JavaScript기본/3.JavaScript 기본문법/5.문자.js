/* 문자_String */

const word = '문자';
const word2 = "문자";
const word3 = `문자`;

console.log(word); // 문자
console.log(word2); // 문자
console.log(word3); // 문자

// 지정한 string문자를 배열로 출력
console.log(word[0]); // 문
console.log(word[1]); // 자

// string문자의 길이를 측정
console.log(word.length);

const words = word + word2;
console.log(words); // 문자문자

