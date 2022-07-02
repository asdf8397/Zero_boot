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
// 함수(function)은 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록이다 하함수는 필요할때 마다 호출해서 작업을 반복할때 사용한다.
// 함수는 하나의 datatype으로 함수를 변수에 대입하거나 함수에 property를 지정하는 것도 가능하다.
// 함수는 다른 함수 내에서 중첩으로 사용가능하다.

/* 함수의 요소 */
// 1. 함수는 본인의 이름을 가지고
// 2. 괄호 안에서 쉼표(,)로 구분되는 함수의 매개변수(parameter)
// 3. 중괄호({})로 둘러싸인 실행문

/* 함수의 요소 설명 */
// 함수이름(function name)은 함수를 구별하는 식별자(identifier)
// 매개변수 (parameter)는 함수를 호출할때 인수(argument)로 전달된 값을 함수 내부에서 사용할 수 있게 해주는 변수


// return
// return은 function 함수에서의 값을 반환받을 때 사용한다 return
// return은 반환문을 통해 호출자 함수에서 실행된 결과를 전달받을수 있고
// return된 값을 받아서 전달하고 출력할때도 사용할수있다 function에서 console.log대신에 사용할수있다 function 함수에서 문법형식으로 return 사용하는 것이 맞음

/* for-in */

for
// for문은 고전적인 for문이고 반복문을 수행할때 주로 사용함
// for문을 이용해서 값을 반복해서 추출할때 for문을 사용함
// 광범위하게 반복문을 사용해야할때

for-in
// for in문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복합니다
// for in문은 for문에서 원하는 값 key 또는 value값을 선택적으로 뽑아서 골라낼때 사용한다.

/* 예시 */
const for_in = {
    one: "key",
    two: "in",
    three: "value",
};

for(let i in for_in) {
    console.log(i);
}
/** result,, output:
 * one
 * two
 * three
 */


const for_in2 = {
    one2: "key",
    two2: "in",
    three2: "value",
};

for(let i in for_in2) {
    console.log([i])
};
/** result,, output:
 * key
 * in
 * value
 */


for-of // for-of문은 key, value을 추출하지 못한다.

const for_of = "forof";
for(let i of for_of) { // for-of는 반복문으로 문자를 뽑아낼때 사용함
    console.log(i);
} // output: f,o,r,o,f 


foreach
// foreach(for-each)문은 for, while, do-while 반복문 같은 배열 탐색 기법이다.
// 일반적으로 for반복문과 동일하게 for키워드를 사용합니다
// 반복문 내에 카운터 변수를 선언하고 콜론 다음 배열 이름 순서대로 선언합니다.
// 일반적인 배열이나 Collection클래스를 반복하는데 사용합니다.
// forEach() 메서드는 배열에 활용이 가능한 메서드로 파라미터로 주어진 함수의 배열 요소 각각에 대해 실행하는 메서드이다 return하는 값이 없다.

/* 예시 */
const myArr = [1,2,3,4,5];
const newMYArr = myArr.forEach((currentElement, index, array) => {
    console.log(`요소: ${currentElement}`);
    console.log(`index: ${index}`);
    console.log(array);
});
console.log(newMYArr); // undefined // 반복문안에 선언해서 foreach를 통해서 출력할수있다.



/* do-while */

do...while
// do...while문은 테스트 조건이 거짓으로 평가될 때까지 지정된 구문을 실행하는 루프를 만듭니다
// 단, 구문이 실행된 뒤에 테스트 조건이 평가됨으로 구문은 무조건 한번은 실행됩니다.

/* 예시 */
let result = "";
let i = 0;
do {
    i = i + 1;
} while (i < 5);

console.log(result); // 1,2,3,4

delete
// delete연산자는 객체의 속성을 제거합니다. 제거한 객체의 참조를 어디에서도 사용하지 않는다면 나중에 자원을 회수합니다.

// 매개변수
// object는 객체의 이름, 또는 평가했을때 객체를 반환하는 표현식
// property는 제거하려는 속성

/* 예시 */
delete Object.property 
delete object["property"];

// Object자리에 객체의 이름이 들어가면 됨 삭제하는게 명확해짐


default
// default 기본값 매개변수
// 기본값 함수 매개변수 (default function parameter)를 사용하면 값이 없거나 undefined가 전달될 경우 이름붙은 매개변수를 기본값으로 초기화할 수 있다.

// export, import 모듈 내보내고 가져오기
export
// 변수나 함수의 클래스를 선언할때 맨 앞에 export를 붙이면 내보내기가 가능하다

/* export */
/* 선언부 앞에 export 붙이기 */
// 배열로 내보내기
export let months = ["Jan","Feb","Mar","Apr","Aug","Sep","Oct","Nov","Dec"];
// 상수로 내보내기
export const MODULES_BECAME_STANDARD_YEAR = 2015;
// 클래스 내보내기
export class User {
    constructor(name) {
        this.name = name;
    }
}

/* 선언부와 떨어진 곳에 export붙이기 */
function sayHi(user) {
    console.log(`Hello, ${user}`);
}

function sayBye(user) {
    console.log(`Bye, ${user}!`);
}

export{sayHi, sayBye};


import
/* import */
// 무언갈 가져오고 싶을때 목록을 만들어서 import{...}안에 적어주면 됨

import{sayHi, sayBye};
sayHi("John"); // Hello, John!
sayBye("John"); // Bye, John!
// 이것은 export와 연결지어서 코드 볼것

