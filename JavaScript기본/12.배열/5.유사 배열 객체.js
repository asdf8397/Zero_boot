// 유사 배열 객체(Array Like Object)
function func() {
    console.log(Array.isArray(arguments)); // output: true
    console.log([1,2]._proto_)
}

func(1,2,3,4,5,6)


/* JS에서 typeof를 사용하여 배열을 검사하면 typeof는 Object를 리턴한다
    typeOf만으로는 객체가 무슨 배열인지 확인 할 수 없다
    객체가 배열인지 확인하기 위해서는 isArray() 함수를 사용해야하며
    
    isArray()를 파라미터로 입력받은 obj가 배열인지 여부를 Boolean으로 리턴한다
    객체가 배열이면 true, 배열이 아니면 false로 리턴한다. */


/** 매개변수(Parameter)와 인자(argument)
 *
 *  예시)
 * function a(arg) {
 * 
 * }
 * a(1);
 * 
 * 코드에서 함수 a의 arg가 매개변수(parameter)이고 a(1)으로 함수 a를 호출할 때
 * 1이 인자(argument)입니다
 */