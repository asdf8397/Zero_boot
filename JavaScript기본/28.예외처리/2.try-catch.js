/**
 * try-catch
 */

try {
    x();
} catch (e) {
    // try 에서 에러 발생할 경우 실행되는 구문
    // try에서 발생한 에러를 여기서 잡아준다.
    console.log(e); // [ReferenceError: x is not defined] ← e에서의 에러임
    console.error("에러발생"); // output: 에러발생 // try{x();가 없기때문에 catch에서 실행됨}
}

try {
    y();
} catch (e) {
    console.log(e); // ReferenceError: X is not defined
    console.log("에러발생") // output: 에러발생
} finally {
    // 어떠한 상황에서도 실행됨
    // 여기는 조건에 맞는게 아님 그냥 넣으면 위의 조건이 다 틀리면 여기가 자동적으로 실행됨
}