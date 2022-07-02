/* promise reject */

const promiseResolve = Promise.resolve("성공");
const promiseReject = Promise.reject("실패");

// 결과는?
promiseResolve
    .then((resolve) => {
        console.log("1회" + resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log("2회" + resolve);
        return promiseReject; 
        /* resolve가 성공인데 return에서 실패가 들어왔기때문에
            이후로는 실패가 된다. */
    })/*
    .then((resolve) => {
        console.log("3회" + resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log("4회" + resolve);
        return promiseResolve;
    });
    나오지 않고 실패로 뜸*/ 


// 결과는?
promiseResolve
    .then((resolve) => {
        console.log("1회" + resolve);
        return promiseResolve;
    })
    .then((resolve) => {
        console.log("2회" + resolve);
        return promiseReject; 
        // 위에선 promiseResolve로 resolve가 들어가서 promiseResolve가 받아야되는데 promiseReject가 받음 그래서 실패 오류발생
    })
    .catch((reject) => {
        console.log("3회 실패" + reject);
        return promiseResolve;
        // 하지만 .catch로(reject를 받아서 reject하고 promiseResolve로 받으면.... 잘 모르겠음 공부 더 해야함)
    })
    .then((resolve) => {
        console.log("4회" + resolve);
        return promiseResolve;
    });

/** output:
 * 1회 성공
 * 2회 성공
 * 3회 실패 실패
 * 4회 성공
 */