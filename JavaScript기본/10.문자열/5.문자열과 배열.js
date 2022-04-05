/* 5.문자열과 배열 */

// 문자열을 배열로 만들 수 있음 split()
"HELLO WORLD".split();
console.log("Hello world".split()); // output: ['Hello world']
console.log("Hello world".split("")); 
/* output: ['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']*/
console.log("Hello, world".split(","));
// output: ['Hello, world']
console.log("He,ll,ow, or, ld".split(","))
// output: [ 'He', 'll', 'ow', ' or', ' ld' ]

// split()는 String문자열을 배열로 만들수있음
/* split()는 split("")는 각각의 Hello world의 String문자를 스펠링 하나씩 떼어내서
    'H','e','l','l','o','w','o','r','l','d' 이렇게 출력하게 된다
    split(",") 이렇게하면 구분지어준 "Hello, World" 에서 구분된다
    ['Hello', 'world']
*/


// 배열을 문자열로 만들 수 있음 join()
console.log("HI JAVASCRIPT WORLD");
console.log("HI, JA, VA, SC, RI, PT WO, RLD");
console.log(["HI", " JA", "VA", "SC", "RI", "PT", " WO", "RLD"].join(""));


// [...] 전개연산자

const hello_world = "Hello JAVASCRIPT WORLD";
console.log(hello_world); // output: Hello JAVASCRIPT WORLD
console.log([...hello_world]);
/* 
output: 
'H', 'e', 'l', 'l', 'o',
' ', 'J', 'A', 'V', 'A',
'S', 'C', 'R', 'I', 'P',
'T', ' ', 'W', 'O', 'R',
'L', 'D'
*/