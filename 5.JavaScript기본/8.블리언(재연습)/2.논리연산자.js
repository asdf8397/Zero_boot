/** logical Operator
 * OR - 1 || 2 (또는) 둘중 하나가 true이면 true
 * AND - && (그리고) 둘다 true이면 true
 * NOT - !(부정) 반대 !true일때 false !false일때 true
 */

console.log(true || true); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true || false); // true
console.log("")
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log("")
console.log(!true) // false
console.log(!false) // true

const age = 20;
const isAdult = age > 19;
const isNotAdult = age < 20;
if (isAdult) {
    console.log("나는 성인이다.")
}

if (isNotAdult) {
    console.log("나는 성인이다.")
} else {
    console.log("나는 성인이 아니다.")
}

const age3 = 20;
const genderType3 = "girl";
const isAdult3 = age3 > 19;
const isAdult4 = age3 < 19;
if (isAdult3 && true) {
    console.log("나는 성인이랍니다.")
} else {
    console.log("저는 아직 미성년자입니다.")
}

if (isAdult4 && true) {
    console.log("저는 성인입니다.")
} else {
    console.log(`저는 아직 아리따운 미성년자 ${genderType3} 입니다.`)
}

if (isAdult3) {
    console.log("성인")
} else {
    console.log("미성년자")
}

if (!isAdult3) {
    console.log("성인")
} else {
    console.log("미성년자")
}
if (isAdult3 === false) {
    console.log("나는 성인이라고 맞다면 이거 출력")
} else {
    console.log("아닌가 이거 출력 뿅")
}
if (isAdult3 === true) {
    console.log("나는 성인맞음 이거 출력")
} else {
    console.log("나는 성인 이거 맞아?")
}

// const age3 = 20;
// const genderType3 = "girl";
// const isAdult3 = age3 > 19;
// const isAdult4 = age3 < 19;

if (isAdult3 && true) {
    console.log("나는 성인이라서");
}
if (isAdult3 || false) {
    console.log("과연 출력이 될것인가")
}
if (!isAdult3 || false) {
    console.log("이번에는 출력이 안됨")
}

if (isAdult3 && false) {
    console.log("이것도 당연히 출력이 안되겠쥬")
}

function getName(firstName, lastName) {
    return `저는 ${firstName} ${lastName} 입니다`
};
console.log(getName("장", "현석"));

function getName_test(firstName, lastName) { // firstName값이 출력안됨
    return `저는 테스트중입니다 ${firstName, lastName}`
};
console.log(getName_test("김", "동영"))

/* 출력이 되는 이유 함수에는 함수로 들어와서 return이후 함수로 나가기 때문에
출력에서 함수로 찍어주면 출력이 됨 */

function getName_double(firstName, lastName) {
    console.log(`저는 ${firstName} ${lastName} 입니다`)
};
getName_double("Kim", "Dongyoung");

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
