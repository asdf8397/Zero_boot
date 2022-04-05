/* 3. 비교 연산자 */

// 이상 / 초과;
// 이하 / 미만;
// 대상 < 비교할 값

const age = 20;

// age가 10미만 일때
if(age < 10) {

}

// 하나를 만들어보자
const age1 = 20;
if(age1 < 10) {
    console.log("나는 아직 청소년이에요")
} else {
    console.log("나는 성인 이므로 군대를 가야한다")
}

// age가 10 초과일때
const age2 = 20;
if(age2 > 10) {
    console.log("나는 성인이므로 대학도 입학하고 군대도 가야합니다")
} else {
    console.log("나는 성인이 아니므로 군대를 안가도 되요")
}

// age가 10 이상 일때
const age3 = 20;
if(age3 >= 10) {
    console.log("아 벌써 성인인가요 대학 입학하네요 신나요")
} else {
    console.log("아 드디어 드디어")
}

// age가 10 이하 일때
const age4 = 20;
if(age <= 10) {
    console.log("아아아아아아 기본에 충실해야합니다")
} else {
    console.log("이것도 좋고 저것도 좋고 그래서 뭐가 좋냐고 다 좋음")
}