/* 1. 객체 생성 */

/**
 * 객체 생성
 */

// 싱글 리터럴 객체
const object = { // 왼쪽이 key(property) : 오른쪽이 값(value)라고 한다.
    property: "value",
    method: function() { // 객체의 속성 안의 key(property)가 function 함수로 value(값)을 가질 경우 메서드라고 한다.
    },
};
console.log(object); // output: { property: 'value', method: [Function: method] }


// 싱글 리터럴 객체를 많이 만들어야 할때

// PascalCaseWordWord2Word3: 파스칼 케이스는 암묵적으로 생성자 함수라고한다.
function NewObject(name) {
    this.name = name;
}

const newObject = new NewObject("jang");

const newObject2 = Object.create(Object.prototype, {
    name: {
        value:"jang",
        writable: true, // 덮어쓸 수 있는지
        enumerable: true, // 열거할 수 있는지
        configurable: true, // 객체 서술자를 수정할 수 있는지
        },
    },
);
// 프로토타입: 어디서 부터 파생됬고 어디왔는지

newObject2.name = "kim";

for(const key in newObject2) {
    console.log(key);
}

console.log(newObject2); // output: { name: 'kim' }