// 조건문 if-else
// 알고리즘에서 논리적 비교를 할때 사용되는 조건식
// if, if else, else키워드를 통해 구성되며, 조건식에 맞을 경우 중괄호{} 내에 있는 명령문을 수행
// 단, 실행 문장이 단일 문장인 경우에 {}생략가능


// if-else 예제
let apple_price = 9;

if(apple_price >= 10) {
    console.log("very expensive :( "); 
} else if(apple_price < 5) {
    console.log("very cheap :) ");
} else {
    console.log("nice!"); // output: nice
}

let age = 10;

if(age < 10) {
    console.log("young!");
} else {
    console.log("old!");
} 
// output: old

// 3항 연산자
// 3항 연산자를 통해 if-else를 대체하여 사용가능
// 3항 연산자: 변수=(조건식)? 참일 때 값: 거짓일때 값

let age2 = 20;

// 조건문: if-else
if(age2 < 19) {
    msg = "The user is not an adult";
} else {
    msg = "The user is an adult";
}
console.log(msg); // output: The user is an adult

// 조건문: 3항 연산자
msg_another = age2 < 19 ? "The user is not an adult." : "The user is an adult";
                                // true                             false

console.log(msg_another); // output: The user is an adult

// true일땐 "The user is not an adult"가 출력되고 false일땐 "The user is an adult"가 출력된다 