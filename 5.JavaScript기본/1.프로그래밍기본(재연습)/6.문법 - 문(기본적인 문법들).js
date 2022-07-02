/* 프로그래밍의 문법 (문) */
/* 문(Statement) */

// if문은
// if, else, if_else문으로 사용된다.
/** if문 예시 1번째
 *  if () {
 *      console.log(여기부분에 조건에 대한 출력문을 나타내는 코드)
 *  } else {
 *      이부분에 if문에 대해 알마지 않으면 else문으로 출력하는 부분 코드
 *  }
 *  
 *  if문 예시 2번째
 *  if () {
 *      console.log(여기 부분에 조건에 대한 출력문으로 코드를 작성한다.)
 *  } else if {
 *      if문에 코드가 잘못 되었을때 첫번째 else문의 첫번째 조건
 *  } else if {
 *      if문에 코드가 맞지 않을때 2번째 else문의 출력
 *  } else {
 *      if문의 조건에 맞지 않으면 else if조건문을 통해서 넣었는 조건들도 맞지
 *      않을 경우 else문으로 출력
 *  }
 *
 *  for문
 *  for문은 반복문을 통해서 값을 첫번째 값부터 마지막 값까지 값을 반복적으로 돌려서
 *  값을 출력하게 된다.
 *
 *  예시
 *  for (i = 0; i < x.length; i++) {
 *      console.log(i);
 *  }
 *
 *  while문
 *  while(식) {
 *      참일떄만 실행
 *  }
 */

// 조건문을 만들어보자 직접 console.log에 찍어서

let a = 10;
let b = 20;
if (a < 20) {
    console.log("이랏샤이마세")
} else {
    console.log("한국말로 이랏샤이마세는 '어서오세요' 입니다.")
}

if (b < 10) {
    console.log("안녕하세요")
} else {
    console.log("일본말로 안녕하세요는 이랏샤이마세 입니다.")
}

if (a < b) {
    console.log("앗 조건문 정확히 적고 있는 것이 맞겠쥬?")
} else {
    console.log("코테 중하여도 어렵군요 하하하")
}

if (a > b) {
    console.log("조건문이 맞다면 지금 문장이 출력될겁니다.")
} else {
    console.log("만약 지금의 문장이 출력된다면 조건문이 틀렸다는 뜻이겠쥬?")
}

let element_a = 100;
let element_b = 200;
let element_c = 300;

if (element_a < element_b) {
    console.log("1번째의 조건문")
} else if (element_a === element_b) {
    console.log("2번째의 조건문")
} else if (element_a === element_c) {
    console.log("3번째의 조건문")
} else {
    console.log("만약 다른 조건문들이 출력되지 않는다면 마지막엔 내가 출력됨")
}

if (element_a === element_b) {
    console.log("조건문 첫번째출력입니다 근데 뭔가.. 흠 그렇군요")
} else if (element_a != element_a) {
    console.log("!=을 사용했는데 과연 출력이 될 것인가")
} else if (element_a < element_c) {
    console.log("과연 출력이 될까요?")
} else {
    console.log("과연 출력이 되군요")
}

// 함수 function
function solution() {
    let count = 10;
    let sum = 20;
    if (count <sum) {
        console.log("함수안의 조건문에서 출력해보는데 오랜만에 헷갈리네요")
    } else {
        console.log("함수에서 출력해봤어요 한번 봐봅시다.")
    }
}
solution();

function solution_Solution() {
    let count = 20;
    let sum = 30;
    if (count === sum) {
        console.log("안녕하세요 테스트중입니다.")
    } else {
        console.log("하이하이 여기입니다.")
    }
}
solution_Solution();

let ouput = 100;
let output_number = 200;

function input_Value() {
    if (ouput < output_number) {
        console.log("바깥 값을 가져와서 찍어보는 중입니다.")
    } else {
        console.log("찍어보고 안나오는 값을 여기서 출력합니다.")
    }
}
input_Value();

function function_loop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
function_loop();

function function_variety_loop() {
    let count = [1,2,3,4,5,6,7,8,9,10]
    for (i = 0; i < count.length; i++) {
        if (i < 11) {
            console.log("만약 이게 맞다면")
        } else {
            console.log("만약 10보다 작으면 이게 출력될것입니다!!!!!!")
        }
    }
}
function_variety_loop()

/* while문 */
let while_i = 5;
while(while_i < 6) {
    console.log("허허 이게 맞는구랴")
    while_i++
};

/** 메모
 * for문은 while문과 비슷하게 사용가능하다 그렇지만 for문이 더 낫게 사용할 수 있음
 * for문은 단순 반복에 사용할 수 있음
 * while문은 반복에도 사용할 수 있고 switch문에도 사용 가능하다.
 * while문은 여러 반복문에도 사용가능하기 때문에 알고리즘을 짤때 더 유용하게 사용 가능함
 * 
 * but 코딩테스트에서는 for문으로 풀기 쉬울수도 있음 경험에 의하면
 * */