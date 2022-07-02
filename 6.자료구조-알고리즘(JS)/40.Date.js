// Date
// 표준 Built-in 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
// Date 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값으로 표현
// 생성자 및 대표 메서드(method)
/*
    ... Date 객체 생성자: new Date()
    ... 현재 시간 기준 문자열: Date()
    ... 날짜 정보 얻기 (년/월/일): Date.getFullYear(), Date.getMonth(), Date.getDate()
    ... 날짜 정보 얻기 (시/분/초/ms): Date.getHours(), Date.getMinutes(), Date.getSeconds()
    ... 날짜 정보 설정 (년/월/일): Date.setFullYear(), Date.setMonth(), Date.setDate()
    ... 날짜 정보 설정 (시/분/초/ms): Date.setHours(), Date.setMinutes(), Date.setSeconds()
    ... 그 외 날짜 정보 얻기: Date.getDay(), Date.getTime(), Date.getTimezoneOffset()
    ... 그 외 날짜 정보 설정: Date.parse(string)
*/


// Date 생성자 - (1)
// Date 생성자 종류: new Date(), new Date(miniseconds), new Date(datestring) new Date(year, month, date, hours, minutes, seconds, ms)

/* 1. Default */
let date_now = new Date();
let date_now_str = Date();

console.log(date_now); // output: 2022-02-22T06:57:36.334Z  /// 현재 날짜 기준으로 된 date를 받는다
console.log(date_now_str); // output: Tue Feb 22 2022 15:57:36 GMT+0900 (대한민국 표준시)   /// 현재시간 기준의 문자열을 받는다

console.log(typeof date_now); // output: Object  /// new data();를 생성했기때문에 Object이다.
console.log(typeof date_now_str); // output: string  /// 문자열로 데이터를 받았기때문에 string

/* 2. milliseconds (1/1000)sec */
let date_ms_1 = new Date(0);
let date_ms_2 = new Date(24 * 3600 * 1000);

console.log(date_ms_1); // 1970-01-01T00:00:00.000Z  // default값이 출력
console.log(date_ms_2); // 1970-01-01T00:00:00.000Z  // default값이 2가 되면서 출력

let date_string = new Date("2020-01-01");
console.log(date_string); // 2020-01-01T00:00:00.000Z

// month: 1월(0) - 12월(11)
let date_params_1 = new Date(2021, 0, 1);
console.log(date_params_1); // 2020-12-31T15:00:00.000Z

let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
console.log(date_params_2); // 2021-01-01T06:12:18.024Z
let date_params_3 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_3); // 2021-01-01T00:00:00.000Z


/* 날짜 정보 얻기 */
// 날짜 정보 얻기 (년/월/일/요일): Date.getFullYear(), Date.getMonth(), Date.getDate(), Date.getDay()
// 날짜 정보 얻기 (시/분/초/ms): Date.getHours(), Date.getMinutes(), Date.getSeconds()
// 주어진 일시 - 1970/1/1 차분(ms): Date.getTime(), 현지시간 - 표준 시간 차분(min): Date.getTimezoneOffset()

let date = new Date();
console.log(date); // output: 2022-02-22T07:30:42.381Z /// 현재 날짜를 확인

/* 1. year, month, day: 0(sun) ~ 6(sat) */
console.log(date.getFullYear()); // output: 2022  /// 현재의 년도를 확인
console.log(date.getMonth()); // output: 1 //// 현재의 (월)을 출력
console.log(date.getDay()); // output: 2 //// 현재의 (일)을 출력

/* 2. hours */
console.log(date.getHours());  // output:  16 /// 현재의 시간출력
console.log(date.getUTCHours()); // output: 7 //// 현재의 표준시간 영국 그라니치 천문대의 표준시를 기준

/* 3. getTime: (now - date(0)) milliseconds 
        getTimezoneOffset: (UTC+0 - currentZone) minutes */
console.log(date.getTime()); // output: 1645515042381 /// 현재의 시간을 millisecond로 변환시켜줄때 사용
console.log(new Date(date.getTime())); // output: 2022-02-22T07:42:04.453Z  /// 현재 시간을 날짜로 변환 new Date()
console.log(date.getTimezoneOffset()); // output: -540  // 영국 그리니치 천문대를 기준으로 대한민국과의 시간을 계산할때 그 차이를 -540


/* 날짜 정보 설정 */
// 날짜 정보 설정(년/월/일): Date.setFullYear(), Date.setMonth(), Date.setDate()
// 날짜 정보 설정(시/분/초/ms): Date.setHours(), Date.setMinutes(), Date.setSeconds()

let date = new Date();

console.log(date); // output: 

/* 1. set year */
let ms_year = date.setFullYear(2020, 3, 15);
console.log(date);
console.log(new Date(ms_year));


/* 2. set date */
date.setDate(1);
console.log(date);
date.setDate(0);
console.log(date);


/* 3. set hours */
date.setHours(date.getHours() + 2);
console.log(date);


/* parse */
// 날짜정보 설정
// 문자열 기반 날짜 정보 설정: Date.parse(YYYY-MM-DDTHH:mm:ss.sssZ)
//  ... YYYY-MM-DD → 날짜(연-월-일), "T" → 구분 기호, HH:mm:ss.sss → 시:분:초.밀리초
//  ... "Z"(option) → 미 설정할 경우 현재 로컬 기준 UTC로, 설정할 경우 UTC+0 기준으로 시간 설정

let ms_parse = Date.parse("2020-03-31T00:00:00.000");

console.log(ms_parse);
console.log(new Date(ms_parse));

console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z")));


/* benchmark */

// 성능 측정
//  ... 벤치마크 측정 대상 함수 전후로 시간을 비교하여 알고리즘 성능 측정

function dateSub(old_date, new_date) {
    return new_date - old_date;
}

function getTime(old_date, new_date) {
    return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
    let date_1 = new Date("2020-01-01");
    let date_2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) {
        callback_func(date_1, date_2);
    }
    return Date.now() - start;
}

console.log("dateSub: " + benchmark(dateSub) + "ms");
console.log("getTime: " + benchmark(getTime) + "ms");