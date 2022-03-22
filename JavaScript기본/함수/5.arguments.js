/* arguments 객체 */
/* arguments는 function에서 여러가지를 넣어서 배열로 나타낼수있음
여러방법을 쉽게 표현할 수 있음 */
function func() {
    return arguments
}
console.log(func(1)); // output: [Arguments] {'0': 1}

function func2() {
    return arguments[0]
}
console.log(func2(1)); // output: 1

function func3(span) {
    return span;
}
console.log(func3(1)); // output: 1


const func4 = function() {
    return arguments
}
console.log(func4(1,2,3,4,5,6,7)); // output: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 }

// Array.from은 배열이 아닌것을 유사 배열객체로 바꿀때 사용함
const func5 = function() {
    // console.log(Array.isArray(arguments)); // output: false // arguments는 배열이 아니므로 false이다
    const converArr = Array.from(arguments)
    return converArr.reduce((prev, curr) => prev + curr)
}
console.log(func5(1,2,3,4,5,6,7)); // output: 28