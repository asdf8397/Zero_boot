/* 5.배열 - 요소 추가와 제거 */

/**
 * unshift => 배열의 앞에 요소 추가
 * push => 배열의 끝에 요소 추가
 * shift => 배열의 앞에 요소 제거
 * pop => 배열의 끝에 요소 제거
 * splice => 배열의 인덱스를 기반으로 요소 추가 및 삭제
 */

 
/** 
 * [] 자체를 배열이라고 하며, []
 * ["one","two","three"]를 요소라고 한다.
 * 쉽게말해서 배열을 array라고하며 배열 안의 요소들을 element라고 한다.
 */ 

const arr1 = ["one", "two", "three"];
arr1.push(1);
arr1.push(2);
console.log(arr1); // output: ['one','two','three',1,2]
// push는 배열의 끝에 1,2가 추가 됨

const arr2 = ["one", "two", "three"];
arr2.unshift(0);
arr2.unshift(-0);
console.log(arr2); // output: [-0,0,'one','two','three']
// unshift는 배열의 제일 앞에 설정한 -0,0 추가 됨
const arr3 = ["one", "two", "three"];
arr3.pop();
// arr3.pop();
console.log(arr3); // output: ['one','two']
// pop은 배열의 끝부분 부터 요소 element를 삭제하게 된다

const arr4 = ["one", "two", "three"];
arr4.splice(1);
console.log(arr4); // output: one
/**
 * splice는 필요한 배열 부분을 추출해서 출력할때 사용한다.
 * splice(1)은 ['one']
 * splice(2)은 ['one','two']
 * splice(3)은 ['one','two','three'];
 */

const arr5 = ["one", "two", "three"];
arr5.shift();
arr5.shift();
console.log(arr5); // output: ['three']
// shift는 배열의 앞부분을 제거해줄때 사용함
// shift()하고 shift() 한번 더 하면 배열의 one, two를 삭제해주게 된다.


// splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
const array = ["one","two","three"];
array.splice(0, 0, "four"); // splice(0,0,"four")은 0번쨰 배열에 0(0은 삭제 안한다는 것), 그리고 "four"을 0번째 자리에 넣는다는 것
console.log(array); // output: ['four', 'one', 'two', 'three'];

const array2 = ["one","two","three"];
array2.splice(0, 1, "four"); // splice(0,1,"four")은 0배열의 자리에 one인 1개를 삭제하고 그 자리에 four을 넣는다라는 것
console.log(array2); // output: ['four','two','three'];

const array3 = ["one","two","three","five"];
array3.splice(1,1,"six"); // 배열의 1번째 자리의 1개를 삭제하고 그자리에 six를 넣는다
console.log(array3); // output: ['one','six','three','five']


/* 참고사항 */
/* unshift, shift, push, pop, splice는 원본배열도 같이 수정되게 된다
그래서 원본 배열을 건드리지 않고 배열을 사용해야하면 unshift, shift, push, pop, splice는 되도록 사용하지 말 것 */

const Array_new = ["one","two","three","four"];
const Copy_Array_new = Array_new;

Copy_Array_new.push(0);
Copy_Array_new.unshift(10);
Copy_Array_new.splice(1,1,"six");

console.log(Copy_Array_new); // output: [ 10, 'six', 'two', 'three', 'four', 0 ]
console.log(Array_new); // output: [ 10, 'six', 'two', 'three', 'four', 0 ]