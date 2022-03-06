/* Date */

/* 1. Default */
let date_now = new Date(); // 현재 오늘 출력
let date_now_str = Date();

console.log(date_now); // output: 2022-03-05T08:53:12.500Z  // 현재 날짜기준으로 date를 받는다
console.log(date_now_str); // output: Sat Mar 05 2022 17:53:12 GMT+0900 (대한민국 표준시)   현재시간 기준으로 문자열을 받는다

console.log(typeof date_now); // Object
console.log(typeof date_now_str); // String

/* 2. milliseconds (1/1000)sec */
let date_ms_1 = new Date(0);
console.log(date_ms_1); // output: 1970-01-01T00:00:00.000Z // 컴퓨터에 날짜를 지정할때의 default값으로 출력
let date_ms_2 = new Date(24 * 3600 * 1000);
console.log(date_ms_2); // output: 1970-01-02T00:00:00.000Z

let date_string = new Date("2020-01-01"); // 지정한 날짜 출력할때
console.log(date_string); // output: 2020-01-01T00:00:00.000Z

/* month: 1월(0) - 12월(11) */
let date_params_1 = new Date(2021, 11, 1); // oitput: 2021-11-30T15:00:00.000Z
console.log(date_params_1); // output: 

let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
console.log(date_params_2); // output: 2021-01-01T06:12:18.024Z

let date_params_3 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_3); // output: 2021-01-01T00:00:00.000Z


let date = new Date();
console.log(date); // output: 2022-03-05T09:14:23.513Z

/* 1. year, month, day: 0(sun) ~ 6(sat) */
console.log(date.getFullYear()); // output: 2022
console.log(date.getMonth()); // output: 2 /// 현재의 (월) 출력
console.log(date.getDay()); // output: 6 /// 현재의 (일) 출력


/* 2. hours */
console.log(date.getHours()); // output: 18  // 현재의 시간
console.log(date.getUTCHours()); // output: 9 // UTF기준 시간
// UTC를 기준으로 한 시(hour)를 리턴한다.


/* 3. getTime: (now - date(0)) milliseconds
        getTimezoneOffset: (UTC+0 - currentZone) minutes */
console.log(date.getTime()); // output: 1646473174212  // 1970년을 기준으로 지금까지의 시간 
console.log(new Date(date.getTime())); // output: 2022-03-05T09:39:34.212Z // 오늘의 날짜를 가져옴
console.log(date.getTimezoneOffset()); // -540 // 영국의 표준시간 기준 한국의 시간이 얼마나 빠른가 -540임


let date_1 = new Date();
console.log(date_1); // output: 2022-03-05T10:10:56.368Z

/* 1. set year */  // setFullYear()은 메서드는 매년 설정하는데 사용된다.
let ms_year = date_1.setFullYear(2022, 3, 15);
console.log(date_1); // output: 2022-04-15T10:15:10.901Z
console.log(new Date(ms_year)); // output: 2022-04-15T10:15:10.901Z


/* 2. set date */
date_1.setDate(1);
console.log(date_1); // output: 2022-04-01T10:18:26.090Z // 2022-04-01에서 (일)이 1로 변경됨
date_1.setDate(0);
console.log(date_1); // output: 2022-03-31T10:18:26.090Z // 2022-03-31에서 (일)은 0으로 들어가면 31일로 변경됨


/* 3. set hours */
let ms_parse = Date.parse("2020-03-31T00:00:00.000");
console.log(ms_parse); // output:1585580400000
console.log(new Date(ms_parse)); // output: 2020-03-30T15:00:00.000Z

/* benchmark */
// 성능 측정
 
이부분 인강으로 다시 들어봐야함 무슨 말 하는지 파악해야함 잘 모르겠음
function dateSub(old_date, new_date) {
    return new_date - old_date;
}

function getTime(old_date, new_date) {
    return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
    let date_1 = new Date("2022-01-01");
    let date_2 = new Date();

    let start = Date.now();
    for(let i = 0; i < 100000; i++) {
        callback_func(date_1, date_2);
    }
    return Date.now() - start;
}

console.log("dateSub: " + benchmark(dateSub) + "ms");
console.log("getTime: " + benchmark(getTime) + "ms");