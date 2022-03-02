/* 재귀함수 */

// 1. basic recursive function
function recursive(num) {
    if(num == 0) return 0; // 종료 조건
    return num + recursive(num -1);
}
console.log(recursive(3)); // output: 6
// return num(0이 들어가고) + recursive(3)이 들어가면
// 0부터 3까지 배열이 연산이 된다
// 그러면 0 + 1 + 2 + 3 = 6이 된다.


// 재귀함수 설명
/* 함수가 자신을 다시 호출하는 구조로 만들어진 함수이다
    재귀함수는 종료조건이 있어야 하며, 종료조건을 설정해주지 않으면
    무한 반복을 하게 된다. 재귀함수로 작성이 되는 코드는 반복문으로도 작성할 수 있다 */


/* 2. factorial function */
function factorial(x) {
    if (x === 0) return 1;

    return x * factorial(x - 1);
}
const num = 4;
let result = factorial(num);

console.log(`The factorial of ${num} is ${result}`);
// output: The factorial of 3 is 6
// return 값 1 부터 const num = 4니까 1 * 2 * 3 * 4 다 곱해서 결과는 24