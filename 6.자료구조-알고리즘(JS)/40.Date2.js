
/* 날짜 정보 설정 */
// 날짜 정보 설정(년/월/일): Date.setFullYear(), Date.setMonth(), Date.setDate()
// 날짜 정보 설정(시/분/초/ms): Date.setHours(), Date.setMinutes(), Date.setSeconds()

let date = new Date();

console.log(date); // output: 2022-02-22T08:38:14.085Z
// 현재의 현재의 년도/월/일/시간/분 new Date()로 설정해서 출력한다.

/* 1. set year */
let ms_year = date.setFullYear(2022, 10, 22);
console.log(date); // output: 2020-04-15T08:38:14.085Z
/* setFullYear(2022, 10, 22);에서 10은 배열에서 11번에 위치하므로 console.log output에서 11이들어간
2022-11-22로 출력이 된다.*/
console.log(new Date(ms_year)); // output: 2022-11-22T08:53:45.865Z
/* 2022-11-22T08:53:45.865Z은 ms_year = date.setFullYear(2022, 10, 22)를 변수값을
가져와서 출력했을때의 값 */


/* 2. set date */
date.setDate(1);    
console.log(date); // output: 2022-11-01T08:53:45.865Z
// setDate(1)은 output되는 날짜의 (일)에 1을 넣어줄때 사용
date.setDate(0);
console.log(date); // output: 2022-10-31T08:53:45.865Z
// setDate(0)은 output되는 날짜의 (일)에 0을 넣어주고 이것은 달력계산으로하면 31일이 된다


/* 3. set hours */
date.setHours(date.getHours() + 2);
console.log(date); // output: 2022-10-31T10:53:45.865Z
// 기존의 출력값에서 date.getHours() + 2는 2시간을 더해서 출력을 하겠다!


/* parse */
// 날짜정보 설정
// 문자열 기반 날짜 정보 설정: Date.parse(YYYY-MM-DDTHH:mm:ss.sssZ)
//  ... YYYY-MM-DD → 날짜(연-월-일), "T" → 구분 기호, HH:mm:ss.sss → 시:분:초.밀리초
//  ... "Z"(option) → 미 설정할 경우 현재 로컬 기준 UTC로, 설정할 경우 UTC+0 기준으로 시간 설정

let ms_parse = Date.parse("2020-03-31T00:00:00.000");

console.log(ms_parse); // output: 1585580400000 //// 밀리세컨드로 나옴
console.log(new Date(ms_parse)); // output: 2020-03-30T15:00:00.000Z  ← +9시간을 해준시간이 ms_parse = Date.parse("2020-03-31")해준값이랑 같다고 생각하면됨
// new Date(ms_parse)는 Date.parse("2020-03-31T00:00:00.000");의 밀리세컨드를정확한 날짜로 변환해서 출력

console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z"))); // output: 2020-03-31T00:00:00.000Z
// Z있고없고에 따라서 날짜의 조정 //// 뭔말인지 모르겠지만 일단 그렇다 다시한번 볼것



// 벤치마크 한번더 봐야함 뭔말인지 모르겠음

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

console.log("dateSub: " + benchmark(dateSub) + "ms"); // output: dateSub: 17ms
console.log("getTime: " + benchmark(getTime) + "ms"); // output: getTime: 4ms
