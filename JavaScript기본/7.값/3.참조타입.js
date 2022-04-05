/**
 * JS Type
 * -- 원시(Primitive)
 * -- 객체, 참조(Reference)
 */

const object = { // 여기서 object는 메모리 꾸러미 name age arr func child를 담고있는
    name: "jang",
    age: 11,
    arr: [],
    func: function() {},
    child: {}
};

const obj = { //{}중괄호 안에 들어갈땐 =이 아니라 :으로 들어가야함
    str: "string"
}
obj.str.toUpperCase();

console.log(obj.str.toUpperCase());

const arr = [1,2,3];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr[3] = 1000; // 개발할때 조심해야한다
console.log(arr);

// typeof와 instanceof의 차이점
/* typeof는 unary 오퍼레이터이다 unary 오퍼레이터로는 !라던가 - 등과 같이 인자를 하나만 받을 수 있는
연산자를 뜻한다. 즉 함수가 아니고 연산자이기 때문에 괄호를 사용하면 안된다 */


/* instanceof는 비교 연산자로 >,<,== 와 같이 두개의 인자를 받는 연산자로 앞의 비교 연산자들을 이용하는 기분으로
사용하면 된다.
instanceof는 해당하는 변수가 사용하고 있는 prototype의 chain을 2번째 인자와 쭉 비교해서 true/false 값으로 리턴한다 */

console.log(object instanceof Object);
// console.log(func instanceof Function);
// console.log(array instanceof Array);