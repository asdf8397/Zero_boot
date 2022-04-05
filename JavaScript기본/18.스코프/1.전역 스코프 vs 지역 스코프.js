/**
 * 전역 스코프(Global)
 * 지역 스코프
 * ㄴ함수 스코프
 * ㄴ블록 스코프
 * 
 * 프로그램이 실행되는 시점 = 런타임
 */

let foo = "foo" // 전역 스코프(Global Scope)이다 어디서든 접근이 가능하다
                // 단, 전역 스코프(Global scope)는 지역 스코프로 접근 불가능함
                // 전역스코프에서 지정한 값은 지역스코프에서 쉽게 접근 가능하므로 쉽게쉽게 사용하면 안된다. 

// 여기 밑에는 지역스코프 ↓
{
    let foo = "fooooooooo"
    console.log(foo); // output: fooooooooo
}

function  func() {
    let foo = "foooo"
    console.log(foo); // output: foooo
}

if(true) {
    let foo = "foooooooooooooo"
    console.log(foo); // output: foooooooooooooo
}

console.log(foo); // output: foo