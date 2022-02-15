function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

function calculator(callback, x, y) { 
    return callback(x, y);
    /* console.log를 받아서 calculator(callback, x, y){return callback(x, y)}에 적용한다
    적용한 값이 return되서 function add sub mul div에 적용되서 연산되고 이는 return으로 반환되서
    output에 적히게 된다. */
}

console.log(calculator(add, 7, 3));
console.log(calculator(sub, 7, 3));
console.log(calculator(mul, 7, 3));
console.log(calculator(div, 7, 3));


// call by(원시타입)

// call by value
// 값에 의한 복사로 함수 내에서 매개 변수 값을 변경 시켜도 영향이 미지치 않음
// 원시타입(primitive type)을 매개변수로 넘겼을때 발생

let a = 1;
let add = function (b) { b = b + 1; };
add(a);
console.log(a);


// call by reference (객체 타입)
// 주소에 대한 복사로 함수 내에서 매개변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
// 객체 타입(object type)을 매개변수로 넘겼을 때 발생

var a =  { v: 1 };
var add = function (b) { b.v = b.v + 1; };
add(a);
console.log(a.v);