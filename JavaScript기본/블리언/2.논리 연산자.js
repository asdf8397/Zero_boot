/**
 * - Logical Operator (논리 연산자)
 * OR - 1 || 2 (또는) /// 둘중 하나가 true이면 true
 * AND - && (그리고) //// 둘다 true일때 true
 * NOT - ! (부정) /// 반대 !true일때 false,, !false일때 true
 */

console.log(true || true); // output: true
console.log(false || true); // output: true
console.log(false || false); // output: false

console.log(true && true); // output: true
console.log(false && true && true); // output: false
console.log(false && false); // output: false

console.log(!true); // output: false
console.log(!false); // output: true

const age = 20;
const isAdult = age > 19;

if(isAdult) {
    console.log("나는 성인이다!!")
};

const age2 = 20;
const genderType2 = "Girl";

const isAdult2 = age2 > 19;
const isGirl2 = genderType2 === "Girl";

if(isAdult2) {
    if(genderType2 === "Girl") {
        console.log("나는 성인이다2");
    } else {
        console.log("나는 성인이 아니라 아직 청소년입니다")
    }
}

const age3 = 20;
const genderType3 = "girl";
const isAdult3 = age > 19;
const isGirl3 = genderType3 === "girl";

if (isAdult3 && true) {
    console.log("나는 성인이랍니다!!")
}

if (!isAdult3) { // ! 부정 연산자를 이용해서 false로 해서 출력이 안되게 할 수 있다
    console.log("나는 성인이 아닙니다")
}

if (isAdult3 === false) {
    console.log("나는 성인이 아닙니다 하하하하하");
}

if (isAdult3 && isGirl3) {
    console.log("나는 성인이라서 행복해요 아니 잘못 말했네요! ㅋㅋ")
}

if (isAdult3 || false) {
    console.log("나는 성인이 아니지만 성인이 되고싶어요")
};

if (!isAdult3 || isGirl3) {
    console.log("나는 여성이랍니다 아니 소녀입니다")
};

if (isAdult3 && false) {
    console.log("안녕하세요 이건 출력이 안되나 봅니다 and 연산자중 하나가 false여서")
};

function getName(firstName, lastName) {
    return '저는' + firstName + ' ' + lastName + "입니다";
}

console.log(getName("장", "현석"));


function getName_Def(firstName, lastName) {
    const fName = firstName === undefined ? "성 없음" : firstName;
    const lName = lastName === undefined ? "이름 없음" : lastName;
    return '저는' + firstName + lastName + "입니다";
    // 여기서 ?는 ~일 경우엔이라는 뜻이다.
    /**
     * const fName = fistName === undefined ? "성 없음" : firstName;은
     * undefined일때 성 없음을 firstName의 자리에 넣어준다라고 지정한것
     * const lName = lastName === undefined ? "이름 없음" : lastName;은
     * undefined일때 이름 없음을 lastName의 자리에 넣어준다라고 지정한것
     */
}
console.log(getName_Def("","현석",));


// or 연산자를 이용해서 함수 만들어보기
function getName_Def_Re(firstName, lastName) {
    const fName = firstName || "성 없음";
    const lName = lastName || "이름 없음";

    /**
     console.log(!!undefined); // output: false
     or연산자에서 "성없음" , "이름없음"은 true이다
     
     const fName = firstName || "성 없음"; 일때 fistName은 false이어서 "성없음"이
     true이므로 fName, lName에 담겨서 return되고 이것은 getName_Def_Re에 의해서 
     console.log 빈칸에 들어가서 출력이 되게된다.
     */
    
    return "저는" + fName + ' ' + lName + "입니다";
}
console.log(getName_Def_Re("", "현석"));