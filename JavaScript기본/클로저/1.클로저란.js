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
console.log(typeof(x2)); // output: function
/* 설명하자면: console.log(typeof(x2))를 하면 이것은 returnX2()를 받게되고
    returnX2(){ 여기안에 let x2 = "x"가 있는데 이것이 return되서
    function returnY2() {return x2 + "y"에 들어가게된다 근데 여기서 
    한가지 설명하면 returnX2(){let x2 = "x"는 function returnY2()를 뭉티기로
    가리키고있다 그랬을때 x2로 returnX2()로 받아서 returnY2()를 받는다고 했을때
    returnX2()는 function returnY2()를 가리키고 있는 것이기 때문에
    결론적으로 출력하면 function이 된다.*/
console.log(typeof(x2 + "y")); // output: string



function returnChar(x3) {
    let outerChar = x3;

    return function returnChar2(y3) {
        let innerChar = y3;

        return outerChar + innerChar;
    };
}

const x3 = returnChar("x");
const xy = x3("y");
const xz = x3("z");
const xc = x3("c");
console.log(typeof(x3)); // output: function
console.log(x3); // output: [Function: returnChar2]
console.log(xy); // output: xy
console.log(xz); // output: xz
console.log(xc); // output: xc

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

///////
function sum(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

const sum5 = sum(5);
const sum10 = sum(10);

sum5(10);
sum5(20);
sum5(30);

sum10(5);
sum10(15);
console.log(sum5(10)); // output: 15
console.log(sum5(20)); // output: 25
console.log(sum5(30)); // output: 35
console.log(sum10(5)); // output: 15
console.log(sum10(15)); // output: 25



function sum2(num1) {
    return function(num2) {
        return function(num3) {
            num1 + num2 + num3;
        }
    };
}

const sum3 = sum2(5);
const sum4 = sum2(10);

sum3(10)(10);
sum3(20)(10);
sum3(30)(10);

sum4(5)(10);
sum4(15)(10);


// 화살표 함수
const sum10 => (num1) => (num2) => (num3) => num1 + num2 + num3;

const sum5 = sum(5);
const sum10 = sum(10);
