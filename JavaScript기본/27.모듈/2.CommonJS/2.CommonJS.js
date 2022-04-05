/* CommonJS */
/*
// 모듈 a.js
const b = require('./b');
const c = require('./c');

// 모듈 b.js
const d = require('domain').create();
d.on('error', () => {
    // 모든 것을 무시합니다.
});
d.enter();

// 모듈 c.js
const dep = require("some-dep");
dep.method();
// 즉시 실행파일을 묶어서 사용하는 것이 아닌 모듈단위의 프로그램을 사용하는 것
*/


/* CommonJS (Export) */ // Export는 외부에서 사용할수 있도록 내보낸다.

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function () {
        return this.name + "입니다.";
    };
}
const a = "a";
module.exports = Person; // ◀ 이런식으로 작성하면 function Person()의 안에 있는 것들을 내보낼 수 있게된다.


// module.exports = {a: , b: ,} 이렇게 여러개를 넣을 수 있다 하지만 단일 하나를 넣을 수 도 있다.