/* 2. 숫자로 변환 */
/* Number() 괄호안에 것을 nuber로 변환했을때 어떻게 나올까?
Number(undefined);
Number(null);
Number('');
Number("string");
Number(true);
Number(false);
Number(3.141592);
*/

const num1 = Number(undefined);
const num2 = Number(null);
const num3 = Number('');
const num4 = Number("string");
const num5 = Number(true);
const num6 = Number(false);
const num7 = Number(3.141592);

console.log(num1); // output: NaN // undefined는 아예 비어있는상태 그래서 NaN
console.log(num2); // output: 0 // null은 빈공간을 둔 상태 그래서 0
console.log(num3); // output: 0 // null 비어있는 상태
console.log(num4); // output: NaN 
console.log(num5); // output: 1
console.log(num6); // output: 0
console.log(num7); // output: 3.141592
// Not a number => 줄여서 NaN으로 표기한다

// if문에서 1은 true이다 그래서 느슨한 로직으로 if문을 사용할수있는데 주의할 것
if (1) {
    console.log("안녕하세요");
} else {
    console.log("안녕히계세요");
}

if(1 == true) { // 이렇게 사용하지 말것 == 느슨한 로직말고 === 엄격한 로직을 사용할 것
    console.log("느슨한 로직으로 알고리즘을 구성해봄")
} else {
    console.log("만약에 느슨한 로직을 구성했는데 이게 생성되면 나는 else문을 생성한 것");
}

/* 이렇게 구성할것 명시적으로 지정후에 if문을 사용할 것
개발할때 헷갈릴 수 있으니 팀 개발에서 주의 할 것 */
const strNumber = "1111";

if(Number(strNumber)) {
    "실행"
}