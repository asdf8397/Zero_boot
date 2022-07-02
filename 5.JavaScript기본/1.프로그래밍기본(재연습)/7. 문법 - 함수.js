/* 함수 (function) */
// 특정 일을 처리하는 코드를 묶어서 사용할 수 있음

/** return형식의 function 함수의 예시
 * function 감자튀김만들기(감자)  {
 *     내용물들 1,2,3,4,5,6
 *     
 *     return 감자튀김(이건 출력하는 것)
 * }
 *
 * 여기서 말하는 return은 F-12번에 찍어주는 console이 아니라 화면에 찍어주는
 * return을 의미한다.
 */

/* 함수 */

function return_practice() {
    console.log("return 연습중입니다.")
}
return_practice();

// 이거 한번 물어보자
const Name = "Potato";
function Potato_Farmer() {
    return Name
};
Potato_Farmer(); // 이렇게 출력시 console에는 안찍힘 하지만 코테에서는 성립됨
console.log(Potato_Farmer()); // output: Potato
/* 신기한건 Potato_Farmer()이라는 함수안에 return Name으로 외부에 지정한
const Name = "Potato"를 호출했을뿐인데 호출이 되었다는 것 */

// 위와 차이가 뭔가?
function potato_chip_factory() {
    const Name = "Potato_chip"

    return Name
};
potato_chip_factory();
console.log(potato_chip_factory());

