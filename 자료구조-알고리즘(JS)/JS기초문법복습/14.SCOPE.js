/* SCOPE */

// Scope 범위

let x = 1;
let y = 2;
console.log(x); // ouptut: 1
console.log(y); // output: 2

{ // local variable이라고하며 지역변수
    let x = 3;
    let y = 4;
    console.log(x); // output: 3
    console.log(y); // output: 4
}

function scope() { // 지역변수라고한다
    let x = 5;
    let y = 6;
    console.log(x); // output: 5
    console.log(y); // output: 6
}

// Scope 예제 코드(1)
// global scope_ 전역변수
let a = 1;
let b = 2;
console.log(a); // output: 1
console.log(b); // output: 2

{
    let c = 3;
    let d = 4;
    console.log(c); // output: 3
    console.log(d); // outpit: 4
}

// Scope 예제코드(2)

// global Scope
let GLOBAL = 10;
{
    let LOCAL_A = 40;
    let LOCAL_B = 30;

    console.log(LOCAL_A); // output: 40
    console.log(LOCAL_B); // output: 30
    {
        let LOCAL_DOUBLE_1 = 10;
        let LOCAL_DOUBLE_2 = 20;
        console.log(LOCAL_DOUBLE_1); // output: 10
        console.log(LOCAL_DOUBLE_2); // output: 20

        console.log(GLOBAL); // output: 10
        console.log(LOCAL_A); // output: 40
    }
    // console.log(LOCAL_DOUBLE_2); 안됨 local변수이므로 local은 local밖에선 출력안됨
}


/* SCOPE 예제코드(3) */
let index = 1000;

function first() {
    let index_1 = 100;
    for (let index_2 = 0; index_2<10; index_2++) {
        console.log(index_2); // output: 0,1,2,3,4,5,6,7,8,9
    }
    console.log(index_1); // output: 100
}
first(); // first()안에 console.log출력값은 first(); 호출하면 출력이된다.
console.log(index_1); // output: 1000