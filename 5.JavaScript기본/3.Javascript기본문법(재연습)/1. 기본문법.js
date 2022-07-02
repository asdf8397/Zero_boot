/* JS 기본문법 */
/* ECMA Script2015 기준 예약어들*/

/** 기능들에 대한 설명
 * break
 * break문은 현재 반복문, switch문 또는 lable문을 종료하고 제어하고 넘길때 사용함
 * 진행되고 있는 코드를 정지할때 사용하고
 *
 * 보통 switch문이나 while문 안에서도 사용되곤 한다.
 *
 *
 * continue
 * 어떠한 행위를 하다가 continue문을 만나면 해야할 명령문을 실행하지 않고
 * 그 다음 명령문을 실행하는 명령문이다.
 * 예시) for문에서 1부터 10까지 출력하고 있는데 continue 7이 출력될 때 7은
 * 출력이 되지않고 그 다음 8부터 출력이 된다.
 *
 *
 * if
 * if문은 지정된 조건이 true일 경우 명령문(statement)를 출력(실행)한다.
 * 조건이 false일떄는 출력되지 않거나 else 또는 else if문을 통해서 출력을 하게 된다.
 * 만약 if문에서 if문 자체가 false일 경우 else if문으로 출력하게 되지만
 * else if문이 false일 경우 else문이 마지막으로 출력하게 된다.
 *
 *
 * switch
 * if-else문 대신 사용할 수 있음
 * switch문을 사용하면 if-else문으로 사용하던 것을 가독성을 높일 수 있음
 * switch문은 boolean값 보다 문자열, 숫자 값인 경우가 많다.
 * switch문은 true, false문을 사용하지만 case에 따라서 실행할 코드의 블록을 설정해서
 * 사용 할 수 있음
 *
 * case
 * if문 안에서 else_if문, else문을 사용하듯이
 * switch문 안에서 case문을 사용하게 된다.
 *
 * try-catch
 * 예외처리를 위한 구문이다.
 * try문에서 Exception 예외가 발생했을 경우 catch(Exception)을 빠져 나와서 실행문을 실행한다.
 * 쉽게말해서 try문에서 걸리는 구문을 catch문으로 받을 수 있음
 *
 * catch 이거 한번 물어볼것
 * 괄호()와 블록{} 두 부분으로 나뉘어져있는데 괄호 처리하고자 하는 예외타입(Excepiton), 참고변수(e)를
 * 선언한다.
 * try문에서 예외처리를 통해서 e를 throw를 해주고 이것을 catch(e)로 잡게된다.
 * catch(e)구문으로 잡은 것을 전달하게 된다.
 *
 *
 * finally
 * finally는 try-catch구문에서 예외처리 발생 여부와 관계없이 실행되게 한다.
 * 예를들어 if문에서 if-else if를 실행했는데 되지 않을때 else문을 통해서 무조건 실행하듯이
 * finally또한 try-catch구문에서 excepiton처리를 하던 하지않던 무조건 finally로 실행하게 만든다.
 *
 * class는 class표현식, class 선언은 두가지가 있다.
 * class선언은 클래스의 이름(Rectangle)과 함께 class키워드를 사용한다.
 *
 *
 * var, let, const
 * 
 * var
 * 변수가 생성되면 선언 => 초기화 => 할당 3단계로 진행되고 scope에 변수를 등록한 후 변수를 위한
 * 공간을 확보한 (서언)변수를 undefined로 초기화 한다.
 * 그래서 위에 예제에서도 첫번째 console.log에 Syntax error가 발생안하고 undefined가 된다.
 * 그리고 난 후 할당문에 도달해서 값이 할당되면서 정상적으로 출력이 된다.
 * 원래 undefined가 나타나면 안됨 undefined가 된다는 자체가 호이스팅이다.
 *
 * 쉽게 var 예시를 통해 설명
 * var는 중복선언 가능하다.
 * var rice = "nice";
 * console.log(rice); 결과: nice
 * var rice = 1
 * console.log(rice); 결과: 1
 *
 * 원래대로라면 중복선언을 하면 syntax error가 발생하지만 var는 중복선언이 되서
 * syntax error의 발생이 없음
 *
 * let
 * 선언단계(Declaration phase)
 * 변수를 실행 콘텍스트 변수 객체에 등록한다. 이 변수는 객체는 스코프가 참조하는 대상이다.
 *
 * 초기화단계(Initializtion Phase)
 * 변수 객체에 등록된 변수를 위한 공간을 메로리에 확보한다.
 * 이 단계에서는 변수는 undefined로 초기화 된다.
 *
 * 할당단계(Assignment Phase)
 * undefined로 초기화된 변수에 실제 값을 할당한다.
 *
 * const
 * const는 상수를 위해 사용한다 하지만 반드시 상수만을 위해서 사용되지는 않는다.
 *
 * 선언과 초기화
 * let은 재할당이 가능하지만 const는 재할당이 안된다.
 *
 * function
 * 함수(function)은 하나의 특별한 목적을 작업할 수 있도록 설계 되었고 독립적인 블록이다.
 * 코드를 짤때 호출해서 작업을 반복하면서 사용한다.
 *
 * 함수는 하나의 datatype으로 함수를 변수에 대입하거나 함수에 prototy을 지정하는 것 가능하다.
 * 함수는 다른 함수 내에서 중첩으로 사용가능하다.
 * 함수의 요소
 * 1. 함수는 본인의 이름을 가진다.
 * 2. 괄호 안에서 쉼표(,)로 구분되는 함수의 매개변수(parameter)를 가진다.
 * 3. 중괄호({})로 둘러싸인 실행문이 있다
 * 
 * 함수의 요소 설명
 * 함수의 이름 function name은 함수를 구별하는 식별자 또는 매개변수라고하며 이는(parameter)로 구분한다.
 * 함수의 매개변수(parameter)는 함수를 호출할때 인수(argument)로 전달된 값을 함수 내부에서 사용할
 * 수 있도록 해주는 변수이다.
 *
 * return
 * return은 function 함수에서의 값을 반환할때 사용한다 ,,, return
 * return은 반환한 값을 호출자 함수에서 실행된 결과로 보여줄 수 있도록 전달한다.
 * function함수에서 console.log를 대신해서 사용하며 function함수의 문법상 형식은 return이 맞음
 * 
 * 
 * for
 * for문은 고전적인 for문이고 반복문을 수행할 때 주로 사용함
 * for문을 이용해서 값을 반복해서 추출할때 for문을 사용함
 * 광범위하게 반복문을 사용해야 할때 for문을 사용함
 *
 *
 * for in
 * for in문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로
 * 키가 지정된 모든 열거 가능한 속성에 대한 반복합니다.
 * for in문은 for문에서 원하는 값 key 또는 value값을 선택적으로 뽑아서 골라낼때 사용한다.
 *
 * 예시)
 * const for_in = {
 *     one: "key",
 *     two: "in",
 *     three: "value"
 * };
 *
 * for (let i in for_in) {
 *     console.log(i)
 *     console.log([i])
 * };
 *
 * OUTPUT:
 * console.log(i) // key값 출력
 * one
 * two
 * three
 * console.log([i]) // value값 출력때
 * key
 * in
 * value
 *
 *
 * forEach // forEach문을 잘 모르겠음 물어보자
 * forEach(for-each)문은 for, while, do-while 반복문 같은 배열 탐색 기법이다.
 * 일반적으로 for 반복문과 동일하게 for키워드를 사용합니다.
 * 반복문 내에서 카운터 변수를 선언하고 콜론 다음 배열 이름 순서대로 선언합니다.
 * 일반적인 배열이나 Collection클래스를 반복하는데 사용합니다.
 * forEach() 메서드는 배열에 활용이 가능한 메서드로 파라미터로 주어진 함수의 배열 요소
 * 각각에 대한 실행하는 메서드이다.
 * return하는 값이 없다.
 *
 * 예시)
 * const myArr = [1,2,3,4,5]
 * const newMyArr =
 */

