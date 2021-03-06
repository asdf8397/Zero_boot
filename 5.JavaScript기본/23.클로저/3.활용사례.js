/* 은닉화 Closure(활용사례) */
buttonElement.addEventListener(
    "click",
    debounce(handleClick, 500),
);

function debounce(func, timeout = 300) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => { func.apply(this, args); },)
    }
}