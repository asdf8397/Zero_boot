/* 5. 인스턴스 */

// 여기서 me, me2, you 등등이 각자의 인스턴스이다.
// 사람도 주민번호가 각자 있듯이 인스턴스도 각자의 정보가 다 다르다
// 인스턴스는 하나하나의 고유한 객체들이다.
// 특정 메모리의 자리를 잡고있는 것들이 인스턴스이다.
const me = {
    name: "jang",
    age: 10,
    location: "korea",
};

const me2 = {
    name: "jang",
    age: 10,
    location: "korea",
};

const you = {
    name: "seok",
    age: 20,
    location: "Germany",
};

// 단순 비교해보자
console.log(me === me2); // output: false
console.log(me.name === me2.name); // output: true /// 각자의 me, me2는 다르지만 자세한 속의 내용을 같을때는 true이다.
console.log(me === you); // output: false