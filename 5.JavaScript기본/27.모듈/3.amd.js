/* AMD */
// 모듈을 선언하면서 의존하고 있는 모듈을 함께 명시
// 비동기적으로 의존 모듈을 불러온다

/* CommonJS */ // 서버 & 동기 // 현재 많이 사용하는 코드 CommonJS
const module = require("module");
module.exports = module;

/* AMD */ // 브라우저 & 비동기 // 과거 많이 사용했는 코드 AMD
define(["module"], function(module) {
    return function() {

    }
})