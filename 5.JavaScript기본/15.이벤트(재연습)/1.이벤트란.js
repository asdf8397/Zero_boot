/** 이벤트란?
 */

const resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", function () {
    alert("안녕하세요")
});

/** 해석
 * resetButton으로 된 버튼을 누르면 (addEvenListner)하면 ("click"하면
 * function()을 통해서 alert("안녕하세요")의 알람이 울린다.)
 * 그래서 결론적으로 버튼을 누르면 화면에 "안녕하세요"라고 적힌 알람이 뜬다.
 */