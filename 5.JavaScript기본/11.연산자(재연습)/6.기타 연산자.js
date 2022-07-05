/** 연산자
 * 콤마 연산자는 식을 이어주는 역활을 합니다.
 * 좀더 풀어보자면 별개의 두 문장을 한 문장으로 이어지게 해줍니다.
 */
/* 기타 연산자 */
let a = (123456, "ABC", false);
console.log(a); // 마지막 false만 출력
console.log(123456, "ABC", false); // 123456, "ABC", false 출력

let test = (123456, "ABC");
console.log(test); // ABC ,,, ABC만 출력 됨
console.log(123456, "ABC"); // 123456, ABC

/** onclick: url을 넣기 위해서 void를 사용하게 된다.
 * void는 link를 연결할때 사용하기 위해서 void를 사용하게 된다.
 */

void 1;
void 0;
void 10 + 10;
console.log(void 1); // undefined
console.log(void 0); // undefined
console.log(void 10 + 10); // NaN