/* 문(Statement) */
// 특정 작업을 위한 명령으로 프로그래밍의 흐름을 제어

/* 예(조건문) */

/* if문
if(식) {
    문
}

if(식) {
    참일때 실행
} else {
    거짓일때 실행
}
*/

/* for문
for(식; 식; 식) {
    두번째 식의 결과가 참일떄 실행
}
*/

/* while문
while(식) {
    참일때 만 실행
}
*/

/* --------------------------------------------------------------------------------------------------------------------------------- */

/* 조건문 */

// if문

let a = 10;
let b = 30;
if(a<10) {
    console.log("어서오십시오");
} else {
    console.log("아쉽습니다 안녕히 가십시오");
} // output: 아쉽습니다 안녕히 가십시오

if(a>10) {
    console.log("이랏샤이마세");
} else {
    console.log("안녕히 가십시오")
}; // output: 안녕히 가십시오.

if(a<b) {
    console.log("a는 b보다 작아")
} else {
    console.log("b는 a보다 커")
}; // output: a는 b보다 작아

if(a>b) {
    console.log("Hi My Name is");
} else {
    console.log("if문 이렇게 지겹게 써보네요")
}; // output: if문 이렇게 지겹게 써보네요

// function으로 if문을 써보자

const sum = 100;
const min = 200;

function func() {
    if(sum < min) {
        console.log("함수에서 큰수면 적히구요")
    } else {
        console.log("함수에서 작은 숫자면 여기 적혀요")
    }
};

func(); // output: 함수에서 큰 수면 적히구요


/* for문 */
for(i=0; i<9; i++) {
    console.log(i);
}; // output: 0,1,2,3,4,5,6,7,8

const arr = ["a","b","c","d","e","f","g"];

for (i=0; i<arr.length; i++) {
    console.log(i);
}

const for_count = ["a","b"];

for(i=0; i<for_count.length; i++) {
    console.log(i);
} // output: 2

/* while문 */

let i = 0;
while(i < 10) {
    console.log(i);
    i++
}; // output:

/* 메모 */
// for문 while문은 비슷하게 사용가능하다
// for문은 단순반복에서 사용하고,, for in문에서 사용가능하다.
// while문은 반복에서도 사용가능하고 switch문에서도 같이 사용가능하다.
// while문은 여러방면에서 사용가능하다.
