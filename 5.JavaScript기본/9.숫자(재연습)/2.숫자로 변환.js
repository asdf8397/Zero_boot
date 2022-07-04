/** 2. 숫자로 변환
 * Number() 괄호 안에 것을 number로 변환했을때 어떻게 나올까?
 */
// Number(undefined);
// Number(null);
// Number('');
// Number("string");
// Number(true);
// Number(false);
// Number(3.141592);

const num1 = Number(undefined);
const num2 = Number(null);
const num3 = Number('');
const num4 = Number("string");
const num5 = Number(true);
const num6 = Number(false);
const num7 = Number(3.141592);
 
console.log(num1); // NaN 없는상태
console.log(num2); // 공간안에 비어있는 상태 0
// 코드를 짤때 중요한 점 0으로 넣으면 그 코드가 비어있는 상태로 할 수 있다
// let a = 0;으로 하면 비어있는 상태
console.log(num3); // 0 비어있는 상태
console.log(num4); // NaN Number자리에 string이 오면 NaN으로 표시
console.log(num5); // true 진실이면 1
console.log(num6); // false 거짓이면 0
console.log(num7); // 3.141592 숫자로 표기하니까 그대로 출력

if (1) {
    console.log("true")
} else {
    console.log("false")
};
// if안에 들어가있는 1은 true 진실이라고 받아드려진다 그렇기에 1은 true가 된다.

if (1 == true) {
    console.log("느슨한 로직으로 알고리즘을 구성해봄")
} else {
    console.log("만약 느슨한 로직을 구성했다면 이게 생성되면 나는 else문을 생성할 거야")
};
// if안에 들어가 있는 1은 true인 상태,,,

if (1 === true) { // 느슨하게는 1이 true이지만 엄격하게는 1은 false에 들어간다.ㄴ
    console.log("진실이야")
} else {
    console.log("거짓이야")
}

/** 이렇게 구성할 것 명시적으로 지정후에 if문을 사용할 것
 * 개발할때 헷갈릴 수 있으니 팀 개발에서 주의 할 것
 */
const strNumber = "1111";
if(Number(strNumber) === 1111) {
    console.log("실행")
} else {
    console.log("실행하지 못하면 여기에")
}