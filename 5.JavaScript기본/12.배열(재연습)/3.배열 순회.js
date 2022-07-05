/* 배열 순회 */
const arr = [1,2,3];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3

/* 배열을 출력할 때 일일히 진행하기 번거로우며 for문을 이용해서 출력하게 된다. */
for (let i = 0; i < 3; i++) {
    console.log(i);
}; // output: 0, 1, 2

const arr2 = [1,2,3];
for (let i = 0; i < arr2.length; i++) { // 일반적인 출력
    console.log(i); // 0,1,2 ,, 길이 만큼 출력한다.
};

for (let i = 0; i < arr2.length; i++) {
    console.log([i])
}; // [1],[2],[3] ,, 배열 형식으로 출력