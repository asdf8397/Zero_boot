/* Falsy */

/** Falsy
 * if(false)
 * if(null)
 * if(undefined)
 * if(0)
 * if(-0)
 * if(0n)
 * if(NaN)
 * if("")
 */

if(false) {
    console.log("falsy test 1번")
} else {
    console.log("안녕하세요 falsy입니다 1번")
}

if(null) {
    console.log("안녕 falsy입니다 2번")
} else {
    console.log("안녕하세요 falsy입니다 둘다되네요 2번")
}

if(undefined) {
    console.log("안녕하세요 3번")
} else {
    console.log("안녕 falsy 3번")
}

if(0) {
    console.log("안녕 FFFFfalsy4번")
} else {
    console.log("안녕 falsy 4번")
}

if(-0) {
    console.log("안녕하세요 Falsy 5%%% 입니다")
} else {
    console.log("안녕하세요 falsy입니다 5번입니다 확인!!!!!!!")
}

if(0n) {
    console.log("안녕하세요 falsy 6번입니다 캬캬캬캬캬ㅑㅋ캬캬캬")
} else {
    console.log("안녕 faFFFsly 6번 !!!!!!!!!!!!!")
}

if(NaN) {
    console.log("안녕하세!!!!!요 falsy 7번")
} else {
    console.log("안녕하세요 falsy 7번 입니다 입니다 입니다")
}

if("") {
    console.log("888번 falsy입니다")
} else {
    console.log("falsy 8888888888888번번번 falsy")
}


const emptyString = 0;

if(emptyString.length === 0) {
    console.log("문자열이 비어있음")
} else {
    console.log("대체텍스트 출력 문자열 출력안되서 else로 출력합니다.")
}

const emptyString_str = ""; // false
if(emptyString_str) {
    console.log("안녕하세요 테스트 출력해봅니다 아마 출력 안될거에욥")
} else {
    console.log("emptyString_str : false라서 else로 출력")
}

const empty_T_String_str = "" // false
if(!empty_T_String_str) { // !empty_T_String_str => true
    console.log("안녕하세요 아마 이건 출력이 될거에요")
}
