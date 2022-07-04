/** Scope(스코프)
 * 유효범위
 * 변수 유효 범위
 * 내부에서 외부로 접근 가능
 * 외부에서 내부로 접근 불가능
 */

// Javascript가 나올때 처음부터 있었던 변수 var

let global_varVal = "전역변수";
let constVal = "블록단위";

function outerFunc() {
    let num = 123;
    console.log(global_varVal); // ouput: "전역변수"
    console.log(num); // output: 123
    function innerFunc() {
        let innerVal = "함수 내 지역 변수";
        console.log(constVal); // 블록단위
        console.log(innerVal); // 함수 내 지역 변수
    }
    innerFunc()
}
outerFunc();
 
// console.log(innverVal); // 출력할수없음 오류발생
/** function innerFunc()과 function outerFunc()
 * 두 함수는 밖의 값들을 함수 내부로 가져와서 사용할 수 있음
 * 단 이 두 함수들의 내부에 있는 값은 밖으로 출력만으로 뽑을수 있으며
 * 함수 외부에서 변수를 지정해서 함수 내부의 값을 가져가서 사용할 수 없음
 * 
 */