/* 모듈 */
// 모듈: 독립적인 특성을 가진 기능 단위의 부품
// 프로그램의 기능을 독립적인 부품으로 분리할 것
// 동시에 여러 다른 모듈과 함께 조합하여 재사용될 수 있다.

// 내가 만든 코드가 Style도구가 재활용할 수 있는가

/* 모듈이 나오게된 이유 */
// indexedDB.html의 파일이 있다고 가정하면 ↓

/* a.js */
var a = 10;
function out() {
    return a
}

/* b.js */
var b = 10;
function out() {
    return b
}

/* c.js */
var c = 10;
function out() {
    return c
}

// ↑ 위의 코드를 다 합칠 수 없을까 생각해서 나온 것이 ES2015 모듈화된 JS이다
