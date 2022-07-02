/* 변수 */
// 선언할 때 종류
// var, const, let

/* 선언 */
let lang; // 변수를 lang 선언한 것

/* 할당 */
lang = "JS"; // lang을 변수로 할당한 것을 JS로 할당 한 것

// 재할당
lang = "Hello" // lang의 변수에 JS로 변수 할당 되어 있지만 Hello로 재할당함

// 복합 할당 연산자
let count = 0;

// 보기에 좋을 수 있고 간단하겠지만 실수를 유발할 가능성이 있음
count += 1;
console.log(count); // 1

// 잘 읽히고 예상하기 쉬움
count = count + 1;
console.log(count) // 2