/* 문자 String */
const word = "문자";
const word2 = '문자입니다.';
const word3 = `문자입니다.하하`;

console.log(word);
console.log(word2);
console.log(word3);

// 지정한 string문자를 배열로 출력
console.log(word[0]);
console.log(word[1]);
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ'
console.log(word2[0])
console.log(word2[1])
console.log(word2[2])
console.log(word2[3])
console.log(word2[4])
console.log(word2[5])

// string 문자의 길이를 측정
console.log(word.length);
let len = word.length;
console.log(len);

console.log(word2.length); // 6
console.log(word3.length); // 8

const sum_sum = word2.length;
const sum2 = word3.length;

console.log(sum_sum + sum2); // 문자의 길이 합