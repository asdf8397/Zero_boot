const squidMembers = ["기훈", "상우","일남","준호","새벽","알리"];
console.log(squidMembers); // ["기훈","상우","일남","준호","새벽","알리"];

/** 배열 끝에 요소 추가
 * 배열의 끝에 .push("")를 이용해서 요소를 추가함,, 추가한 요소는 배열 마지막에 들어감
 */
squidMembers.push("덕수");
console.log(squidMembers); // ["기훈","상우","일남","준호","새벽","알리","덕수"]

/** 배열의 앞에 요소 추가
 * .unshift("")를 통해 넣은 요소는 배열의 순서에서 제일 앞에 들어감
 */
squidMembers.unshift("미녀");
console.log(squidMembers); // ["미녀","기훈","상우","일남","준호","새벽","알리","덕수"]

/** indexOf
 * indexOf는 배열의 순서를 0부터 count하는 것이 아니라 1부터 count하게 된다.
 */
console.log(squidMembers.indexOf("상우"));// 2 ,,,, 배열에서 2번째 자리
console.log(squidMembers.indexOf("기훈")); // 1 ,,,, 배열에서 1번째 자리
console.log(squidMembers.indexOf("현우")); // -1 ,,,, 배열에 없는 값을 indexOf로 알아볼땐 -1 처리함
console.log(squidMembers.indexOf("성운")); // -1 ,,,, 배열에 없는 값을 indexOf로 알아볼떈 -1 처리함
console.log(squidMembers.indexOf("일남")); // 3 ,,, 배열에서 3번째 위치함
console.log(squidMembers.indexOf("준호")); // 4 ,,, 배열에서 4번째 위치함
console.log(squidMembers.indexOf("새벽")); // 5 ,,,, 배열에서 5번째에 위치함

/** .lastIndexOf()
 * lastIndexOf()는 배열의 순서에서 lastIndexOf() 배열의 마지막을 기준으로 순서대로
 * 있는 값을 순서대로 출력하게 된다.
 */

// 왜이렇게 나오는지 모르겠음 사실 ,,,, 조금 더 봐야함
//const squidMembers = ["기훈", "상우","일남","준호","새벽","알리"];
console.log(squidMembers.lastIndexOf("기훈")); // 1
console.log(squidMembers.lastIndexOf("알리")); // 6

/** .includes()는 배열에서 쇼오 포함 여부 확인
 * .includes() 기능을 활용해서 배열 안에 있으면 true, 없으면 false를 반환
 */
console.log(squidMembers.includes("미녀")); // true
console.log(squidMembers.includes("기훈")); // true
console.log(squidMembers.includes("상우")); // true
console.log(squidMembers.includes("미미미")); // false


console.log("");
let number_count = ["일","이","삼","사","오","육","칠","팔","구","십"];
console.log(number_count);

/** .shift()
 * 배열의 제일 첫번째를 지우기
 * .shift()는 배열의 첫번째부터 지우기
 * .shift()의 괄호안에 지정한 배열을 지우고 싶어도 배열의 앞에서 순서대로 지우게 됨
 * console.log(number_count.shift()) => 제일 첫번째 값 "일"만 따로 뺴서
 * 출력하게 된다.
 * number_count.shift() 이후에 console.log(number_count)를 출력해보면
 * .shift()를 통해 빠져나온 배열의 value값을 제외한 전체가 출력된다.
 */

console.log(number_count.shift()); // "일"이라는 배열이 삭제됨
console.log(number_count.shift("오")); // 이렇게 지정해도 지워지지 않음 "이"라는 배열이 지워짐

/** .pop()
 * 배열의 제일 마지막부터 지우기
 * .pop()의 괄호안에 지정한 배열의 value값이 있어도 배열은 끝단부터 순서대로
 * 지우게 된다.
 * number_count.pop();은 배열의 마지막인 "십"만 뺴서 출력하게 된다.
 * .pop()을 진행한 후 전체 배열을 출력해보면 배열에서 빠진 배열만 제외한 나머지
 * 배열 전체가 출력된다.
 */
console.log(number_count.pop());
console.log(number_count.pop());

let New_array = ["rain","windy","typhoon","snow","hail"];
/** .splice()
 * 배열에서 특정 index요소 제거
 * .splice(start, deleteCount);
 * 여기서 start: 어디부분을 제거할 것인지
 * deletecount: 몇개를 지거 할것인지
 *
 * console.log(New_array.splice(2,1));의 결과는 .splice로 잘라낸
 * typhoon을 출력하게 되는 것
 * 만약 .splice()로 typhoon을 잘라냈으면 전체적으로
 * console.log(New_array);를 했을때 배열에서 typhoon의 string은
 * 제거 되어있어야 한다.
 */

console.log(New_array.splice(2,1));
// 제거된 값을 출력 ,,,, typhoon
console.log(New_array.splice(0, 1));
// 제거된 값을 출력 ,,,, rain
console.log(New_array); // windy, snow, hail