/* N차원 배열 */

let array = [
    [101, 102, 103],
    [201, 202, 203],
    [301, 302, 303],
];

console.log(array); // output: [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]); // output: [ 101, 102, 103 ] // 0배열 출력
console.log(array[1][0]); // output: 201 // 1배열에 0번째 출력
console.log(array[2][2]); // output: 303 // 2배열에 2번째 출력

let arr_2 = array.pop(); // pop()으로 [301, 302, 303] 삭제
console.log(array.length); // output: 2
console.log(arr_2); // output: [301, 302, 303] /// pop()으로 삭제된 배열 추출
console.log(array); // output: [101, 102, 103], [201, 202, 203]

let array_num = array.push([401, 402, 403]);
console.log(array.length); // output: 3
console.log(array_num); // output: [101, 102, 103],[201, 202, 203], [401, 402, 403]
console.log(array); // output: 3

/* 2차원 배열 반복문 예제 */
// 이중 for loop를 사용한 2차원 배열 접근

let array3 = [[101,102,103],[201,202,203],[301,302,303]];

for(let i = 0; i < array3.length; i++) {
    for(let j = 0; j < array3[i].length; j++) {
        console.log(array3[i][j]);
    }
}

/* output:
[ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]
101
102
103
201
202
203
301
302
303
*/


let fruits = [
    ["strawberry", 50],
    ["banana", 100],
    ["ice", 150],
];

for (let i = 0; i < fruits.length; i++) {
    console.log(`fruits: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}

/* output:
fruits: strawberry, amount: 50
fruits: banana, amount: 100
fruits: ice, amount: 150
*/
// 여기서 [0]은 "strawberry","banana","ice"를 가리키고
//        [1] 은 50, 100, 150을 가리키고
//          [2] 는 없음 그래서 undefined가 뜬다.

