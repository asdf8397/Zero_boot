/* 클로저 */
// 클로저는 함수와 함수가 선언된 어휘적 호나경의 조합이다.
// 클로저를 이해하려면 JS가 어떻게 변수의 유효범위를 지정하는지(Lexical Scoping)을 먼저 이해해야한다.

function returnX() {
    return "x";
}

const x = returnX()
        // ↑
// typeof x는 어떤 타입일까
console.log(typeof(x)); // output: String
/* 이유는 function returnX()는 return "x" ← String이고 
    이것을 return해서 returnX()에 담아서 const x에 담고 이것을 typeof(x)로
    확인하면 string이다.
    */

function returnX2() {
    let x2 = "x"; // string

    return function returnY2() {
        return x2 + "y";
    };
}

const x2 = returnX2();
console.log(typeof(x2));


function outer(x) {
    let outerVal = x;

    return function inner(y) {
        let innerVal = y;

        return {
            x: outerVal,
            y: innerVal,
        };
    };
}