/* promise resolve */

// 웹 console에서 실행했을때 output의 내용들임
const promiseResolve = Promise.resolve("성공");
const promiseReject = Promise.reject("실패");

console.log(promiseReject.then()); // output: 실패
console.log(promiseResolve.then()); // output: 성공

/* 기본적으로 resolve는("성공") reject("실패")로 지정 되어 있음
const promiseResolve = Promise.resolve("성공");
const promiseReject = Promise.reject("실패");
*/
promiseResolve
    .then((resolve) => {
        console.log("1회" + resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log("2회" + resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log("3회" + resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log("4회" + resolve);
        return promiseResolve;
    });
/** output:
 *  1회 성공
 *  2회 성공
 *  3회 성공
 *  4회 성공
 */
/* 처음의 1회 성공하면 2회 성공 3회 성공 4회 성공으로 나온다. */