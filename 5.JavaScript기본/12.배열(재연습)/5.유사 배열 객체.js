/** 유사배열객체 */
function func() {
    console.log(Array.isArray(arguments)); // false
    console.log([1,2]._proto_); // undfined
}
func(1,2,3,4,5,6)

/** JAVASCRIPT에서 typeof를 사용하여 배열을 검사하면 typeof는
 * Object를 리턴한다.
 * typeOf만으로는 객체가 무슨 배열인지 확인할 수 없다.
 * 객체가 배열인지 확인하기 위해서는 isArray() 함수를 사용해야 하며
 * isArray()를 파라미터로 입력받은 obj가 배열인지 여부를 Boolean으로 리턴한다.
 * 객체가 배열이면 true, 배열이 아니면 false로 리턴한다.
 *
 *
 * 여기서 isArray라는 것은
 * console.log(Array.isArray(arguments) Array로 받은 값
 * 을 arguments에 넣었는데 이를 isArray로 검사를 했을때 true, false인지
 * Boolean값으로 반환한다.
 * isArray는 배열인지 아닌지 검사를 한다.
 */

/** 매개변수(Parameter)와 인자(arguments)
 *
 * 예시)
 * function a(arg) {
 * let a = 1 * (arg);
 *
 * return a
 * };
 *
 * a(1);
 *
 * 코드에서 함수 a를 arg가 매개변수(parameter)이고 a(1)으로 함수 a를 호출 할때
 * 1이 인자(argument)이다.
 *
 * 정리
 * 쉽게말해서 function sum(매개변수: parameter) {
 *
 * }
 * sum(인자: argument)
 */