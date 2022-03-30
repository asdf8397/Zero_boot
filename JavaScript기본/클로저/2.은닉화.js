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
console.log(result); // output: a


function privateData() {
    let temp = "a";

    return {
        value: function () {
            return temp;
        },
    };
}

const private = privateData()
console.log(private); // output: { value: [Function: value] }
console.log(private.value()); // output: a
/* console.log(private.value())를 호출하면 private = privateData()를 가리키고
    function privateData() { return { value : function() { return temp;로서 let temp = "a"를 
    지정한 것이 출력이 된다. */

function privateData1() {
    let temp1 = "a";

    return {
        value1: function () {
            return temp1;
        },
        changeValue1: function(newVal1) {
            temp1 = newVal1;
        },
    };
}

const private1 = privateData1();
console.log(private1.value1()); // output: a
console.log(private1.changeValue1("b")); // output: b
console.log(private1.value1()); // output: a


function CounterApp(initValue) {
    let countValue = initValue ?? 0; 
    // 여기서 let countValue = initValue ?? 0;은 initValue에 아무것도 들어오지 않았을 경우 → (??) 0이 들어간다고 해석할수있다. 

    return {
        value: function () { // value: [Function: value] // 여기서 value로 지정한 function()은 value이거 그래서 Function: value
            return countValue;
        },
        increment: function () { // increment: [Function: increment] // 여기서 increment로 지정한 function()은 Function: increment
            return countValue++;
        },
        decrement: function () { // decrement: [Function: decrement] // 여기서 decrement로 지정한 function()은 Function: decrement
            return countValue--;
        },
    };
}

const counter1 = CounterApp(1); // 여기에 들어가있는 숫자는 영향을 받지 않는다.
const counter2 = CounterApp(2); // 여기 들어있는 숫자는 영향을 받지 않는다.
console.log(counter1); 
/** output: 
{
  value: [Function: value],
  increment: [Function: increment],
  decrement: [Function: decrement]
}  
 */
console.log(counter2);
/** output:
{
  value: [Function: value],
  increment: [Function: increment],
  decrement: [Function: decrement]
}
 */

/* CounterApp()은 (1),(2)가 들어가던지간에 함수를 호출하면 CounterApp() 내부의 구성들을 return하게된다
    그리고 CountApp(initValue)에 1,2를 넣던지간에 return에서 특정해서 return하지 않으므로
    출력되는 특정값은 없다 예) 1, 2 이렇게*/

counter1.value();
console.log(counter1.value()); // output: 1
counter2.value();
console.log(counter2.value()); // output: 2

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
// couter1.increment();는 +1이 되서 counter된다.
// 4개니까 +1을 4번하게 되고 결국에는 5가 되서 console.log(counter1.value())하면 5 됨

counter1.value();
console.log(counter1.value()); // output: 5
counter1.value();