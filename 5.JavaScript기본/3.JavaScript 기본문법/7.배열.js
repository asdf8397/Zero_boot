/* 배열에 넣는 방법(1) */
const data = 'a'
const num = 0;
const boolean = true;

const arr = [data, num, boolean, 'name']; // 배열

console.log(arr.data);
console.log(arr.num);
console.log(arr.boolean);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

/* 배열에 넣는 방법2 */
const arr1 = [data, num, boolean, "name"];

arr1[0] = "첫번째";
arr1[1] = "Second";
arr1[2] = "Test";
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

// unshift는 제일 첫번째 0번째 배열에 추가
// push 배열안에 지정된 값을 마지막에 집어 넣는다
arr1.push("마지막"); // 배열 제일 마지막 배열에 추가
arr1.unshift("첫번째 또 추가"); // 배열 제일 첫번째 0배열에 추가

console.log(arr1) // [ '첫번째 또 추가', '첫번째', 'Second', 'Test', 'name', '마지막' ]


for (let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);
}

// forEach문
// for문을 대체할수있는 반복문(내장객체)
arr1.forEach(Element => {
    console.log(Element);
});