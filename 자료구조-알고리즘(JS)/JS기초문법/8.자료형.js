// 자료형 종류
// ★ 목적에 따라 특별한 성질이나 정해진 범주를 갖고 있는 데이터의 종류
// ★ 자바스크립트에서는 6가지의 원시 타입 자료형과 1가지의 객체 타입 자료형으로 구성

// // 원시타입
// Boolean: 논리적 값으로 true, false
// null: 존재하지 않거나 유효하지 않은 주소 표시
// undefined: 선언 후 값을 할당하지 않은 변수
// number: 정수, 실수 등의 숫자, 정수의 한계는 (플러스마이너스 2에 53승)
// String: 빈 문자열이나 글자들을 표현하는 문자열
// symbol: 문자열과 함께 객체 property로 사용, ES6에 추가

// 객체타입
// Object: 두개 이상의 복잡한 개체 저장 기능



// 원시타입에 대해서 자세히 알아보자

// typeof(typeof는 typeof 뒤에 붙는 형식이 어떤 형식인지 확인할때 사용)
// typeof는 인수의 자료형을 반환하는 연산자
// 연산자인 typeof x와 함수인 typeof(x)로 문법 지원

console.log(typeof undefined); // undefined 
console.log(typeof 123); // number
console.log(typeof 456n); // bigint
console.log(typeof true); // boolean
console.log(typeof "hello"); // string
console.log(typeof Symbol("id")); // symbol
console.log(typeof Math); // object
console.log(typeof null); // object null인 이유는 구 버전과의 호환성때문에 null은 object로 나두고 있다.
console.log(typeof console.log); // function

let str = "hello world";
console.log(typeof str);


// Boolean
// boolean은 논리적인 값을 표현하는 자료형
// 참인 true와 거짓인 false, 두가지 값만 존재
// 주로 조건문 등에서 동작 판단의 기준으로 사용

let name_check = true; // 네, name 입력이 확인되었습니다
let age_check = false; // 아니요, age 입력이 확인되지 않았습니다
let value_check = 10 > 3; // 비교 결과 참 -> 참
console.log(value_check);
console.log(name_check);
console.log(age_check);

// null & undefined
// null
// ★ null은 값이 비어 있다는 의미로 표현되는 자료형
// ★ 존재하지 않는(nothing), 비어있는(empty), 알수없는(unknown)값을 나타내는데 사용

console.log(typeof null); // output: object ← 하위 버전 호환성으로 object표기

const null_check = null;
console.log(null_check === null); // output: true

// undefined
// undefined는 값이 할당되어 있지 않은 상태를 타나낼 때 사용되는 자료형
// 변수 선언 후 초기화 하지 않는다면, undefined가 자동으로 할당
let name; // 할당 후 초기화 하지 않음
console.log(name); // output: undefined