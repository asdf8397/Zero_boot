/* Scope(스코프) */
/* 유효범위
 * - 변수 유효 범위
 * - 내부에서 외부로 접근 가능
 * - 외부에서 내부로 접근 불가능
 */

/* 처음부터 => var => 함수 단위 유효
    ES2015+ => let, const => 블록단위
 */

/*
var global_varVal = "전역변수";
const constVal = "블럭-단위";

for (var index = 0; index < [0,1,2].length; index++) {

}

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
*/

var globalVal = '전역 변수';

if (true) {
    var b = 'b';
    let a = 'a';
}
console.log(b); // b
console.log(a); // undefined

// 왜냐하면 var(전역변수)는 외부변수에서 내부변수로 접근가능하다
// 그렇지만 let은 (블록단위) 이므로 외부에서 내부로 접근 불가능하다
// 개발할때 안정성에 문제가 생긴다 var를 사용하면 되도록 let과 const를 사용하자