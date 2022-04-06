/* 함수 (Function) */
// 특정 일을 처리하는 코드 묶음

/*
function 감자튀김만들기(감자) {
    내용물들 1,2,3,4,5,6

    return 감자튀김(이건 출력하는것)
}
*/

/* 함수 호출
정의한 함수를 실행

감자튀김만들기(감자)
const 감자튀김 = 감자튀김만들기(감자)

 */

/* 함수 */

function potato() {
    console.log("안녕하세요");
}
potato(); // output: 안녕하세요

const poto2 = "potato"
function potato2() {
    return poto2;
}
console.log(potato2()); // potato /// function에서 출력할때 직접 potato를 console.log에 넣어주는 방법
console.log(potato2()); // output: potato
const potatos = "Test_potatos";
function potatos2222() {
    console.log(potatos);
    return potatos;
}
potatos2222(); // output: Test_poatos /// function 내부에 console.log를 해줘서 Test_potatos를 출력하는 방법