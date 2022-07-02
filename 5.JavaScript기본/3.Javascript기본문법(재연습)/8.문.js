/* Javascript 구문 */
/** Javascript구문
 * if문, for문, Switch~Case문, while문, do~while문, break문, Continue문
 */

if (1 < 10) {
    console.log("1은 10보다 작다.")
} else {
    console.log("1은 10보다 크다.")
}

if (1 > 10) {
    console.log("1은 10보다 작다.")
} else {
    console.log("1은 10보다 크다.")
}

// 초기화; 평가 (참 => 실행, 거짓 => 다음으로) 매번 실행되는 평가식
const ArrayList = [1,2,3];

for (let i = 0; i < ArrayList.length; i++) {
    console.log(ArrayList);
    console.log(i);
}
const ArrayList_ForEach = [1,2,3];
ArrayList_ForEach.forEach(i => {
    console.log(i);
})