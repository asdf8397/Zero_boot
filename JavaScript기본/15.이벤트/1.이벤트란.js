/* HTML을 JS에서 사용해보자 */

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function() {
    alert("안녕하세요");
});

/*
해석해보면 resetButton의 버튼을 누르면(addEventListener)하면 ("click"하면 function() {
    alert("안녕하세요") 알림이 울린다 "안녕하세요"라고
})
*/