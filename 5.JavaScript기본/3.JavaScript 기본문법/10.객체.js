/* 객체 */
// (1) 나라는 사람을 프로그래밍 언어로 표현하자면?

const Dongyoung = {
    // key라고하며 property라고하며 속성이라고도 한다.
    // key(property), 속성: value(행동 메서드)
    name: "Kim_dong_young",
    age: 28,
    gender: "male",
    introduce: function(guest) {
        return "hello " + guest + " my name is Dongyoung"
    },
    hobby: ['youtube']
}

console.log(Dongyoung.name); //
console.log(Dongyoung.age);
console.log(Dongyoung);
console.log(Dongyoung.introduce());
console.log(Dongyoung.introduce("Kim"));

// (2) 나라는 사람을 프로그래밍 언어로 표현하자면 어떻게 될까?

let Kim = {
    name: {
        first: "Dong-Young",
        last: "kim",
    },
    age: 10,
    gender: "male",
    introduce: function(guest) {
        return "Hello " + guest + " my name is Dongyoung";
    },
    hobby: ["Create youtube Contents"],
};

console.log(Kim.name.first);
console.log(Kim.name.last);
console.log(Kim.age);
console.log(Kim.gender);
console.log(Kim.introduce("Lee"));
console.log(Kim.hobby);
console.log(Kim["name"]["first"]);
console.log(Kim["name"]["last"]);
console.log(Kim["age"]);
console.log(Kim["gender"]);
console.log(Kim["introduce"]);
console.log(Kim["hobby"]);