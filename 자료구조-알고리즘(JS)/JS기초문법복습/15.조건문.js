// 조건문 if_else

// if-else 예제
let apple_price = 9;

if(apple_price > 10) {
    console.log("very expensive :( ");
} else if(apple_price < 5) {
    console.log("very cheep :) ");
} else {
    console.log("nice, 적정가격이네");
} // output: nice, 적정가격이네


let 사과가격은 = 3;
if (사과가격은 > 10) {
    console.log("very expensive!!!!!")
} else if(사과가격은 < 5) {
    console.log("나이수!!! 땡잡았다 :)");
} else {
    console.log("nice very 적정가격이네");
}


// 3항 연산자
// msg로 각각의 내용들을 채운 후
// 마지막에 console.log로 출력
let age = 20;

if(age < 19) {
    msg = "아직 성인이 아닙니다";
} else if(age > 19) {
    msg = "이제 저는 성인입니다.";
} else {
    msg = "아직 저의 나이와 성인인지 청소년인지 모르겠습니다";
}
console.log(msg);

// 조건문 : 3항 연산자 ---- output되는 String문자의 위치가 중요하다  위치는 true : false 순서이다
let age1 = 22;
msg_another = age1 < 19 ? "The user is not an adult" : "The user is an adult";
console.log(msg_another);
// output: The user is an adult
msg_another = age1 < 19 ?  "The user is an adult" : "The user is not an adult";
console.log(msg_another);
// output: The user is not an adult

let age2 = 15;
msg_another2 = age2 < 19 ? "The user is not an adult" : "The user is an adult";
console.log(msg_another2);
// output: The user is not an adult