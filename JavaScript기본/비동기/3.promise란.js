/* Promise */
// Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다

/** Promise는 다음 중 하나의 상태를 가집니다
 * 대기(pending): 이행하지도, 거부하지도 않은 초기 상태
 * 이행(fulfilled): 연산이 성공적으로 완료됨
 * 거부(rejected): 연산이 실패함
 */

/** 미래에 성공하거나 실패할수 있는 값을 가지는 것
 * Promise.prototype.then() <= 성공(fulfilled)
 * Promise.prototype.catch() <= 실패(rejected)
 */

const promiseResolve = Promise.resolve("성공");
const promiseReject = Promise.reject("실패");

promiseResolve.then(); // output: Promise{fulfilled: "성공"}
promiseReject.then(); // output: promise{rejected: "실패"}