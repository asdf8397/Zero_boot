/* 문제: 별별별 */
// 문제설명
// 자연수를 입력 받아 해당 수 만큼 별을 찍는 문자열 반환 함수를 작성하시오.

// 입력 값: 5, 7, 12
// 출력 값: #1 *****,  #2 *******, #3 ************


// 문제: 템플릿 코드
/* user code */
function answer(num) {
    let result = "";

    for (let i = 0; i < num; i++) {
        result += "*";
    }
    return result;
}

/* main code */
let input = [
    // TC: 1
    5,

    // TC: 2
    7,

    // TC: 3
    12,
    
];
for (let i = 0; i < input.length; i++) { // 0 1 2 총 3번 돈다
    console.log(`#${i + 1} ${answer(input[i])}`);
}