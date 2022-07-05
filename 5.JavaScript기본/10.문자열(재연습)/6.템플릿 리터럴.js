/** 템플릿 리터럴
 * Template Literal
 * 1. 멀티라인(개행)이 자유로움
 * 2. Basic String Formatting => 바관법을 활용 => 표현식 문자열 포함 가능
 * 3. HTML Escaping: 안전하게 사용하도록 도움 (XSS, SQL, Injection)
 *
 * const htmlTemplate = "<div>" + "안녕하세요" + "<div>"
 * body.innerHTML = htmlTemplate;
 *          ↑
 * 이렇게 사용할 경우 해킹에 취약하다.
 */

/* 문자열을 줄 변환 [개행]을 해줄때 불편함이 있다 (ES2015+ 이전) */
const multiLine = "first Line \n last Line";
console.log(multiLine); // \n을 사용해주면 줄바꿈을 사용할 수 있음

function getHello(name) {
    return "안녕하세요 \n" + name + "님 반갑습니다."
};
console.log(getHello("김동영"));

/* ES2015+ 부터는 개행을 편리하게 해줄 수 있다. (ES2015+ 이후) */
function get_New_Hello(name) {
    return `안녕하세요
    ${name}님 만나서 반갑습니다.`
};
console.log(get_New_Hello("김동영"));

/* ES2015+ */
function getDivision(innerText) {

    return`<div>${innerText}</div>`
};
console.log(getDivision("KIM"));


// HTML의 <div></div>를 테그를 JS에서 컨트롤 할 수 있다.
const divTag = getDivision("Song");
body.innerHTML = divTag
