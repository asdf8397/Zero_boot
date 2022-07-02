/* 문제 */
// 두 정수를 입력받아 가장 큰 값을 출력하는 함수를 작성하시오.

// case 1
function MAX(x, y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(MAX(5, 10)); // output: 10
console.log(MAX(10, 20)); // output: 20
console.log(MAX(100, 300)); // output: 300


// case 2
function MAX(x, y) {
    return x > y ? x : y;
}
console.log(MAX(5, 10)); // output: 10
console.log(MAX(10, 20)); // output: 20
console.log(MAX(100, 300)); // output: 300