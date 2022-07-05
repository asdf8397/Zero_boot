/** 문자열과 배열
 * 문자열을 배열로 만들 수 있음 splite()
 */

"HELLO WORLD".split();
/** "Hello WORLD".split();를 분리시켜서 할 수 있음
 * "H","e","l","l","o","W","O","R","L","D"로 잘라서 풀 수 있음
 */
console.log("Hello world".split()); // ['Hello world']
console.log("Hello World".split(""));
// [ 'H', 'e', 'l', 'l','o', ' ', 'W', 'o','r', 'l', 'd']
console.log("Hello, World".split(","));
// [ 'Hello', ' World' ]

/** split()는 String 문자열을 배열로 만들 수 있음
 * split()는 split("")는 각각의 Hello World의 String 문자를
 * 스펠링 하나씩 떼어내서
 * [ 'H', 'e', 'l', 'l','o', ' ', 'W', 'o','r', 'l', 'd']
 * 으로 출력할 수 있다.
 * split(",") 이렇게하면 구분지어준 "Hello, World"으로 출력할 수 있다.
 * ['Hello', 'world']
 *
 */