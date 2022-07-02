/* 인스턴스 */
const me = {
    name: "jang",
    age: 10,
    location: "korea",
};

// 생성자 함수는 대문자로 시작하는 파스칼 케이스
function Func() {}
// Class도 생상자 함수는 대문자로 시작하는 파스칼케이스로 함
class Classs {}

// 생성자 함수로 만들때는 new 연산자로 만들게 됨
const newInstance = new Func();
const newInstance2 = new Classs();