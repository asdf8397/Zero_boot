/* 기본 문법 및 키워드 */

// ECMA Script2015 기준 예약어들

break
// break문은 현재 반복문, switch문 또는 label문을 종료하고 제어하고 넘길때 사용함
// 진행되고 있는 코드를 정지할때 사용함

continue
// 어떠한 행위를 하다가 continue문을 만나면 해야할 명령문을 실행하지 않고 그 다음 명령문을 실행하는 명령문입니다
// ex) for문에서 1부터 10까지 출력하고 있는데 7이 출력될 순서에 continue문을 만나면 7이 출력이 안되고 8부터 다시 출력된다.

if
// if문은 지정된 조건이 참인 경우 명령(statement)을 실행합니다. 조건이 거짓인 경우 다른 명령문을 실행합니다 이럴떄 사용하는 것이 if문

if-else
// if-else는 if문의 지정된 값이 참일떄 if가 출력이 되는데 만약 false(거짓)일때 else문에서 지정한 것이 출력이 된다.

else if
// 다중의 if-else문은 else if절을 만들기 위해 중첩될 수 있다 다시말하면 else-if문은 여러개를 만들어서 취사선택해서 true인 값을 출력할수있다
// else if의 특징은 switch문 대신 사용할 수 있음
// else if는 참, 거짓으로 맞는 true false로서 블록을 결정할때 사용한다.

switch 
// if-else문 대신 사용할 수 있음
// if-else문을 대신해서 사용가능하고 switch문은 가독성을 높일 수 있음
// switch문은 boolean값보다 문자열, 숫자 값인 경우가 많다.
// switch문은 true, false를 사용하지만 case(상황)에 따라서 실행할 코드의 블록을 설정해서 사용할 수도 있다... 사용성은 else if보다 높다.

case
// switch문의 안에서 사용한다.
// switch안에 값을 입력하고 case문을 사용해서 조건식을 구조화해서 실행한다.

try-catch
// 예외처리를 위한 구문이다.
// try문에서 Exception 예외가 발생했을 경우 catch(Exception)로 빠져나와서 실행문을 실행한다

catch
// 괄호()와 블록{} 두부분을 나눠져있는데 괄호 처리하고자 하는 예외타입(Exception), 참고변수(e)를 선언한다
// 여기서 e는 try에서 처리되지 않은것을 catch에서 잡아줄때 그 잡아줄 내용, 또는 값을 e라고 간단히 표현했음
// 예외처리 발생시 발생예외에 해당하는 클래스를 인스턴스가 만들어진다.
// AuthException이 발생한다고 하면 AuthException인스턴스가 생성된다.
// try블록내에서 예외가 발생했다면 처리는 catch블록에서 해준다

finally
// finally는 try-catch문에서 예외발생 여부와 관계없이 항상 실행된다. 무조건 실행되는 코드이다.


class
/** class는 class표현식, class 선언 두가지가 있다.
 * class선언은 클래스의 이름(Rectangle)과 함께 class키워드를 사용한다.
 */

// class선언함
class Rectangle { // 여기서는 class를 선언만함
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

/** class 표현식
 * class 정의하는 다른 방식
 * class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있음
 * 이름을 가진 class 표현식의 이름은 클래스 body의 local scope에 한해 유효하다.
 * name 속성을 통해 찾을수 있다.
 */

// unnamed
let Rectangle = class { // 아무것도 지정하지 않은 class에서 Rectangle을 그냥 지정한 것 name없음
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name); // output: Rectangle

// named
let Rectangle = class Rectangle2 { // let Rectangle변수에 class의 name을 Rectangle2로 지정한 것
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name); Rectangle2

/* 변수 let const var */
var
/** 변수 호이스팅이란
 * 
 * 예시
 * console.log(chicken); // undefined
 * var chicken = "nice";
 * console.log(chicken); // nice
 * 
 * 변수가 생성되면 선언 => 초기화 => 할당 3단계로 진행되고 Scope에 변수를 등록한 후 변수를 위한 공간을 확보한 (선언)변수를 undefined로 초기화 한다.
 * 그래서 위에 예제에서도 첫번째 console.log에 Syntax error가 발생안하고 undefined가 된다
 * 그리고 난후 할당문에 도달해서 값이 할당되면서 정상적으로 출력이 된다.
 * 원래 undefined가 나타나면 안됨 undefined가 된다는 것 자체가 호이스팅이다.
 * 
 * var의 변수선언과 중복 선언가능
 * var chicken = "nice";
 * console.log(chicken); // nice
 * var chicken = 1;
 * console.log(chicken); // 1
 * 
 * var는 중복 선언가능하다 let const는 불가능
 * 
 * 
 * // let
 * 선언단계(Declaration phase)
 * 변수를 실행 콘텍스트 변수 객체에 등록한다. 이 변수 객체는 스코프가 참조하는 대상이다.
 * 
 * 초기화단계(Initialization Phase)
 * 변수 객체에 등록된 변수를 위한 공간을 메모리에 확보한다.
 * 이 단계에서는 변수는 undefined로 초기화 된다.
 * 
 * 할당단계(Assignment phase)
 * undefined로 초기화된 변수에 실제 값을 할당한다.
 * 
 * 
 * // const
 * cost는 상수를 위한 사용한다. 반드시 상수만을 위해 사용하지 않는다.
 * 
 * // 선언과 초기화
 * let은 재할당이 가능하지만 const는 재할당은 안된다.
 */
 
function

return


for

in

