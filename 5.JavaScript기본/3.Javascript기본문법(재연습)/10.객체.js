/* 객체 */
// 1. "나"라는 사람을 프로그래밍 언어로 표현하자면?

const Dongyoung = { // 기본적으로 메뉴들을 넣는 것
    name: "Kim Dong Young",
    age: 28,
    gender: "male",
    introduce: function (guest) {
        return `Hello ${guest} my name is Mr Kim`
    },
    hobby: ["Watching youtube"] // 설정이 완료된 메뉴들 안에 hobby로 watching youtube를 넣음
}
console.log(Dongyoung);
console.log(Dongyoung.name); // Dongyoung이라는 선언문 안에 name:의 내용인 Kim Dong young이 출력 됨
console.log(Dongyoung.age); // 28이 출력 됨

console.log(Dongyoung.introduce())
// Hello undefined my name is Mr Kim // 출력 내용이 다름
console.log(Dongyoung.introduce("KIM DONG"))
// Hello KIM DONG my name is Mr Kim // 설정해준 내용을 전체 출력 함


// 2. 나라는 사람을 프로그래밍 언어로 표현하자면 어떻게 될까?

let Me = {
    name: {
        firstName: "Dongyoung",
        lastName: "Kim"
    },
    age: 10,
    gender: "male",
    introduce: function (guest) {
        return `Hello ${guest} my name is Dongyoung`
    },
    hobby: ["Create YOUTUBE Contents"],
};
console.log(Me);
console.log(Me.name.firstName);
console.log(Me.name.lastName.firstName); // 출력은 되지만 2개는 같이 못사용한다.
console.log(Me.introduce());
console.log(Me.introduce("Lee"));
console.log(Me["age"]); // 10
console.log(Me.age); // 10
// age를 뽑을 때 방법 .age, ["age"]로 뽑는 방법 2가지 방법이 있음