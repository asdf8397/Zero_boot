/* Closure 은닉화 */

(function () {
    var a = "a"
    console.log(a); // output: a
            // ↑ 
            // 내부에서 console.log(a)로는 접근할 수 있다.
})();//← 이것은 호출      
// console.log(a); ← // var a = "a"는 외부적으로 접근할 수 없음


function a() {
    let temp = "a";

    return temp;
}
const result = a();
console.log(temp); // output: a