/* 함수부분 */
// 코딩테스트에 많이 나오는 내용 이렇게 외워야함

function getName_def(firstName, lastName) {
    const fName = firstName === undefined ? "성 없음" : firstName;
    const lName = lastName === undefined ? "이름 없음" : lastName;
    return `저는 ${firstName}${lastName} 입니다.`
}
console.log(getName_def("김", "동영"));

/** getName_def 설명
 * 여기서 ?는 ~일 경우엔이라는 뜻이다.
 * const fName = firstName === undefined ? "성 없음" : firstName;은
 * undefined일때 성 없음을 firstName의 자리에 넣어준다고 지정할 수 있음
 * const lName = lastName === undefined ? "이름 없음": lastName;은
 * undefined일때 이름 없음을 lastName의 자리에 넣어준다고 지정할 것
 */

function getName_def_OR(firstName, lastName) {
    const fName = firstName || "성 없음";
    const lName = lastName || "이름 없음";
    // return `저는 ${firstName}${lastName}입니다.` 출력은 됨
    return `저는 ${fName}${lName}입니다.`
}
console.log(getName_def_OR("이","스타"));
console.log(getName_def_OR(10, 10));

/** or연산자를 이용해서 함수를 만들어보자
 * 단, and연산자로 만들어보면 함수가 정확히 인출되서 나오지 않음
 *
 */