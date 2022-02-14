// 반복문 while

// 조건문이 참일 때 코드 블록을 계속해서 반복 수행하는 반복문
// for문에 비해 선언문과 증감문 없이 loop를 수행하며, 무한 loop등 수행시 많이 사용
// 조건문을 코드 블록보다 아래로 옮긴 do...while 반복문도 존재(최소 한번 수행이 필요할때 많이 사용)


// while 예제
let i = 0;
while(i < 3) {
    console.log(i)
    i++;
} // output: 0,1,2

i = 0;
do {
    console.log(i);
    i++;
} while(i<3);
// output: 0,1,2

i = 4;
do {
    console.log(i);
    i++;
} while(i<3);
// output: 없음 (나)
// output: 답: 4
/* 해설 while(i<3)일때 i=4;가 되면 while문을 돌지않는다 
그랬을때 바로 console.log(i)에 진입해서 4로 출력된다 */