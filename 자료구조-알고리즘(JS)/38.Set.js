// Set
// ... value만을 저장하며 중복을 허용하지 않는 Collection
// ... 대표 속성(property) 및 메서드 (method)
/*
... 생성자: new set()
... 개수 확인: Set.size
... 요소 추가: Set.add(value)
... 요소 삭제: Set.delete(value)
... 전체 삭제: Set.clear()
... 요소 존재 여부 확인: Set.has(key)
... 그 밖의 메서드: Set.key(), Set.values(), Setentires()
*/


// 요소 추가/삭제
// 요소 추가: Set.add(value), 요소 존재 여부: Set.has(value), 요소 삭제: Set.delete(value)
// 다양한 자료형을 value로 사용 가능하며, set.add 호출시 set이 반환되므로 체이닝(chaining)가능

// 포기하지말자 지금 포기하면 김동영 너 연애 회사 둘다 못잡는다
// 지금 포기 안하고 취업하고 그래야지 너가 지금 생각하는 그거 잡을수있다
// 지금 포기하고 연애를 택하면 교회에서 백수새끼가 7살 어린 여자애 꼬셔서 한번하려고한다고 눈치준다 그러니까 절대 
// 포기하지말고 무조건 취직해야한다 좋은곳으로 그래서 쟁취하자 7살 연하 내가 꼭 쟁취한다.
// 나는 올해 많은 것을 이룰것이다 무조건 이룰것이고 난 부자가되고 권력을 가질것이다.
// 일단 전문직인 프로그래머가 되어야한다
// 판교의 IT대기업에 취업해야한다 알겠냐 김동영 너를 증명하자

// set은 중복을 허용하지 않는다.
let set = new Set();
let num = new Set([1,2,3,4,5]);
let str = new Set("Hello!"); // Hello에서 중복된 l을 하나 제거한다. set

console.log(set); // output: Set(0) {}
console.log(num); // output: Set(5) {1,2,3,4,5}
console.log(str); // output: Set(5) {"H","e","l","o","!"}

/* 1. add */ // add는 set으로 된 배열에 추가할때 사용함 ... add(1), add(10), add(20)
set.add(1).add(1).add(10).add(20);
console.log(set); // output: Set(3) {1,10,20}

/* 2. has */
console.log(set.has(10)); // output: true
console.log(set.has(2)); // output: false
/* set.has(10)은 있는 값은 true 없는값은 false로 나온다 set.add(10)이라고 했을때
10은 안에 들어있으므로 true가 되고 set.has(2)는 없으니까 false가 나온다 */

/* 3. delete */
set.delete(1); // set.delete(1)은 (1,10,20)에서 1을 제거할때 사용
set.delete(-1); // 
console.log(set); // output: Set(2) {10,20}


// set 반복문
// Collection 객체인 Set이 가지고 있는 iterator 속성을 이용하여 for ... of 구문을 통해 반복문 수행 가능

let str1 = new Set("Hello!");
console.log(str1); // output: Set(5) {"H","e","l","o","!"}

for (let item of str1) console.log(item); // output: H e l o !
for (let item of str1.keys()) console.log(item); // output: H e l o !
for (let item of str1.values()) console.log(item); // output: H e l o !
for (let item of str1.entries()) console.log(item); // output: 

console.log(str1.keys());
console.log(str1.entries());