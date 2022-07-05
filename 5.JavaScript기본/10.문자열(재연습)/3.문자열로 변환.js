/* 문자열로 변환 */

// Number를 string으로 변환
String(123);
String(undefined);
String(null);
String({});
String({ name: "jang"});
String([1,2,3]);
console.log(String(123));
console.log(String(undefined));
console.log(String(null));
console.log(String({}));
console.log(String({name: "jang"}));
console.log(String[1,2,3]);
JSON.stringify([123]);
JSON.stringify({name: "jang"});

// JSON.stringify() number에서 string으로 변환
console.log(JSON.stringify([123]));
console.log(JSON.stringify({name:"jang"}));

/** Number => String, stringify로 변환
 * string과 stringify는 같음
 */
console.log(String(123)); // string형식의 123
console.log(String(undefined)); // string형식의 undefined
console.log(String(null)); // string형식의 null

/* toString(); Number => String타입으로 변환할 수 있음 */
/* 다양한 곳에서 사용가능 */
["1", 123].toString();
console.log(["1", 123].toString());
["2", 234];
console.log(["2",234].toString());

/** String과 JSON.stringify()의 차이
 * 차이가 있다면 JSON.stringify()와 string()은 괄호 안에 변형
 * 해줄 것을 담아서 직접 변형을 해줘야한다.
 * 하지만 toString()은 기존의 값이 있고 이것을 호출하는 형식으로
 * 불러내서 변형해주는 것이다.
 * 
 * toString()은 다양한 곳에서 사용가능,,, 사용의 폭이 넓음
 */

let test = 101;
console.log(JSON.stringify(test)); // String 형식의 101
console.log(String(test)); // String 형식의 101
console.log(test.toString()); // String 형식의 101