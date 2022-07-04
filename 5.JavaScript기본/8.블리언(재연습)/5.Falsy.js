/** Falsy
 * if(false)
 * if(null)
 * if(undefined)
 * if(0)
 * if(-0)
 * if(0n)
 * if(NaN)
 * if("")
 */

if (false) {
    console.log("진실")
} else {
    console.log("지금출력되는 false는 if문에서 항상 false입니다.")
};
if (null) {
    console.log("진실")
} else {
    console.log("지금 출력되는 null은 if문에서 항상 false입니다.")
};
if (undefined) {
    console.log("진실")
} else {
    console.log("지금 출력되는 undefined는 if문에서 항상 false입니다.")
};
if (0) {
    console.log("진실")
} else {
    console.log("지금 출력되는 0은 if문에서 항상 false입니다.")
};
if (-0) {
    console.log("진실")
} else {
    console.log("지금 출력되는 -0은 if문에서 항상 false입니다.")
};
if (0n) {
    console.log("진실")
} else {
    console.log("지금 출력되는 0n은 if문에서 항상 false입니다.")
};
if (NaN) {
    console.log("진실")
} else {
    console.log('지금 출력되는 ""은 if문에서 항상 false입니다.')
};