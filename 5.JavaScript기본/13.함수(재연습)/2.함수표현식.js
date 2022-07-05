/* 함수 선언문 */
function func(param1, param2) {
    return param1 + param2
}
console.log(func(10, 20));

/** 함수표현식
 * 기명 함수 표현식
 * 익명 함수 표현식
 */

/** 익명 함수표현식
 * 코딩테스트에서 많이 사용 됨
 */
const func1 = function (pasta, memebox) {
    return pasta + memebox
};
console.log(func1(10, 100));
console.log(func1("10", 10));

/** 기명 함수표현식
 * 코딩테스트에서 많이 사용 됨
 */
const func2 = function func2(pasta, look) {
    return pasta + look
};
console.log(func2("20", 20));

const func3 = function func4(pasta, noodle) {
    return pasta + noodle
};
console.log(func3(40, "40"));
// console.log(func4(50, 50)); 호출되지 않음 오류발생
/** const func3으로 지정했으면 func3으로 호출해야한다
 * func4로 호출할 경우 호출되지 않는다.
 */