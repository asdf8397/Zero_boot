/* length */

/**
 * # 배열의 length
 * 
 * 배열에서 가장 높은 인텍스를 추적
 */

const arr = [1,2,3];

arr.length;
console.log(arr.length); // output: 3


const arr2 = [1,2,3];
arr2[9] = undefined;

console.log(arr2); // output: [ 1, 2, 3, <6 empty items>, undefined ]
console.log(arr2.length); // output: 10
/* length해보면 배열들 9까지의 중간에 빈곳을 empty item으로 들어가고 10번째 배열에
    10번째 배열에 undefined를 넣어주면 결과값은 [ 1, 2, 3, <6 empty items>, undefined ]
    으로 나온다.
*/

const arr3 = [1,2,3,4,5,6,7,8,9];
arr3.length = 20;
console.log(arr3); // output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, <10 empty items> ]
// output을 했을때 배열이 있고 거기에 추가로 뒤에 11 empty item이 나온다 만약 배열이 10까지 였으면 10 empty item으로 나올것임
console.log(arr3.length); // output: 20 // 이것은 arr3.length의 길이를 20으로 설정했기때문에 20이 된거임

const arr4 = [1,2,3,4,5,6,7,8,9,10];
arr4.length = 0;
console.log(arr4); // output: [] /// [1,2,3,4,5,6,7,8,9,10] 10개의 length의 길이 10의 배열이 있는데 이것을 length 0으로 했으니까 다 삭제된것임