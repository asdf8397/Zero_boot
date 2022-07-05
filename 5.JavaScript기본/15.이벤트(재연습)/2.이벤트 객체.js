const resetButton = document.querySelector(event);

resetButton.addEventListener("click", function (event) {
    alert("안녕하세요")
});
console.log(event);

/** 설명
 * 이벤트 객체에 대한 설명입니다.
 * resetButton = document.querySelector(event);가 실행된다.
 *  ↑ resetButton을 누르면 event가 실행된다는 코드이다.
 *  
 *  실제 실행되게 하는 코드
 *  resetButton.addEventListener("click", function(event) {
 *      alert("안녕하세요")
 *  });
 *  resetButton이라는 addEventListener가 click했다는 것을 function에게
 *  event를 실행하라고 알린다. 그러면 alert("안녕하세요")라고 실행된다.
 */