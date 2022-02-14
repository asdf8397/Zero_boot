// 반복문 제어

// break
// 반복문 수행시 코드 블록을 탈출할 때 사용되는 식별자
// 다중 반복문일 경우 가장 안쪽의 반복문을 종료
// Label을 통하여 다중 반복문을 한번에 종료 가능
    // # Label: 반복문 앞에 콜론과 함께 쓰이는 식별자


// continue
/* 반복문 수행시 코드 블록 실행을 해당 라인에서 중지하고 블록 코드를 종료 
시킨후 반복문 내 명시된 조건 판단 */


// break, continue 예제

// break
let text = "";

for(let i = 0; i < 10; i++) {
    if(i === 3) break;
    text = text + i; // i가 text랑 연산을 해서 console.log로 출력한다.
}

console.log(text);


// continue
text = "";

for(let i = 0; i < 10; i++) {
    if(i === 3) continue;
    text = text + i; 
    // i의 반복문이 console.log에 적히기 위해서는 text + i처럼 연산을해서 text의 값을 적히게 해야함
}

console.log(text);


// Label 예제
// 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
/* break와 continue를 사용하는 반복문 안에서만 사용 가능하며, 
break나 continue 지시나 위에 있어야 함 */


for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(i + " * " + j + " = " + i * j);
        break;
    }
}


end: for(let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i + " * " + j + " = " + i * j);
        break end;
    }
}