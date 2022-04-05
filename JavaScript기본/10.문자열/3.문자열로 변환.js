/* 3. 문자열로 변환 */

// 숫자 문자로 변환
String(123);
String(undefined);
String(null);
String({});
String({ name: "jang" });
String([1, 2, 3]);
JSON.stringify([123]);
JSON.stringify({ name: "jang" });


// Number => String, stringify로 변환
// String과 stringify는 같음
console.log(String(123));
console.log(String(undefined));
console.log(String(null));
console.log({});
console.log({ name: "jang" });
console.log([1,2,3]);
console.log(JSON.stringify([123]));
console.log(JSON.stringify({ name:"jang" }));

// toString(); Number => String타입으로 변환할 수 있음
// 다양한 곳에서 사용가능
["1", 123].toString();
let a = ["2", 234];
console.log(a.toString());
console.log()

/* 단, 차이가 있다면 JSON.stringify()와 String()은 괄호안에 변형해줄 것을 담아서
직접 변형을 해줘야한다,,,, 하지만 toString()은 기존의 값이 있고 이것을 호출형식으로
불러내서 변형해주는 것이다 */
// toString()은 다양한 곳에서 사용가능,,,,, 사용의 폭이 넓음

let test = 101;
console.log(JSON.stringify(test));
console.log(String(test));
console.log(test.toString());