/** 참과 거짓 true, false
 * if문을 사용했을 때 true로 return되서 나오는 것들
 * if(true)
 * if({})
 * if([])
 * if(42)
 * if("0")
 * if("false")
 * if(new date())
 * if(-42)
 * if(3.14)
 * if(-3.14)
 * if(infinity)
 * if(-infinity)
 */

/* 지금부터 if안에 들어가는 것들은 무조건 true이다 */
if (true) {
    console.log("지금 출력되는 true는 if문에서 true입니다.")
};
if ({}) {
    console.log("지금부터 출력되는 {}는 if문에서 항상 true입니다.")
};
if ([]) {
    console.log("지금부터 출력되는 모든 []는 if문에서 항상 true입니다.")
};
if (42) {
    console.log("지금부터 출력되는 모든 42는 if문에서 항상 true입니다.")
};
if ('0') {
    console.log("지금부터 출력되는 모든 '0'은 if문에서 항상 true 입니다.")
};
if ("0") {
    console.log('지금부터 출력되는 모든 "0"은 if문에서 항상 true 입니다.')
};
if ("false") {
    console.log('지금부터 출력되는 모든 "false"는 if문에서 항상 true입니다.')
};
if ('false') {
    console.log("지금부터 출력되는 모든 'false'는 if문에서 항상 true입니다.")
};
if ("true") {
    console.log('지금부터 출력되는 모든 "true"는 if문에서 항상 true입니다.')
};
if ('true') {
    console.log("지금부터 출력되는 모든 'true'는 if문에서 항상 true입니다.")
};
if (new Date()) {
    console.log("지금부터 출력되는 모든 new Date()는 if문에서 항상 true입니다.")
};
if (-42) {
    console.log("지금부터 출력되는 모든 -42는 if문에서 항상 true입니다.")
};
if (12n) {
    console.log("지금부터 출력되는 모든 12n은 if문에서 항상 true입니다.")
};
if (3.14) {
    console.log("지금부터 출력되는 모든 3.14는 if문에서 항상 true입니다.")
};
if (Infinity) {
    console.log("지금부터 출력되는 모든 infinity는 if문에서 항상 true입니다.")
};
if (-Infinity) {
    console.log("지금부터 출력되는 모든 -infinity는 if문에서 항상 true입니다.")
}
