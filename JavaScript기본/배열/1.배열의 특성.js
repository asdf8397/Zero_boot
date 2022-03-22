/* 1. 배열의 특성 */

/**
 * # 배열
 * 1. 객체
 * 2. index: value(딕셔너리)
 */

const arr = [1,2,3]; // 배열

console.log(arr); // output: [1,2,3]

const arr2 = new Array(1,2,3); // 배열
console.log(arr2); // output: [1,2,3]

console.log(arr[0]); // output: 1
console.log(arr[1]); // output: 2
console.log(arr[2]); // output: 3
arr[3] = 4; // arr은 2번째까지 배열이 있지만 배열 3번을 만들어서 4를 넣어준다
console.log(arr); // output: [1,2,3,4]

arr.push(5); // 3번 배열뒤에 한 자리를 만들고 그 한 자리에 5를 추가한다
console.log(arr); // output: [1,2,3,4,5]

arr[9] = 10; // 순서대로 배열이 배치되고 추가되다가 갑자기 9번 배열에 10을 넣어주면 중간에 붕뜨게 된다
console.log(arr); // output: [ 1, 2, 3, 4, 5, <4 empty items>, 10 ]/// 갑자기 4번배열에서 9번 배열에 추가되면서 중간에 붕뜬 부분은 empty처리됨

