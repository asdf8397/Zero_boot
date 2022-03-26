/** 프로토타입 체인
 */

{
    const a = "outer";
    {
        console.log(a); // output: outer
    }
}

[1,2,3]
.sort((a,b) => a-b)
.filter((e) => typeof e === "number")
.map((e) => e = "EA");
// .sort, .filter, .map 계속 이어지는 것을 체이닝이라고 한다.

const animal = {
    sayName() {
        return "Animal";
    },
};

const dog = Object.create(animal);
let a = dog.sayName();
console.log(a); // output: Animal
/* dog객체의 element Object에 .create 체이닝으로 animal객체를 담고
    dog객체에 animal이 담겨져있는 상태에서 .sayName()을 체이닝으로 연결해서
    sayName()의 값을 return "Animal"로 받는다 이것을 let a를 통해서 console.log
    output하면 결과 값은 Animal */