/* 4. 문자열 병합 */
// name + "word";

function genHello(name) {
    return name + " word";
}
console.log(genHello("아 모르겠다"));


function getHello_new(new_name) {
    return "안녕하세요" + new_name ? new_name : "이름없음" +
    "님 반갑습니다";
}

console.log(getHello_new("Mr Kim")); // output: Mr Kim 출력이 됨 // 우선순위 정해줘야함 제대로 출력이 안되었음
/* 이유는 문자열에서 어떤걸 먼저 해줄지 우선 순위가 없기때문에
  그렇다면 우선선위를 정해줘야함 연산자일때도 우선 순위를 정한 것 처럼
  단, 연산자에선 우선 순위를 정해주지 않아도 연산이 됨 하지만 String문자에선
  연산을 할때 우선순위를 정해줘야함 */


// 과제나 포폴 만들때 이런식의 문법으로 많이 사용이 됨

/* 방법 1번 */
function getHello_new_Second(name_sec) {
    return "안녕하세요 " + (name_sec ? name_sec : " 이름 없음 ") + "님 반갑습니다."
}
console.log(getHello_new_Second());
/* 메모 */
/* 뜻: name_sec ? name_sec : "이름없음" 은 getHello_new_second에 넣어준 것을 name_sec 에 넣어주고 
name_sec ? 에 넣어주지 않으면 name_sec : "이름없음"으로 출력이 된다/*/


/* 방법 2번 */
function getHello_name_new_third(name_third) {
    const resultName = name_third || " 이름없음 "
    return "하이요 " + resultName + " 님 반갑습니다"
}

console.log(getHello_name_new_third("Mr Kim"));

