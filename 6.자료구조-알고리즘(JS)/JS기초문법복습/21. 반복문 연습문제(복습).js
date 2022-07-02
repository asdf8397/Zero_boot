/* 연습문제 */

/* 문제(1) */
const UNTIL_NUM = 10;
let sum = 0;

for(let i = 0; i <= UNTIL_NUM; i++) {
    if(i % 2 == 0) sum += i;
}
console.log(sum); 
// output: 10 8 6 4 2 => 30
// if(i%2==0)은 i가 for문을 반복할때 2의 배수를 출력

/* 문제(2) */
// 반복문 for문 2개를 이용하여 2 ~ 9단까지 출력해주는 코드를 작성하시오
for(let i = 2; i <= 9; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}