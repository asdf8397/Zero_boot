/* if문 */
let a = 10;
let b = 30;
if(a<b) { // 맞는식 
    console.log("맞았습니다.");
} else {
    console.log("만약 if문의 문법이 맞고 if문의 식이 틀렸다면 지금 이것이 출력되었을 것입니다.");
}

if(a>b) { // 틀린식 if문에서 else를 사용한다.
    console.log("맞았습니다. 맞다면 이것이 출력되었을 것이고");
} else {
    console.log("틀렸다면 이것이 출력 될 것입니다.");
}

if(a>b) {
    console.log("아마도 출력이 될지 모르겠지만 내 예상에 출력이 안될 것 같습니다. 만약 출력이 된다면 틀렸음")
} else if(a === 30) {
    console.log("만약 else if문이 맞다면 지금 이것이 출력이 될것이고")
} else if(a === 10) {
    console.log("이것이 출력될 수 있도록 설계해둠");
}

// if문 함수
let sum_another = 150;
let min_another = 200;

function calculator() {
    if(sum_another < min_another) {
        console.log("계산기 확실합니다.");
    } else {
        console.log("Calculator 설계");
    }
}
calculator();

(function anticalculator() {
    console.log("하하 호호")
})
();

if(10<20) {
    console.log("안녕하세요")
} else {
    console.log("반갑습니다")
}

if(10>20) {
    console.log("안녕하세요222222")
} else {
    console.log("반갑습니다.")
}

function Javascript() {
    if(true) {
        console.log("function_Javascript")
    } else {
        console.log("function_Write")
    }
}
Javascript();

function JavaScript2222() {
    if(false) {
        console.log("Hello JavaScript")
    } else {
        console.log("Print function JavaScript")
    }
}
JavaScript2222()

/* for문 */
for(let number=0; number<10; number++) {
    console.log(number);
} // output: 0,1,2,3,4,5,6,7,8,9

console.log("<br>"); // 칸 구분

const arr_list = ["a","b","c","d","e","f","g"];
for(a=0; a<arr_list.length; a++) {
    console.log(a);
}
