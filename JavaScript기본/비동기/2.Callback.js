/* Callback */

console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

console.log("3")

/** output:
 * 1
 * 3
 * undefined (이것은 시간초를 두고 나오기 때문에)
 * 2
 * 이런 순서대로 출력이 된다.
 */


//
[1,2,3].filter(function (ele) {
    console.log(ele);
});
/** output:
 * 1,2,3
 * [1,2,3].filter(function (ele) { console.log(ele) });
 * 여기서 .filter의 function은 돌면서 1,2,3을 출력하게 된다.
 */

Array.prototype.filter = function(Callback) {
    for(let i = 0; i< Array.length; i++) {
        Callback(Array[i]);
    }
}

// 이것을 실행하면
console.log("1");

function setTimeoutwithCallback(CallbackFunc) {
    setTimeout(() => {
        console.log("2");
        CallbackFunc()
    }, 1000);
}

setTimeoutwithCallback(() => console.log("3"))

/** output:
 * 1출력되고 2는 시간초 발동이 걸린다. 그동안 setTimeoutwithCallback(() => console.log("3"))을
 * 호출하게 되는데 setTimeoutwithCallback의 console.log("3")은 
 * function setTimeoutwithCallback(callbackFunc)에 들어가서 CallbackFunc()에 들어가서
 * console.log("2")가 먼저 실행되고 그다음 console.log("3")이 실행됨
 */


const isFilter = function (ele, index, array) {
    console.log(ele);
};

[(1,2,3)].filter(isFilter);

Array.prototype.filter = function(callback) {
    const array = this;

    for(let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

Element.addEventListener("click", (e) => console.log(e));
Element.addEventListener = function(eventType, callback) {
    if(eventType === "click") {
        const clickEventObject = {
            target: {},
        };
        callback(clickEventObject);
    }
}


// 이것을 출력하면
setTimeout(function(){
    console.log("A")

    setTimeout(function() {
        console.log("B")

        setTimeout(function() {
            console.log("C")
        }, 1000)
    }, 1000)
}, 1000)

// setTimeout은 순서대로 function을 돌때마다 A,B,C 순차적으로 실행됨

// 구글검색의 callback hell을 검색하면 장풍을 검색할 수 있음