const myArr = [1,2,3,4,5]
const newMyArr = myArr.forEach((a, b, c) => {
    // console.log(`요소: ${a}`);
    // console.log(`index: ${b}`);
    console.log(a);
    console.log(b);
    console.log(c);
});
console.log(newMyArr);

/** JS 기능들에 대한 설명 이어서
 *  do-while
 *
 *  do...while
 *  do...while문은 테스트 조건이 거짓으로 평가될 때까지 지정된 구문을 실행하는 루프를 만듭니다.
 *  단, 구문이 실행된 뒤에 테스트 조건이 평가됨으로 구문은 무조건 한번은 실행됩니다.
 *
 *  let repeat = "";
 *  let i = 0;
 *  do {
 *      i += 1;
 *  } while (i < 5);
 *  console.log(repeat); output: 0,1,2,3,4
 *
 *
 *  delete
 *  delete연산자는 객체의 속성을 제거합니다.
 *  제거한 객체의 참조는 어디서도 사용할 수 없다
 *  나중에 자원을 회수합니다.
 *  
 *  
 *  매개변수
 *  object는 객체의 이름 또는 평가했을때 객체를 반환하는 표현식
 *  property는 제거하려는 속성
 *  
 *  예시)
 *  delete Object.property; // Object.property는 삭제
 *  delete Object["property"]; Object.["property"]는 삭제
 *
 *
 *  default
 *  default 기본값 매개변수
 *  기본값 함수 매개변수 (default function parameter)를 사용하면 값이 없거나
 *  undefined가 전달될 경우 이름 붙은 매개변수를 기본값으로 초기화 할 수 있다.
 *  
 *  export, import 모듈 내보내고 가져오기
 *
 *  export
 *  변수나 함수의 클래스를 선언할 때 맨 앞에 export를 붙이면 내보내기가 가능하다.
 *  
 *  배열로 내보내기
 *  export let months = ["Jan","Feb","Mar","Apr","Aug","Sep","Oct","Nov","Dec"];
 *  
 *  상수로 내보내기
 *  export const MODULES_BECAME_STANDARD_YEAR = 2015;
 *  
 *  클래스로 내보내기
 *  export class User {
 *      constructor(name) {
 *          this.name = name;
 *      }
 *  }
 *
 * 
 * import
 * 무언갈 가져오고 싶을때 목록을 만들어서 import{...}안에 적어주면 됨
 * import{sayHi, sayBye};
 * sayHi("Kim"); // sayHi안에 Kim을 넣음
 * sayBye("Lee"); // sayBye안에 Lee를 넣음
 *
 *               ↓
 *
 * function sayHi(user) {
 *     console.log(`Hello ${user}`);
 * } // output: Hello Kim
 *
 * function sayBye(users) {
 *     console.log(`Bye ${users}`)
 * } output: Bye Lee
 *
 * import {sayHi as hi, sayBye as Bye} from './say.js';
 * hi("John") 변경되서 john이 들어감
 * Hello, John  <= 여기서 hi 자리에 sayHi가 들어가야하지만 sayHi를 hi로 변경시킴
 *
 * Bye("John") 변경되서 john이 들어감
 * Bye, John <= 여기에 Bye 자리에 sayBye가 들어가야하지만 sayBye를 Bye로 변경시킴
 *
 *              ↓
 *
 * function sayHi(user) {
 *     console.log(`Hello ${user}`);
 * } // output: John
 *
 * function sayBye(users) {
 *     console.log(`Bye ${users}`)
 * } output: John
 *
 *
 * extends
 * extends는 클래스의 자식 클래스를 생성할때 사용한다.
 *
 * class world_class {
 *     constructor(nation) {
 *         this.nation = nation;
 *     }
 *     whereRUFrom() {
 *         console.log(`I'm from ${this.nation}`)
 *     }
 * }
 *
 * class Asia extends world_class {
 *     constructor(nation) {
 *         super(nation);
 *   // 2번째 class를 생성하고 name을 Asia라고 생성한다
 *      extends로서 1번째 class world_class 밑의 자식 class를 생성했으므로
 *      extends를 사용함
 *     }
 *     whereRUFrom() {
 *         console.log(`I live in ${this.nation}`)
 *     }
 * }
 *
 *
 * let imfrom = new Asia("SouthKorea");
 * imfrom.whereRUFrom();
 *
 *
 * constructor
 * constructor 매서드는 클래스의 인스턴스 객체를 생성하고 초기화 하는 특별한 메서드이다.
 * constructor는 쉽게 말해서 부모 메서드에서 사용했었어도 자식 메서드에서 인스턴스 객체를
 * 생성하고 사용할 수 있음
 * constructor는 판별 목표 함수
 * 
 * 
 * instanceof
 * instanceof는 연산자인 Object의 prototype인 Object.prototype.... 이렇게 시작됨
 * 여기에 constructor.property는 존재하는지 판단한다.
 * 
 * 
 * class Rabbit {}
 * let rabbit = new Rabbit();
 * 
 * rabbit이 클래스 Rabbit의 객체인가요?
 * console.log(rabbit instanceof Rabbit); // output: ture
 * 
 * 해설
 * class는 Rabbit으로 지정해서 Rabbit이다 여기서 let rabbit 변수에 new Rabbit()으로
 * 했을때 rabbit변수에 instanceof Rabbit이 object에 있으니 true가 나옴
 *
 * function Rabbit() {}
 * console.log(new Rabbit() instanceof Rabbit); true
 *
 *
 * 한번 더 봐야한다.
 * new
 * new 는 생성자함수이다.
 * new는 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있다.
 * new라는 기호는 JS의 고유의 예약어이며 연산자이다.
 *
 * 예시
 * let hello = new Function('alert("안녕")')
 * console.log(hello()); // output: 안녕
 *
 * let sum = new Function("a","b","return a+b");
 * sum = new Function("a,b", "return a+b");
 * sum = new Function("a,b", "return a+b");
 *
 */

