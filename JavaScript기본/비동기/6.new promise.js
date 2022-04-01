/* new promise */
/*
console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

console.log("3");

function setTimeoutWithCallback(callbackFunction) {
    setTimeout(function () {
        console.log("2");
        callbackFunction();
    }, 1000);
}

console.log("1");

setTimeoutWithCallback(function () {
    console.log("3");
});
 */             
                //↓

/* new promise로 바꿔서 작성해본다 */

const one = Promise.resolve("1");
const two = Promise.resolve("2");
const three = Promise.resolve("3");

one
    .then((oneRes) => { // one이.then((oneRes))에 들어오고 console.log에 출력되고
        console.log(oneRes)

        return two
    })
    .then((twoRes) => { // two가.then((twoRes))에 들어오고 console.log에 출력 twoRes에 출력되고
        console.log(twoRes);

        return three;
    })
    .then((threeRes) => { // three가.then((threeRes))에 들어오고 console.log에 의해서 출력이되고
        console.log(threeRes);
    })
    .finally(() => console.log("END")); 
    // output: 1,2,3,END

    // finally는 then이던 catch이던 끝에 나온다.
    // 그리고 마지막의 finally는 무조건 실행이 된다.
setTimeout(() => {}, 1000);

/** output:
 * 1
 * 2
 * 3
 */

 one
    .then((oneRes) => {
        console.log(oneRes)

        return two
    })
    .then((twoRes) => {
        setTimeout(() => {
            console.log(twoRes);
        }, 1000);

        return three;
    })
    .then((threeRes) => {
        console.log(threeRes);
    })
    .finally(() => console.log("END"));


// 이부분 잘 모르겠음 다시 한번 봐야할듯
const one2 = Promise.resolve("1");
const two2 = new Promise((resolve) =>
    setTimeout(() => {
        resolve("2");
    }, 2000),
);
const three2 = Promise.resolve("3");

one2
    .then((oneRes) => {
        console.log(oneRes)

        return two2
    })
    .then((twoRes) => {
            console.log(twoRes);

        return three2;
    })
    .then((threeRes) => {
        console.log(threeRes);
    })
    .finally(() => console.log("END"));


const one3 = Promise.resolve("1");
const two3 = (delay) =>
    new Promise((resolve) =>
    setTimeout(() => {
        resolve("2");
    }, delay), // 여기서 2000은 2초이다.
);
const three3 = Promise.resolve("3");

one3
    .then((oneRes) => {
        console.log(oneRes);

        return two3(3000);
    })
    .then((twoRes) => {
        console.log(twoRes);

        return three3;
    })
    .then((threeRes) => {
        console.log(threeRes);
    })
    .finally(() => console.log("END"));


    const starbucks = function(coffeeName) {
        return new Promise((resolve, reject) => {
            if(coffeeName === "아메리카노") {
                resolve("아메리카노 한잔입니다.")
            } else {
                reject("아메리카노는 없습니다.");
            }
        });
    };

    starbucks("아메리카노") 
        // 아메리를 적으면 rej이 되서 아메리카노는 없습니다 감사합니다 출력됨
        // 아메리카노를 적으면 res이 되서 아메리카노 한잔입니다 감사합니다가 출력됨
        .then((res) => console.log(res))
        .catch((rej) => console.log(rej))
        .finally(() => console.log("감사합니다."))