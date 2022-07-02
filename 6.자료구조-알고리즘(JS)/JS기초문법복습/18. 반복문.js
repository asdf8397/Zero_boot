/* 반복문 for */
/* 선언문(Init Expression), 조건문(Test Expression), 증감문(Update Expression)
형태로 이루어진 반복문 */

// for문 예제
for (let i = 0; i < 3; i++) {
    console.log(i); // output: 0,1,2
}

for(let i = 10; i < 3; i++) {
    console.log(i); // output: 없음
}

let num = 0;
for(; num < 2;) { // (;)이것은 let num = 0을 자리를 대체해서 적어줄때
    console.log(num);
    num++
} // output: 0, 1

// 2중 for문 알고리즘 문제에 자주 쓰임
for (let i = 0; i < 3;  i++) {
    for(let j = 0;  j < 3; j++) {
        console.log(i +" + "+ j +" = " + i+j); // 연산안됨
        console.log(`${i} + ${j} = ${i+j}`); // for문 연산
    }
}

// for... in 반복문
// 객체의 key, value 형태를 반복하여 수행하는데 최적화 된 유형
// 첫번째부터 마지막까지 객체의 키 개수만큼 반복

const person = {name1: "김현탁", name2: "서동영", age: 29};

let text = "";
for (let x in person) {
    text += person[x];
}
console.log(text) 
// output: 김현탁, 서동영, 29

for문의 of반복문 이해 안됨 다시 볼 것

// for.... of 반복문
let language1 = "Javascript";
let text1 = "";
for (let x1 of language1) {
    text1 += language1[x1];
    console.log(x1);
}