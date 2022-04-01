/* async & await */

/* await */
/* await 연산자는 Promise를 가디리기 위해 사용됩니다. 연산자는 async function 내부에서도
사용할 수 있습니다. */

const starbucks = function (coffeeName) {
    return new Promise((resolve, reject) => {
        if (coffeeName === "아메리카노") {
            resolve("아메리카노 한잔입니다.");
        } else {
            reject("아메리카노는 없습니다.");
        }
    });
}; // output: 아메리카노 한잔입니다.

starbucks("아메리")
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej))
    .finally(() => console.log("감사합니다.")); // 아메리카노는 없습니다라고 출력하고 finally는 무조건 출력되는데 감사합니다로 출력됨
/* output: 아메리카노는 없습니다.
    output: 감사합니다*/

/*
async function americano() {
    const result = await starbucks("아메리카노");

    return result;
}
americano()
*/

async function americano(someDrink) {
    try {
        const result = await starbucks(someDrink);

        return result;
    } catch (error) {
        console.log(error);
    } finally {
        console.log("감사합니다");
    }
}

americano("아메리카노");