/* 배열 순회 */

const arr = [1,2,3];

arr[0]; // 1
arr[1]; // 2
arr[2]; // 3

console.log(arr[0]); // output: 1
console.log(arr[1]); // output: 2
console.log(arr[2]); // output: 3

// 배열을 출력할때 일일히 진행하기 번거로우니까 for문을 이용한다.

for (let i = 0; i < arr.length; i++) {
    console.log(i); // output: 0, 1, 2 출력 왜??? 길이를 뽑는것이기때문에
}

for (let i = 0; i < arr.length; i++) {
    console.log([i]); // output: [1],[2],[3]
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1,2,3
}

let i = 0;
if (i < arr.length) {
    console.log(arr[i]);
    i++;
}