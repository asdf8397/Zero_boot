/* 함수 선언문 */

function func() {
    return "param1 + param2";
}


function func(param1, param2) {
    return param1 + param2
}

console.log(func(1, 2)); // output: 3


/* 함수 표현식 */

// 기명 함수 표현식
const func1 = function func1(pasta) {
    return pasta
};
console.log(func1("pasta"));


// 익명 함수 표현식
const func2 = function(noodle) {
    return noodle;
};

console.log(func2("pasta2"));