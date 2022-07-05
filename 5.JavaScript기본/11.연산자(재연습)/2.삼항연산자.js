/** 삼항 연산자
 * 3개의 피연산자, 조건 연산자
 */

// const val = (if) ?(일떄) true: false
// const val = if ? true: false;
// const Val = (조건) ? 참일떄: 거짓일때;

/** if문 ex)
 * if(조건) {
 *      console.log("참일때")
 * } else {
 *     console.log("거짓일때")
 * };
 */

if (true) {
    console.log("print true")
} else {
    console.log("print false")
};

if (false) {
    console.log("print false")
} else {
    console.log("print false")
};

/** 조건문을 간단히 사용할 수 있음 프로젝트나 코테에서 많이 사용함
 * const older_age = 21;
 * const isAdult = older_age > 20 ? "성인" : "미성년자";
 * console.log(isAdult); //성인
 *
 * const younger_age = 15;
 * const is_young = younger_age > 20 ? "성인" : "미성년자";
 * console.log(is_young); // 미성년자
 *
 * 여기서 메모
 * "성인" : "미성년자" 여기서 "성인"(true 자리) : "미성년자" (false 자리)
 */

const older_age = 21;
const is_Adult = older_age > 20 ? "성인" : "미성년자";
console.log(is_Adult); // 성인

const younger_age = 15;
const is_teenager = younger_age > 20 ? "성인" : "미성년자";
console.log(is_teenager);
