/* 프로토타입 */

// 상속과 프로토타입
/*
ES2015부터 class 키워드를 지원하기 시작했으나, 문법적인 양념일 뿐이며 JS는 여전히
프로토타입 기반의 언어이다.

상속 관점에서 JS의 유일한 생성자는 객체뿐이다. 각각의 객체는 Prototype이라는 은닉(private)속성을
가지는데 자신의 프로토타입이 되는 다른 객체를 가리킨다. 그 객체의 프로토타입 또한 프로토타입을
가지고 있고 이것이 결국 null을 프로토타입으로 가지는 오브젝트에서 끝난다
null은 더이상 프로토타입이 없다고 정의되며 프로토타입 체인의 종점 역활을 한다
*/

// console.dir(str.prototype); // undefined
console.dir(str.__proto__); // string
console.dir(num.__proto__); // number
console.dir(bool.__proto__); // Boolean
console.dir(obj.__proto__); // Object
console.dir(array.__proto__); // Array

/*
JS에 무엇을 만들던지 JS는 Prototype기반의 언어이다.
프로토타입을 알지 못해도 JS를 이용할 수 있다.
*/