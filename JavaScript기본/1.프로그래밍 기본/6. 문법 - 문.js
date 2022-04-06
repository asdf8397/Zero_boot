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
}

if(a>10) {
    console.log("이랏샤이마세");
} else {
    console.log("안녕히 가십시오")
};

if(a<b) {
    console.log("a는 b보다 작아")
} else {
    console.log("b는 a보다 커")
};

if(a>b) {
    console.log("Hi My Name is");
} else {
    console.log("if문 이렇게 지겹게 써보네요")
};

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

func();


/* for문 */

for(i=0; i<9; i++) {
    console.log(i);
} // 0~9까지 순서대로 0,1,2,3,4,5,6,7,8

const arr = ["a","b","c","d","e","f","g"];

for(i=0; i<arr.length; i++) {
    console.log(i);
} // output: 7

const for_count = ["a","b"];

for(i=0; i<for_count.length; i++) {
    console.log(i);
} // output: 2

/* while문 */

a = 5;
while(a>10) {
    console.log("고기 파랑색");
} // output: 고기 파랑색 => 출력됨 while문은 무한 루프 조심할 것
// 무한루프