// 반복문 for
/* 선언문(Init Expression), 조건문(Test Expression), 증감문(Update Expression)
형태로 이루어진 반복문 */
// 조건문이 fall이 되기 전까지 코드 블록을 계속적으로 반복 수행
// 선언문, 조건문, 증감문 자리에 공백 입력 가능


// for문 예제
for(let i = 0; i<3; i++) {
    console.log(i);
}
// output: 0,1,2

for(let i = 10; i<3; i++) {
    console.log(i);
}
// output: 없음

let num = 0;
for(; num<2;) {
    console.log(num);
    num++;
}
// output: 0, 1
/* let num = 0;을 ;으로 대체한것 num++는 for문의 ()안에 아니고 
for문의 중괄호 안에 넣어줘서 for문을 진행되게 한다 */

// 2중 for 예제  (알고리즘 문제에서 자주 쓰는 것)
for(let i = 0; i<3; i++) {
    for(let j = 0; j<3; j++) {
        console.log(`${i} + ${j} = ${i + j}`);
    }
} // output:
    /*
    0+0 = 0
    0+1 = 1
    0+2 = 2
    1+0 = 1
    1+1 = 2
    1+2 = 3
    2+0 = 2
    2+1 = 3
    2+2 = 4
    */
// i = 0,1,2
// j = 0,1,2



// 반복문 for(확장) 잘 모르겠음 한번더 봐야함

// 반복문 for(확장)
// for...in 반복문
// 객체의 key, value 형태를 반복하여 수행하는데 최적화 된 유형
// 첫번째부터 마지막까지 객체의 키 개수만큼 반복


// Example
const person =  { fname: "john", lname: "Bob", age: 25 };

let text = "";
for(let x in person) {
    text += person[x];
}
console.log(text);


// for... of 반복문
// Collection 객체 자체가 Symbol.iterator 속성(property)을 가지고 있어야 동작 가능한 유형
// ES6에 새로 추가된 Collection 기반의 반복 구문


// Example
let language = "Javascript";
let text = "";

for(let x of language) {
    text += x;
    console.log(x)
}