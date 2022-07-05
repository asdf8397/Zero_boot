/* 문자열 병합 */
function getHello(name) {
    return `${name} World`;
}
console.log(getHello("JavaScript"));
let input = getHello("Java");
console.log(input);

function New_getHello(name) { // 잘못된 코드
    // return `안녕하세요 ${name ? name:} 이름없음 님 반갑습니다.` 이렇게는 사용 안됨
    return "안녕하세요" + name ? name: + "이름없음님 반갑습니다.";
}
console.log(New_getHello("Mr Kim"))
/* name ? name: 이라는 것은 name에 들어오면 ? 다른 name에 넣어서 반환
* 해야하는데 들어가는 값이 같음 예를들어 name ? me: 이렇게 해줘야함 */

/** 과제나 포트폴리오 또는 코테에서 많이 사용되는 문법
 */
/* 방법 1번 */
function get_function_num(name_sec) {
    return `안녕하세요 ${(name_sec ? name_sec : "이름없음")}님 반갑습니다.`
}
console.log(get_function_num("Y"));
// 안녕하세요 Y님 반갑습니다.
console.log(get_function_num());
// 안녕하세요 이름없음님 반갑습니다.

function get_function_Num1(name_sec) {
    return `안녕하세요 ${name_sec ? name_sec : "이름없음"}님 반갑습니다.`
}
console.log(get_function_Num1()); // 아무것도 안들어가면 "이름없음" 출력
console.log(get_function_Num1("k"));
// 안녕하세요 k님 반갑습니다.

function Get_function_Num2(name_sec) {
    return "안녕하세요" + (name_sec ? name_sec: "이름없음") +"님 반갑습니다."
};
console.log(Get_function_Num2("J"));
// 안녕하세요 J님 반갑습니다.
console.log(Get_function_Num2());
// 안녕하세요 이름없음님 반갑습니다.
/** 해설
 * name_sec ? name_sec: "이름없음"을 반환
 * name_sce의 값이 있다면 그 값을 반환하고
 * name_sec의 값이 없다면(?) 그 값을 name_sec:"이름없음"의 값을 받아서
 * 반환해주세요 라는 뜻
 */

/* 방법 2번 */
function get_Hello_name_OR(input) {
    const resultName = input || "이름없음";
    return "하이요" + resultName + "님 반갑습니다."
}
console.log(get_Hello_name_OR());
console.log(get_Hello_name_OR("Lee"));

function get_Hello_OR_Num2(input) {
    // return "하이요" + (input ? input || "이름없음") + "님 반갑습니다.";
    // ↑ 에러발생
    return "하이요" + (input || "이름없음") + "님 반갑습니다.";
}
console.log(get_Hello_OR_Num2("Park")); 
console.log(get_Hello_OR_Num2());

function get_Make_num3(input) {
    return `하이요 ${(input || "이름없음")}님 반갑습니다.`
}
console.log(get_Make_num3("B")); // 하이요 B님 반갑습니다.
console.log(get_Make_num3()); // 하이요 이름없음님 반갑습니다.