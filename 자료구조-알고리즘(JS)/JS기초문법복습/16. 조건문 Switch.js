/* 조건문 Switch */

let day_number = 1;
let day;

switch(day_number) {

    case 0:
    day = "Sunday";
    break;

    case 1:
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
}
console.log(day); // output: Monday


let day_number2;
let day2;

switch(day_number2) {
    case 0:
    day2 = "Sunday";
    break;

    case 1:
    day2 = "Monday";
    break;

    case 2:
    day2 = "Thusday";
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
console.log(day);


let browser = "Opera";
switch(browser) {
    case "Explorer":
        msg = "ActiveX installation required";
        break;
        case "Chrome":
        case "Firefox":
        case "Safari":
        case "Opera":
        msg = "supported browsers!";
        break;
        default:
        msg = "Unsupported browsers!";
}
console.log(msg);

let 주식 = "아마존";
switch(주식) {
    case "구글":
    case "아마존":
    case "테슬라":
    case "마이크로소프트":
    msg = "미국 주식을 고르셨네요 환전후 매수해주세요";
    break;

    case "삼성전자":
    case "LG전자":
    case "네이버":
    case "카카오":
    case "SK이노베이션":
    case "KT":
    msg = "한국 주식을 고르셨네요 매수해주세요";
    break;
    default:
    msg = "원하시는 주식을 골라주세요!";
}
console.log(msg);