/* UMD */
// universal Module Definition

// AMD와 CommonJS 두 방식 모두 지원
// 클라이언트, 서버 어디에서나 작동

/* 문법들 */
CommonJS
const module = require("module");
module.exports = module;


AMD
define(["module"], function(module) {
    return function() {

    }
})


UMD // UMD 안에서는 CommonJS랑 AMD가 둘다 구분해서 사용할 수 있게 도와줌
(function (root, factory) {
    if (typeof exports === "object" && module.exports) {
        // CommonJS
        module.exports = factory(require("module"))
    } else if (typeof define === "function" && define.amd) {
        // AMD
        define(["module"], function (module) { })
    } else {
        // 전역공간
        root.global = factory(root.module)
    }
}(this, function (module) {
    // 실제 모듈
}))