/* 문 */
// if문, for문, switch~case문, while문, do~while문, break문, continue문

// 예시 if(식, 값) {console.log} else {console.log}

/*
if(10 > 1) {
    return '10은 1보다 크다';
} else if (10 === 10) {
    return '';
} else {
    return '';
}
*/

// 초기화; 평가 (참 => 실행, 거짓 => 다음으로); 매번 실행되는 평가식;
const array = [1, 2, 3];

for(let i = 0; i < array.length; i++) {
    console.log(array);
    console.log(i);
}

let array1 = [1, 2, 3];

if (array1.length === 3) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === 1) {
            console.log(array1[i]);
        }
    }
}