// import 'as'
import {sayHi as hi, sayBye as Bye} from './say.js';
hi("John"); // Hello, John  <= 여기서 hi 자리에 sayHi가 들어가야하지만 sayHi를 hi로 변경시킴
Bye("John"); // Bye, John <= 여기에 Bye 자리에 sayBye가 들어가야하지만 sayBye를 Bye로 변경시킴

extends
// extends는 클래스의 자식 클래스를 생성할떄 사용한다.

/* 예시 */
class world_class { // class를 생성하고 world_class라는 name으로 지정함
    constructor(nation) {
        this.nation = nation;
    }
    whereRUFrom() {
        console.log(`I'm from ${this.nation}`);
    }
}

class Asia extends world_class { 
    // 2번째 class를 생성하고 name을 Asia라고 생성한다 extends로서 1번째 class world_class 밑의 자식 class를 생성했으므로 extends를 사용함
    constructor(nation) {
        super(nation); // 2번째 class에서 1번째 class world_class의 nation을 가지고 오니까 부모 class를 호출할때 사용하는 super를 사용함
    }
    whereRUFrom() {
        console.log(`I live in ${this.nation}`)
    }
}

let imfrom = new Asia("SouthKorea");
imfrom.whereRUFrom();

constructor
// constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드이다.
/* constructor는 쉽게말해서 부모 메서드에서 사용했었어도 자식 메서드에서 인스턴스 객체를 생성하고
    사용할수있음 */
// constructor는 판별 목표 함수


instanceof 
// instanceof는 연산자인 Object의 prototype체인에 Object.prototype... 이렇게 시작됨
// 여기에 constructor.property이 존재하는지 판별한다

// 쉽게 설명
// instanceof연산자는 obj instanceof class
// obj가 class에 속하거나 class를 상속받는 클래스에 속하면 true가 반환됩니다

class Rabbit {}
let rabbit = new Rabbit();
// rabbit이 클래스 Rabbit의 객체인가요?
console.log(rabbit instanceof Rabbit); // output: true
/* class는 Rabbit이다 여기서 let rabbit으로 지정하고 new Rabbit()으로 했을때 
rabbit은 instanceof를 거치면서 Rabbit을 나타내냐고 true false로 나타내면 true가 나온다 */

// instanceof는 생성자 함수에서도 사용할 수 있습니다

// 클래스가 아닌 생성자 함수
function Rabbit() {}
console.log(new Rabbit() instanceof Rabbit); // true
// ↑
// 쉽게설명해서 function Rabbit()으로 지정했고 new Rabbit()으로 지정했는데 이것은 Rabbit을 가르키나요? instanceof에게 true false 확인할수있음


new
// new는 생성자함수이다.
// new 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들수 있다
// new라는 기호는 JS의 고유의 예약어이며 연산자이다

/* 예시 */
// new 활용법
// 인수가 없을 경우
let hello = new Function('alert("hello")');
console.log(hello()); // hello

// 인수가 두개인 함수의 경우
let sum = new Function("a","b", "return a+b");
sum = new Function("a,b", "return a+b");
sum = new Function("a,b", "return a+b");

console.log(sum(1,2));

// 동적으로 문자열을 전달받아 실행 할수도 있다.
let str = ... // 코드 형태의 동적으로 전달받은 문자열
let func = new Function(str);
func();

// new는 객체를 새로 생성 new(새로) 지정해서 코드를 전달받아서 지정할수있다


super
// super는 부모 오브젝트의 함수를 호출할때 사용한다.
super([arguments]); // 부모 생성자 호출
super.FunctionOnparent([arguments])

/* 예시 */
class Polygon {
    constructor(height, width) {
        this.name = "Polygon";
        this.height = height;
        this.width = width; 
    }
    sayName() {
        console.log("Hi, I am a ", this.name + ",");
    }
}

class Square extends Polygon {
    constructor(length) {
        this.height;

        super(length, length); // 부모 object를 호출할때 사용함
        this.name = "Square";
    }

    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this.area = value;
    }
}

this

debugger
// debugger는 코드의 중단점을 설정하는 등 현재 사용할 수 있는 디버그 기능을 호출합니다.

/* 예시 */
function potentiallyBuggyCode() {
    debugger;
    // 버그가 있을 것으로 생각하는 코드를 분석하거나, 한 단계식 진행해보거나....
}

// debugger에 대한 설명
/* debugger는 실행되고 있는 것을 일시중단시키고 debugger가 된것을 보여준다
여기서 debugger의 잘못된 부분을 직접 마우스로 고칠수있다
console에서 고친부분은 임의적으로 고쳐진 부분이라서 적용되지 않지만 debugger를 적용한 부분은 
고친다면 고친 부분이 웹에 적용이 된다. */

/* 예시 */
function method1 () {
    value1 = 20;
    debugger;

    return value * 2;
}

/* 여기서 debugger를 넣어두면 웹에서 debugger를 통해서 value1 = 20;이후 debugger에서 정지된다
정지된 dbugger에서 value1이 20인데 잘못됬다고 생각해서 30으로 고치고 실행시키면 30으로 적용된 값이
웹에서 작동하게 된다. 이렇게 debugger는 잘못된 부분을 정지시키고 고칠때 유용하게 활용된다. */

// debugger는 개발의 도구의 중단점 (break point)로서 사용가능하다