const resetButton = document.querySelector(".reset");
const onReset = function (event) {
    console.dir(event);
};
resetButton.addEventListener("click", onReset)

/*
const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", function(event) {
    console.dir(event);
});
*/
// resetButton.removeEventListener("click", function (event) {
//     console.dir(event);
// })

/** console.dir()
 * 매서드 console.dir()은 지정된 javascript 개체의 속성에 대한
 * 대화형 목록을 표시합니다. 출력은 자식 개체의 내용을 볼 수 있는 펼침
 * 삼각형이 있는 계층적 목록으로 표시됩니다.
 *
 * 즉 console.dir() 개발자가 쉽게 객체의 속성을 얻을 수 있도록 콘솔에서 지정된
 * javascript 개체의 모든 속성을 볼 수 있는 방법입니다.
 *
 * 예시)
 * console.dir("안녕하세요");
 * // '안녕하세요' ... 개체를 자세히 볼 수 있게 묶어놓은 상태라고 하면된다.
 */