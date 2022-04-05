/* 2. 암시적 바인딩 */

/** this
 * 1. 전역 공간 this
 * 2. 함수의 this
 * 3.객체의 this
 * 
 * 암시적인 this 바인딩
 */

// 전역공간에서 this
console.log(this);

window.alert("hello"); // 웹상에서 호출이 되면서 hello가 호출됨

// 함수에서의 this
function func() {
    console.log(this) // 함수의 this는 window를 가리킨다.
}

// 객체의 this
const obj2 = {
    name: "obj",
    depth: {
        name: "nested obj",
        method: function() {
            return this.name
        }
        // console.log(obj2.depth.method());하면 output: nested obj가 출력이 됨
    }
}
// 메서드(객체)의 this는 메서드 내부의 element를 바라보고 있다.
