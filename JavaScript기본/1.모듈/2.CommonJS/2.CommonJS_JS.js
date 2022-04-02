/* CommonJS (Import) */
// 현재의 CommonJS_JS에서 CommonJS를 실해하고 싶을때 코드들

const Person = require("./2.CommonJS"); // CommonJS에서 보낸 것을 CommonJS_JS에서 받을 때 require을 이용하게 된다.
const me = new Person("jang", 10, "korea");
const you = new Person("kim", 20, "china");

console.log(me.getName()); // output: jang입니다.
console.log(you.getName()); // output: kim입니다.

/* me.getName()과 you.getName()에 대해서 설명하면
    CommonJS의 function Person을 module.exports = Person에 넣은후
    CommonJS_JS에서 이것을 const Person = require("./2.CommonJS")에서 받아주고
    이것을 const me = new Person("jang", 10, "korea"), const you = new Person("kim", 20, "china")로 받아주면 적용이됨*/