// 조건문 else-if

// if-else
let 사과가격 = 11;

if(사과가격 > 10) {
    console.log("와 진짜 비싸다 -__- ");
} else if(사과가격 < 5) {
    console.log("사과가격이 싸다!!! ^^ ");
} else {
    console.log("아 적정가격에 파네.. 이런!!"); // output: 와 진짜 비싸다 -__-
}

let 나이 = 10;

if(나이 < 10) {
    console.log("나 아직 어려!")
} else {
    console.log("악!!! 늙었어")
} // output: 악!!! 늙었어

let 나이2 = 20;
if(나이2 < 19) {
    msg = "미성년자 입니다"
} else {
    msg = "성인입니다"
}
console.log(msg);

let 나이3 = 10;
if(나이3 < 20) {
    // console.log("미성년자라구!")
    msg = "미성년자라구!";
} else {
    // console.log("나 이제 20살이야 성인이라구!")
    msg = "이제 20살 넘었어 성인이라구!";
}
console.log(msg);

/* 조건문: 3항 연산자 */
let age = 18;
msg_another2 = age < 19 ? "The user is not an adult." : "The user is an adult";
console.log(msg_another2);