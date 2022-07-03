/**
 * 리터럴
 * 데이터 값
 */

/* 싱글 리터럴로 만든 값 */
const obj = {
    name: "jang"
}
console.log(obj)
console.log(obj.name)
console.log(obj[`name`]) // jang // obj의 key값의 jang을 뽑아낼때 배열로 뽑을때 방법

let number = 10;
let number_change = new String(number);
console.log(number_change); // 숫자인 10이 string 형식의 10으로 변경됨

let a_change = String(number);
console.log(a_change); // 숫자 10을 문자타입으로 변환

let b_change = number.toString();
console.log(b_change); // 숫자 10을 문자타입으로 변환


let num = 20;
let number_String = String(num);
console.log(number_String); // number형식의 20이 그대로 20인 상태로 출력됨

let string_Number_Chnage = "10";

// 문자를 숫자로 변환 ParseInt형
let string_change = parseInt(string_Number_Chnage);
console.log(string_change); // string 형식의 "10"을 int형식의 10으로 번경

// 문자를 숫자로 변환 Number형
let Change_change = Number(string_Number_Chnage);
console.log(Change_change);

// 문자를 숫자로 변환 Math.round형
let Change_Math = Math.round(string_Number_Chnage);
console.log(Change_Math);

const arr = new Array(1,2,3);
console.log(arr); // new Array는 1,2,3을 배열 형식으로 변환시켜줌