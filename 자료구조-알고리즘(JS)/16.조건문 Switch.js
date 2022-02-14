// 조건문 switch
// switch는 표현식을 평가하여 그 값이 일치하는 case문을 실행하는 조건문
/* switch, case, break, default키워드를 통해 구성되며, switch의 조건에 맞는
case구분을 수행 */
// 일반적으로 하나의 case만 수행되도록 case끝을 break로 끝맺음

/*
switch(ch) {
    case 1:
        statements;
        break;
    case 2:
        statements;
        break;
    case 3:
        statements;
        break;
}
*/

let day_number = 1;
let day;

switch(day_number) {
    
    case 0:
    day = "Sunday"; 
    break;
    
    case 1: // day_number = 1;이므로 switch(day_number)안에 case 1:인것은 Monday이므로
    day = "Monday";
    break;

    case 2:
    day = "Tuesday";
    break;

    case 3:
    day = "Wednesday";
    break;

    case 4:
    day = "Thursday";
    break;

    case 5:
    day = "Friday";
    break;

    case 6:
    day = "Saturday";
    break;
    default:
    day = "error";
    break;
}

console.log(day); // output: monday


// 변형
let day_number2 = 1;
let day2;

switch(day_number2) {
    
    case 0:
    day2 = "Sunday"; 
    break;
    
    case 1: // day_number = 1;이므로 switch(day_number)안에 case 1:인것은 Monday이므로
    day2 = "Monday";


    case 2:
    day2 = "Tuesday"; 
    // case 1:에서 break;가 빠져있으므로 case 2: 접근해서 break에 걸리게된다
    // 결과값은 Tuesday가 출력된다.
    // 명칭으로는 오버라이딩 됐다고 한다.
    break;

    case 3:
    day2 = "Wednesday";
    break;

    case 4:
    day2 = "Thursday";
    break;

    case 5:
    day2 = "Friday";
    break;

    case 6:
    day2 = "Saturday";
    break;
    default:
    day2 = "error";
    break;
}

console.log(day2); // output: Thusday


// switch 예제(2)

let browser = "Chrome";

switch(browser) {
    case "Explorer":
    msg = "ActiveX installation required";
    break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        msg = "Supported browsers!";
        break;
        /* 출력되는 이유는 let browser = "Chrome"으로 설정했고 switch(browser)
        case "Chrome"에 멈춰야하지만 break가 없다 그래서 계속 진행
        msg = "Supported browsers!가 출력된다 break되서 */
        default:
        msg = "Unsupported browsers!";
}
console.log(msg); 