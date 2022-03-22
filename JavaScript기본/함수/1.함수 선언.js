/* 함수 선언 */
function name() {

}

// 메서드 형식으로 함수를 만들수있는 방식
const obj = {
    // 메서드
    prop: function() {

    }
}

new Date()

// 생성자 함수
function Myobj() {

}

// 화살표 함수 (ES2015+, ES6)
const arrowFunc = () => {

}

// 함수를 만들어서 함수를 호출할수있음
function sum(param1, param2) { // sum(param1, param2) 함수를 만드는 쪽은 파라미터라고한다.
    return param1 + param2
}
console.log(sum(10, 20)); 
// output: 30  sum(10, 20) <= 여기서 함수를 넘기는 것을 arguments라고하며

