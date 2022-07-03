let variable; // 선언
variable = "string Value"; // 할당

const initValue = "초기화된 변수"; // 변수 선언과 동시에 할당
console.log(initValue);

const initValue2 = null; // initValue2를 null로 지정 선언되었지만 비어져 있음
console.log(initValue2);
const initValue3 = undefined;
console.log(initValue3); // undefined는 비워둘때 사용 근데 null고 사용방법은 다름

// variable undefined & initValue null은 다름

console.log(!undefined); // true
console.log(!!undefined); // false
console.log(!null); // true
console.log(!!undefined); // false

// undefined 와 null 비교 그렇게 많이 중요하지 않음
// 그것보다 더 중요한건 느슨한 == 엄격한 === 이 더욱 중요함

// 완벽히 다르지만 == 느슨한것과 === 엄격한 것의 boolean은 다르게 나옴
console.log(undefined === null); // false
console.log(undefined == null); // true

console.log(!undefined === !null); // true
console.log(!!undefined == !!null); // true

/* JS에서 Number로 명시적으로 형변환을 했을때 undefined는 NaN이 나오지만
null은 0이 나옴 이유는 JS가 느슨하기 때문에 */

console.log(Number(undefined)); // NaN
console.log(Number(null));// 0