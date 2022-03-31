/* 비동기와 동기 */
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// console.log(1) => console.log(5)라고 했을 때 순차적으로 1,2,3,4,5 이렇게 적힘

/**
 * 스레드
 * - 강의를 보는 눈
 * - 강의를 듣는 눈
 * 
 * JS는 싱글 스레드 언어 - 하나밖에 실행하지 못한다. 그래서 비동기 개념이 들어오게 된다.
 */

const btn = document.querySelector("button");

// (비동기) 사용자가 버튼을 클릭할때마다 함수를 실행시켜준다.
btn.addEventListener("click", () => {
    alert("You clicked me!");

    let pElem = document.createElement("p");
    pElem.textContent = "This is a newly-added paragraph.";
    document.body.appendChild(pElem);
});

// 실행시키면
console.log("시작 ===");

setTimeout(() => {
    console.log("Set Timeout");
}, 1000);
console.log("종료 ===")

// 결과창에선
/* 시작 ===
    종료 ===
    Set Timeout
    이런식으로 출력이 된다.
*/