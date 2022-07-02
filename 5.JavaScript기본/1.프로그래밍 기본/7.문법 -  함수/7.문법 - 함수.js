/* 함수 */
function potato() {
    console.log("안녕하세요");
}
potato(); // output: 안녕하세요

(function potato() {
    console.log("처음 뵙겠습니다");
})();

let func_master = function() {
    console.log("함수를 적용해봤습니다.");
}
func_master(); // output: 함수를 적용해봤습니다.


/* 함수의 return */

function butter(a, b) {
    return a + b;
};
console.log(butter(10, 20)); // output: 30

function butter_price(a, b) {
    let price = a + b;
    return price
};
console.log(butter_price(200, 30)); // output: 230

function butter_price_high(a, b) {
    let price_price = a + b
    return price_price
    console.log(price_price); // 참고 return이 적힌 이후에는 function 내부에서는 console.log()는 작동하지 않는다.
};
console.log(butter_price_high(20,30)); // output: 50
