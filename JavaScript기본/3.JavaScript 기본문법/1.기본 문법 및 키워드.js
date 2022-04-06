// 키워드
// ECMA script2015 기준 예약 키워드
/* break, case, catch, class, const, debugger, default(en-US), delete do, else
export, extends, finally, for, function, if, import, in ,instanceof, new, return, super */

                                    // ↑

// 프로그래밍언어는 사용시 액션이 일어나서 사용하지 말라는 것 "예약어들이다"

/* ------------------------------------------------------------------------------------------------------------------------------------ */


// ECMA script2015 기준 예약어들이다(CS문제에서 나옴)
/* 설명 */
break 
// break문은 현재 반복문, switch문, 또는 label문을 종료하고 그 다음 문으로 프로그램 제어를 넘길때 사용됨
// 진행되고 있는 코드를 정지할때 사용

case // switch문 안에서 사용할 수 있음
// switch 안에 값을 입력받고 그 안에 case구문을 입력하여 case에 맞는 값이 들어왔을 때 조건이 실행되는 구조
// switch 안에 case를 사용함

switch // if-else문 대신 사용할 수 있음
// 조건문에서 비교할 초이스(값)이 많은 경우,, if else문을 반복 사용하는 것보다 switch문을 이용하면 가독성을 높일수 있다
/* if-else문은 조건식이 반드시 블리언 값으로 평가되는 반면
    switch문은 표현식은 블리언 값보다 문자열, 숫자 값인 경우가 많다.
    if-else문은 논리적 참, 거짓으로 실행할 코드 블록을 결정한다.
    switch문은 논리적 참, 거짓 보다 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용한다.
    */

catch // try... catch
// try... catch문으로 실행할 코드블록을 표시하고 예외(exception)이 발생(throw)할 경우 응답을 지정한다.
// try...catch와 에러 핸들러
/** try...catch
 * 능숙한 사람이라도 애러가 있는 스크립트를 작성할 경우 원인은 아마도 실수,
 * 예상하지 못한 사용자의 입력, 잘못된 서버 응답 등의 수 많은 이유가 될것임
 * 에러가 발생하면 스크립트는 "죽고(중단), 콘솔에러가 발생한다
 * try...catch는 이것을 잡아주는 역활
 * try...catch는 문법을 사용하면 스크립트가 죽는 것을 방지하고 에러를 잡아서(catch)
 * 에러발생 대신 더 합당한 무언가를 실행시킨다.
 * try {
 *  //코드
 * } catch(error) {
 *  //에러 핸들링
 * }
 */

class 
// class는 class표현식, class선언 두 가지가 있다.
/** class선언은 클래스의 이름(여기서 Rectangle)과 함께 class키워드를 사용해야합니다.
 * class Rectangle { // 여기서 class를 Rectangle 이름으로 선언함
 *  constructor(height, width) {
 *      this.height = height;
 *      this.width = width;
 *  }
 * }
 */

/** class 표현식 
 * class를 정의하는 다른 방법이다. Class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있음
 * 이름을 가진 class 표현식의 이름은 클래스 body의 local scope에 한해 유효합니다.
 * name 속성을 통해 찾을수 있다.
 * 
 * // unnamed
 * let Rectangle = class { // class의 name을 지정하지 않았기때문에 let의 Rectangle로 출력함
 *  constructor(height, width) {
 *      this.height = height;
 *      this.width = width;
 *  }
 * };
 * console.log(Rectangle.name); // output: Rectangle
 * 
 * // named
 * let Rectangle = class Rectangle2 { // class의 name을 Rectangle2로 지정했기 떄문에 output할때 Rectangle2로 한다.
 *  constructor(height, width) {
 *      this.height = height;
 *      this.width = width;
 *  }
 * };
 * console.log(Rectangle.name); // output: Rectangle2
 */

const 
/** const
 * cost선언은 블록 범위의 상수를 선언합니다. 상수의 값을 재할당할 수 없으며 다시 선언할 수도 없습니다.
 * 
 */
debugger
default 
delete 
do 
export
extends 
for  
import 
in 
instanceof 
new 
super