/* 실행 - 컨텍스트 */
// JS가 실행되는 방식을 담고 있는 핵심 원리
// JS엔진은 코드를 읽고 실행에 필요한 정보를 모아놓은 것

/*
실행 컨텍스트의 종류
Global: 전역,,, this, object, 선언
Function: 함수,,, 상위, this, 매개변수, argument
Eval: eval메서드


실행 컨텍스트의 단계
Creation Phase - 생성단계
JS엔진이 함수를 호출했지만 실행이 시작되지 않은 단계

Execution Phase - 실행단계
전역 변수의 값 할당이 발생하며 코드를 실행하는 단계
*/

/**
 * # 생성 단계
 * 1. 전역객체 생성
 * 2. 변수 생성
 * 3. 변수의 undefined로 초기화
 * 4. hello 함수는 메모리에 위치
 * 
 * 
 * # 실행단계
 * 1. 함수 호출시 함수 실행 컨텍스트 생성
 * 2. arguments 접근 가능
 * 3. GEC에서 생성된 환경에 접근 가능
 * 4. 만약 함수가 다른 함수 호출시 새로운 함수의 실행 컨텍스트 생성되며 반복
 */

var name = "zero";

function hello() { // 함수를 만들어서 호출하지 않았음 지금은 그냥 생성단계
    console.log(this.name);
    console.log(name);
}

hello();
/** output:
 * name은 제외됐기때문에 undefind
 * this.name zero
 */

// 이것은 실행단계 function hello()를 hello()로 호출했기 떄문에
// 그냥 참고하자 == 실행 컨텍스트는 면접에서 물어보는 내용임

var name2 = "zero";
function second() {
    console.log("두번째");
}
function hello2() {
    second();
    console.log(this.name2);
    console.log(name);
}
hello2();
/** output:
 * 두번째
 * undefined
 * zero
 * 
 * hello2()를 호출했지만 hello2()안에는 second(), console.log(this.name2), console.log(name)이 순서대로 있다
 * 이러한 상황에서 hello2()를 호출하면 hello2()의 안의 구성들이 순서대로 호출되서 두번째, undefined, zero 순으로 출력됨
 */