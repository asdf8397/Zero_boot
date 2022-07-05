/** argument
 * argument는 function에서 여러가지를 넣어서 배열로 나타낼 수 있음
 */

function func(a) {
    return a
};
console.log(func("안녕"));
let print = func("안녕");
console.log(print);

function func2() {
    return arguments
};
console.log(func2(1,2))
/** 비어있는 func2()에 console.log(func2(1))을 넣으면
 * [Arguments] { '0': 1 } 이렇게 나온다
 * 이유는 비어있는 상태이고 parameter를 만들지 않은 상태이어서 
 * 함수안 func2( 여기는 배열상태가 됨) 그래서 값이
 * [Arguments] { '0': 1 } 상태로 출력되게 되는 것이다.
 */

function func3() {
    return arguments[1]
}
console.log(func3("안녕", "하이"))
/** 비어있는 func3()에 console.log(func3("안녕"))을 넣으면
 * "안녕"이 출력되어 나온다 이유는
 * 함수 function func3()에 parameter(매개변수)를 지정해주지 않았다
 * 그렇기 때문에 배열의 형식으로 만들어진다
 * 그래서 return arguemnts[1]을 하면
 * console.log(func3("안녕", "하이))를 지정했을떄 하이가 출력 됨
 */

function func4(span) {
    return span
};
console.log(func4(201));

const func5 = function () {
    return arguments
};
console.log(func5(1,2,3,4,5,6,7));
/** func5 해설
 * const func5 = function() {} 형식으로 func5() 매개변수(parameter)
 * 를 지정하지 않고 만들었다.. 이때 const func5 = function()은
 * 배열 형식이 되고 이는 func5(1,2,3,4,5,6,7)이 배열 형식으로 출력 됨
 */

// Array.from은 배열이 아닌 것을 유사 배열 객체로 바꿀때 사용함
const func6 = function () {
    const conVerarr = Array.from(arguments)
    return conVerarr.reduce((prev, curr) => prev + curr)
}
console.log(func6(1,2,3,4,5,6,7)); // 28...... .reduce를 활용한 합계를 구함
/** func6() 기능들 설명 ----- 프로그래머스 코테에서 문제로 나옴
 * .from은 console.log(func6(1,2,3,4,5,6,7)의 각각의 수들을 배열로 묶는다.
 * return conVerarr.reduce((prev, curr) => prev + curr);에서
 * .reduce는 func6()의 배열을 더하고 결과를 도출할때 사용한다.
 *
 * .reduce는 어떤 값을 내릴때 사용한다. 그렇지만 문제는 구할땐 이렇게 사용된다.
 */