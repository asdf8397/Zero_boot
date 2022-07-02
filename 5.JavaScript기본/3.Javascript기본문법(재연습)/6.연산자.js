/* 연산자 */
// 값의 연산을 위한 사용되는 부호
// 연산의 대상이 되는 피연산자
// 연산을 부호로 표현하는 연산자

/** 연산자(Operator)
 *  = (할당 연산자)
 *  == (비교 연산자)
 *  + (산술 연산자)
 *  & (비트 연산자)
 *  && (논리 연산자)
 */

/** 비교 연산자
 * 동등(==) 피연산자 서로 같으면 true를 반환합니다.
 * 부등(en_US) (!=) 피연산자가 서로 다르면 true를 반환합니다.
 * 일지(en_US) (===) 두 피연산자 값과 타입이 모두 같은 경우 true를 반환합니다.
 *
 * 불일치(en_US) (!==) 피연산자의 값 또는 타입이 서로 다를 경우 true를 반환합니다.
 * 큼(en_US) > 왼쪽 연산자가 오른쪽 연산자와 같거나 크면 true를 반환합니다.
 * 크거나 같음(en_US) >= 왼쪽 연산자가 오른쪽 연산자와 같거나 크면 true를 반환합니다.
 * 작음(en_US) < 왼쪽 연산자가 오른쪽 연산자보다 작으면 true를 반환합니다.
 */

/** 검사 척도
 *  === 서로 같은지 엄격하게 검사
 *  == 서로 같은지 느슨하게 검사
 *  != 서로 다른지 느슨하게 검사
 *  !== 서로 다른지 엄격하게 검사
 */

/* 산술 연산자 */
let count = 0;
// count += 1; 1을 더해주고 양쪽에 변수와 같이 있으므로 이항연산자이다.
count ++; // 양쪽에 변수 값이 없으므로 단항연산자이다. (증가 연산자)
console.log(count)
count --; // 단항연산자 (감소 연산자)
console.log(count)

/* 논리 연산자 */
// 완전 중요하다 제일 중요하게 사용된다.
// &&은 둘다 true이면 true이다 하나라도 false이면 false이다.
// 둘다 참이면 true 그 외에는 false로 반환한다.


/* and 연산자 && */
let a1 = true && true;
let a2 = true && false;
let a3 = false && true;
let a4 = false && 3===4;
let a5 = true && 3===3;
let a6 = false && 3===3;
let a7 = "CAT" && "DOG";
let a8 = false && "CAT";
let a9 = "CAT" && false;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);

/* or연산자 || */
let or_a1 = true || true;
let or_a2 = true || false;
let or_a3 = false || true;
let or_a4 = false || 3===4;
let or_a5 = false || 3===3;
let or_a6 = "CAT" || "DOG";
let or_a7 = false || "CAT";
let or_a8 = "CAT" || false;
console.log(or_a1); // output: true
console.log(or_a2); // output: true
console.log(or_a3); // output: true
console.log(or_a4); // output: false
console.log(or_a5); // output: true
console.log(or_a6); // output: CAT
console.log(or_a7); // output: CAT
console.log(or_a8); // output: CAT


/* 논리 NOT !==, !=, 반대되는 값 */
let not1 = !true;
let not2 = !false;
let not3 = !"CAT";
console.log(not1); // output: false;
console.log(not2); // output: true;
console.log(not3); // output: false;
