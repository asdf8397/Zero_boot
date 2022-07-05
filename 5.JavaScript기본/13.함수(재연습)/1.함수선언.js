/* 함수선언 */
function name() {
    
} // 함수선언

// 메서드 형식으로 함수를 만들 수 있는 방법
const obj = {
    // 메서드
    prop: function () {

    }
}
new Date()

/* 생성자 함수 */
function Myobj() {

}

/* 화살표 함수 (ES2015+, ES6) */
const arrowFunc = () => {

}

let ARROWFUNCTION = (summer_high, winter_low) => {
    // function 대신에 let으로 ARROWFUNCTION으로 만들었음 = () => {} 함수
    return summer_high / winter_low
}
console.log(ARROWFUNCTION(40, 20));

/* 함수를 만들어서 함수를 호출할 수 있음 */
function sum(param1, param2) {
    return param1 + param2
}
console.log(sum(10, 20));