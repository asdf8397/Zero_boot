/* Scope(스코프) */
/* 유효범위
 * - 변수 유효 범위
 * - 내부에서 외부로 접근 가능
 * - 외부에서 내부로 접근 불가능
 */

// javascript가 나올때 처음부터 있었던 변수 var

var global_varVal = "전역변수";
const constVal = "블럭-단위";

function outerFunc() {
    const num = 123;
    console.log(global_varVal);
    console.log(num);

    function innerFunc() {
        var innerVal = "함수 내부 지역 변수";
        console.log(global_varVal);
        console.log(innerVal);
    }
    innerFunc();
    return "test";
}

outerFunc();