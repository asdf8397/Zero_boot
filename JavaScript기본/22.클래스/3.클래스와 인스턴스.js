/* 클래스와 인스턴스 */

function person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function () { // 인스턴스를 생성할때 마다 불편한 메모리 소모
        return this.name + "입니다";
    };
}

const me = new person("jang", 10, "korea");
const you = new person("kim", 20, "china");

me.getName();
you.getName();


function person2(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    /*
    this.getName = function () {
        return this.name + "입니다";
    };
    */

    /* prototype은 생성자함수를 작성하고 new연산자를 사용해 객체를 생성하면,
    같은 프로토타입을 가지는 객체들을 생성할 수 있습니다 */
    /* 프로토타입이 상송되는 가상의 연결 고리를 프로토타입 체인 체인(.)으로 연결한다. */
    person2.prototype.getName = function() {
        return this.name + "입니다";
    };

}

const me2 = new person2("jang", 10, "korea");
const you2 = new person2("kim", 20, "china");

me2.getName();
you2.getName();


function person3(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

// 클래스함수는 생성자 함수보다 많은 것을 제공한다.
class person3 {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    getName() {
        return this.name + "입니다";
    }
}

const me3 = new person3("jang", 10, "korea");
const you3 = new person3("kim", 20, "china");

console.log(me3.getName());
console.log(you3.getName());