let sum = new Function("a","b","return a+b");
sum = new Function("a,b", "return a+b");
sum = new Function("a,b", "return a+b");
console.log(sum(1,2))

/** JS 기능들에 대한 설명 이어서
 * 동적으로 문자열을 전달받아 실행 할 수도 있다.
 * let str = ... // 코드 형태의 동적으로 전달받은 문자열
 * let func = new Function(str);
 * func();
 *
 *
 * super
 * super는 부모 오브젝트의 함수를 호출할때 사용한다.
 * super([arguments]); 부모 생성자 호출
 * super.FunctionOnparent([arguments])
 *
 * 예시
 * class Polygon {
 *     constructor(height, width) {
 *         this.name = "Polygon"
 *         this.height = height;
 *         this.width = width;
 *     }
 *     SayName() {
 *         console.log(`Hi, I am a ${this.name}`) // output: Hi I am a Polygon
 *     }
 * }
 *
 * class Square extends Polygon {
 *     constructor(length) {
 *         this.height;
 *
 *         super(length, length); // 부모 Object 호출할때 사용함
 *         this.name = "Square";
 *     }
 *     get area() {
 *         return this.height * this.width;
 *     }
 *     set area(value) {
 *          this.area = value
 *     }
 * }
 *
 * debugger
 * degugger는 코드의 중단점을 설정하고 현재 사용할 수 있는 디버그 기능을 호출합니다.
 *
 * 예시
 * function potentiallyBuggyCode() {
 *     debugger;
 *     // 버그가 있을 것이라 생각하는 코드 분석하거나, 한 단계씩 진행해보거나...
 * }
 *
 * debugger 설명
 * debugger는 실행되고 있는 것을 일시 중단시키고 debugger가 된 것을 보여준다.
 * debugger는 잘못된 부분을 마우스로 고칠 수 있다.
 * 우리가 웹 F12의 console에서 잘못 된 부분을 고치면 F5번 키로 새로고침하면 다시 돌아온다.
 * 하지만 debugger상태에서 고치면 debugger이 적용될때 고친 부분은 웹에 적용되고
 * F5번을 눌러서 새로고침해도 다시 돌아오지 않는다.
 *
 *
 * debugger사용 함수 예시
 * function method() {
 *     value = 20;
 *     debugger;
 *
 *     return value * 2;
 *
 * 해설
 * debugger를 넣어두면 웹에서 debugger을 통해서 value1 = 20; 이후 debugger에서 정지된다.
 * 정지된 debugger에서 value1의 20을 30으로 고치고 실행하면 적용된 값이 웹에 적용된다.
 * 이렇게 debugger는 잘못된 부분을 정지시키고 즉각 고칠수 있도록 유용하게 활용된다.
 *
 * Point
 * debugger는 개발 도구의 중단점 break point로서 사용가능하다.
 * }
 */