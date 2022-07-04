/** Scope(스코프)
 * 유효범위
 * 변수 유효 범위
 * 내부에서 외부로 접근 가능
 * 외부에서 내부로 접근 불가능
 * 
 * 처음부터 => var => 함수 단위 유효
 * ES2015+ => let, const => 블록단위
 */

let global_varVal = "전역변수";
let constVal = "블럭-단위";

// for (let index = 0; index < )
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
/* 함수의 내부에서는 외부의 값을 가져와서 사용할 수 있고 출력할 수 있지만
* 함수 외부에서는 함수 내부의 값을 가져가서 사용하려고 하면 에러 발생
* 
* 함수 내부에서 외부 접근가능
* 함수 외부에서 내부 접근 불가능*/

let global = "전역 변수";

if (true) {
    let a = "a"; // undefined 또는 에러발생 
    let b = "b"; // undefined 또는 에러발생
}
// 접근 불가능 에러발생
// console.log(a);
// console.log(b);

var global_number2 = "전역변수";
if (true) {
    var b = "b";
    var a = "a";
    let c = "c"; // undefined 또는 에러발생
}
console.log(b);
console.log(a);

/** 위의 코드와 아래의 코드가 똑같은데 왜 다른이유
 * var(전역변수)는 외부변수에서 내부변수로 접근가능하다
 * 쉽게말해서 var의 변수를 적용하면 아무리 외부에서 접근할수 없어도 
 * var의 변수는 예외적으로 접근가능하게 된다.
 * 그렇지만 let, const의 변수들은 "블록변수"이므로 외부에서 내부로 접근 불가능하다.
 * 개발할때 안정성에 문제가 생긴다 var를 되도록 사용하지말고 let, const를 사용할것을 권함
 */