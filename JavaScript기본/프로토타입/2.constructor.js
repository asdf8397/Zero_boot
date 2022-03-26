/* constructor */

/** constructor(생성자)
 * 
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const jang = new Person("jang", 99);
const hs = new Person("hs", 11);
console.log(jang); // output: name: jang, age: 99
console.log(hs); // output: name: hs, age: 11

// 생성자 함수를 가지고 있으므로 어디서 어디까지 만들었는지 무엇이 들어갔는지 확인할수있다.
const knowledge = jang instanceof Person;
const knowledge2 = hs instanceof Person;
console.log(knowledge); // output: true // instanceof로 확인했을때 person에 들어가니까 true
console.log(knowledge2); // output: true // instanceof로 확인했을때 person에 들어가니까 true