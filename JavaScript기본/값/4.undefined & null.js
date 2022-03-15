let variable; // 선언방식
variable = "string value"; // 할당

const initValue = "초기화된 변수"; // 선언과 동시에 할당

const initValue2 = null; // null을 지정한다(따로 null을 지정) 비어둘때
const initValue3 = undefined; // undefined 지정 비워둘때 일부러 넣어서 지정

// variable undefined
// initValue null

console.log(!undefined); // true
console.log(!!undefined); // false

console.log(!null); // true
console.log(!!null); // false

// undefined 와 null비교 그렇게 많이 중요하지 않음
// 느슨한 언어이므로 === 엄격하게 검사했을땐 false이지만 == 느슨하게 하면 true 나옴
console.log(undefined === null); // false
console.log(undefined == null); // true 
console.log(!undefined === !null); // true
console.log(!!undefined === !!null); // true

// JS에서 Number로 명시적으로 형변환을 했을때 undefined는 NaN이 나오지만 null은 0이 나옴
// 이유는 JS가 느슨하기 때문에
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0