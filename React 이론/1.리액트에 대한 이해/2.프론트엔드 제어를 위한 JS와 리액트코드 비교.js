const dataMap = {
    메일: "메일함을 확인하세요.",
    카페: "즐겨찾는 카페의 새 소식을 확인해보세요.",
    블로그: "오늘을 기록해보세요.",
};

function clickTabItem(e) {
    const key = e.target.innerHTML;
    const contentEl = document.querySelector(".tab_content");
    contentEl.innerHTML = dataMap[key];
}
/* 한가지 메모 */
// ()는 HTML의 코드를 가져와서 JS에 뿌려줄때 사용함
// []는 JS의 내부에 있는 것을 JS의 내부에 값을 JS의 다른 element안에 넣어서 적용해 줄때 사용하게 함
function initializeTab() {
    const initialKey = "메일";
    const initialValue = dataMap[initialKey];
    const contentEl = document.querySelector(".tab_content_wrapper");
    const pEl = document.createElement("p");
    pEl.classList.add("tab_content");
    pEl.innerHTML = initialValue;
    contentEl.appendChild(pEl);

    const tabs = document.querySelectorAll(".tab_item");
    tabs.forEach((tab) => tab.addEventListener("click", clickTabItem));
}

initializeTab();