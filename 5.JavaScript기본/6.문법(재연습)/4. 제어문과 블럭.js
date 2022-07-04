/** 문
 * 제어문에서 바디 (몸통) ← 로직(명령)
 */

for (i = 0; i < 3; i++) {
    console.log(i);
}

let a = 10;
if (a === 10) {
    console.log("여기는 비가 오려고 하나 봅니다.")
} else {
    console.log("오늘은 비가 오지 않으려고 하나 봅니다.")
}

// switch (weather_Condition) {
//     case snow:
//         break;
//     case rain:
//         break;
//     case windy:
//         break;
//     case typhoon:
//         break;
//     default:
//         break;
// }
 
let c = 0;
const Max = 3;

while (c < Max) {
    c++
    console.log(c)
}
console.log(c) // output: 여기는 결과물이 10이 됨
