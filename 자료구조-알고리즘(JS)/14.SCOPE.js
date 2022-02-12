// SCOPE

// 변수 혹은 상수에 접근할 수 있는 범위
// 모듈/함수 내 코드에서 동일한 변수 사용시 간섭을 줄이는 용도로 사용
// Scope는 Global Scope와 Local Scope의 타입으로 구분
// ,,Global Scope: 전역에 선언되어 어디에서도 접근 가능
// ,, Local Scope(block, function level scope): 특정 지역에 선언되어, 해당 지역 내에서만 접근 가능

// Scope 범위

let x = 1;
let y = 2;

console.log(x); // output: 1
console.log(y); // output: 2

{ // 여기 안에서 지정한 것들은 여기 안에서 동작한다 (이것을 Scope)라고 한다.
    // local scope
    let x = 3;
    let y = 4;
    console.log(x); // output: 3
    console.log(y); // output: 4
}

function scope() {
    let x = 5;
    let y = 6;
    console.log(x); // output: 5
    console.log(y); // output: 6
}

console.log(x); // output: 1
console.log(y); // output: 2

// Scope 예제 코드(1)

// global scope
let A = 1;
let B = 2;

{
    // local scope
    let C = 3;
    let D = 4;

    console.log(A); // output: 1 // local scope 안에서 A가 없다 그런데 console.log 출력하게되면 global scope 영역의 let A = 1;을 지정한 값을 가져온다
    console.log(C); // output: 3
}

// console.log(C) // ReferenceError: C is not defined // 여기서 출력 C를 하면 local scope안에 있으므로 출력하면 error 발생


// Scope 예제코드 (2)

// global scope
let A = 1;

{
    // local scope
    let C = 3;
    let D = 4;

    console.log(C); // output: 3

    {
        // local scope
        let C = 5;
        let D = 6;

        console.log(C); // output: 5
    }
    // local scope 안에서 local scope를 해줬을 경우 local scope 가능
}
console.log(A); // output: 1


// Scope 예제코드 (3)
let index = 1000; // Global Scope구간

function local_func() { // Function Level Scope구간
    let index = 100;

    for(let index = 0; index < 10; index++) { // Block Level scope구간
        console.log(index); // output: 0부터 9까지 출력 0~9까지
    }

    console.log(index); // output: 100,, ,,, function local_fun(){local scope}에서 지정한 구간 내에서의 index= 100으로 지정해서 이것이 출력
}
local_func();
console.log(index); // output: 1000