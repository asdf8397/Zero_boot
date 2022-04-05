/* 4. 프로퍼티 접근자 */        // 모르겠음 다시한번 봐야함
// 프로퍼티에 접근자 (getter, setter)

const person = {
    firstName: "jang",
    lastName: "hyeon-seok",

    get firstName() {
        return this.firstName;
    }
};
console.log(person); // output; { firstName: 'jang', lastName: 'hyeon-seok' }

// 쉽게 접근해서 추가하고 삭제할수있음
/*
person.aa = "aa";
console.log(person); // output: { firstName: 'jang', lastName: 'hyeon-seok', aa: 'aa' }
person.aa = "bb";
console.log(person); // output: { firstName: 'jang', lastName: 'hyeon-seok', aa: 'bb' }
delete person.aa;
console.log(person.aa); // output: undefined
*/