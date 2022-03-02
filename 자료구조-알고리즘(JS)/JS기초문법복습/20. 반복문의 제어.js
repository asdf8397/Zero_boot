/* 반복문 제어 */
// break
// 반복문 수행시 코드 블록을 탈출할 때 사용되는 식별자
// 다중 반복문일 경우 가장 안쪽의 반복문을 종료
// Label을 통하여 다중 반복문을 한번에 종료 가능
    //  # Lable: 반복문 앞에 콜론과 함께 쓰이는 식별자


/* continue */
/* 반복문 수행시 코드 블록 실행을 해당 라인에서 중지하고 블록 코드를 종료
    시킨 후 반복문 내 명시된 조건 판단 */

break문 답이 다르게 나옴 한번더 볼것 

// break
let text = "";

for (let i = 0; i < 10; i++) {
    if(i === 3) break;
    text = text + 1;
}
console.log(text); // output: 111
// 반복문에서 3번 반복하면 break걸린다 0에서 3번 돌고 +1을 더해서 1이 3번나온다
// 111


// continue
text = "";

for (let i = 0; i < 10; i++) {
    if(i === 3) continue;
    text = text + i;
}
console.log(text);
// output: 012456789

label모르겠음 한번더 볼것

// Label 예제

for (let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(i + " * " + j + " = " + i * j);
        break;
    } // output: 0 * 0 = 0, 1 * 0 = 0, 2 * 0 = 0
}

end: for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(i + " * " + j + " = " + i * j);
        break end;
    }
} // output: 0 * 0 = 0;
 // end가 들어오면 for문 첫번째 추출후 멈춤