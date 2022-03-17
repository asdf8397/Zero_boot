/**
 * Infinity
 * -- 너무 크거나 작다
 * -- 지수 1023까지만 허용
 * JS에서 표현할 수 없을때 사용한다
 */


Math.pow(2, 1024);
7 / 0

const result = isFinite(Math.pow(2, 1024));
console.log(result); 
// output: false /// 왜냐하면 Math.pow(2, 1024)는 1024를 제곱해준다고한다
// 이때 제곱을 해준 것은 Infinity가 나올 것이고 그래서 결론적으로 false가 된다.


// isFinite는 실제 숫자인지 확인할때 사용하고 실제 Number이면 true,, 아니면 false가 된다.
console.log(isFinite(3));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));