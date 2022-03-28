/* 클래스란? */
/** Class
 * class선언은 프로토타입 기반 상속을 사용하여, 주어진 이름의 새로운 클래스를 만듭니다.
 */
/*
classes
class는 객체를 생성하기 위한 템플릿이다 클래스는 데이터와 이름 조작하는 코드를
하나로 추상화합니다. JS에서 클래스는 프로토타입을 이용해서 만들어졌지만 ES5의 클래스
의미와 다른 문법과 의미를 가집니다.

Class 정의
class는 사실 "특별한 함수"입니다 함수의 함수 표현식과 함수 선언으로 정의할 수 있듯이
class 문법도 class 표현식 and class 선언 두 가지 방법을 제공합니다.
*/

function person(name, age) {
    this.name = name;
    this.age = age;
}

/* 이것을 class로 변환시킬 수 있음
const jang = new person("jang", 99);
const hs = new person("hs", 11);
*/

class person {
    constructor(name, age) { 
        // constructor는 새로운 클래스를 생성할 때 가장 처음 실행되면서 초기값을 설정해준다.
        // 그러므로 생성자를 받을때 constructor을 사용하면 된다.
        this.name = name;
        this.age = age;
    }
}

