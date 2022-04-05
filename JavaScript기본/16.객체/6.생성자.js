/* 6. 생성자 */
// 생성자 함수는 동일한 객체를 계속 만들어 내야할때 사용
const me = {
    name: "jang",
    age: 10,
    location: "korea",
};
console.log(me);

// 생성자는 PascoalCaseName으로 시작한다 암묵적으로,,, 예) function Person(param) {}
function Person(name, age, location) { // const me의 name, age, location을 function Parson에서도 만들어야 되기 때문에
    // this.은 생성될 인스턴스를 가리키는 것이 this이다
    this.name = name;
    this.age = age;
    this.location = location;
}
// 생성자로 만들면 장점: 계속적으로 연결해서 붙여서 만들수있음
const me2 = new Person("jang", 10, "korea"); // 여기서 person은 function Person을 만들어준 저기에 들어간다.
const you = new Person("Kim", 20, "China");
console.log(me2);
console.log(you);

function Person2(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function() {
        return this.name + "입니다";
    }

    this.getName2 = function() {
        return this.age + "입니다.";
    }

    this.getName3 = function() {
        return this.location + "입니다.";
    }
}
const me10 = new Person2("JANG", 30, "South Korea");
const you10 = new Person2("KKIM", 100, "CHINA");
console.log(me10);
console.log(you10);

console.log(me10.getName());
console.log(me10.getName2());
console.log(me10.getName3());

console.log(you10.getName());
console.log(you10.getName2());
console.log(you10.getName3());