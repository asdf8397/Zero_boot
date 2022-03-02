/* SCOPE */
// SCOPE범위

let x = 1;
let y = 2;

console.log(x); // output: 1
console.log(y); // output: 2

{ // 지역변수
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

    console.log(C); // output: 3
    console.log(D); // output: 4
    console.log(A); // output: 1
    console.log(B); // output: 2
}
console.log(A); // output: 1
console.log(B); // output: 2

// Scope 예제코드 (2)
// global scope

let A2 = 1;

{
    // local scope
    let C2 = 10;
    let D2 = 20;

    console.log(C2); // output: 10
    console.log(D2); // output: 20
    console.log(A2); // output: 1
}

/* Scope 예제코드 (3) */
let index = 1000;

function local_func() {
    let index = 100;

    for(let index = 0; index < 10; index++) {
        console.log(index); // output: 0,1,2,3,4,5,6,7,8,9
    }
    // local_func();
    console.log(index); // output: 100
}
local_func();
console.log(index); // output: 1000