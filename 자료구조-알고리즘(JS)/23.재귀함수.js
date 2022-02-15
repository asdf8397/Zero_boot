// 재귀함수 정말 중요하다 이거 한번더 볼것 그리고 이해 못함 진짜!!!!!!!!!!

// 재귀함수

// 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
// 재귀 함수는 특정 조건이 됐을 때 자신을 그만 호출되도록 제한하는 exit code가 필요


// 1. basic recursive function
function recursive(num) {
    if (num == 0) return 0;
    return num + recursive(num - 1);
}
console.log(recursive(3));


// 2. factorial function
function factorial(x) {
    if (x === 0) return 1;

    return x * factorial(x - 1);
}

const num = 3;

let result = factorial(num);


// The factorial of 3 is 6
console.log(`The factorial of ${num} is ${result}`);