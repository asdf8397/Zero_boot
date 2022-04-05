/* 3. 호이스팅 */
function hoisting() {
    console.log(hoist) // output: undefined

    var hoist = "호이스팅";

    console.log(hoist); // output: 호이스팅
}
hoisting();
// 메모
// var를 써주면 hoisting()에서는 var hoist = "호이스팅";보다 상위 console.log()는 undefined가 나온다
// 원래대로라면 undefined가 나오면 안되고 호이스팅이 되게 된다 ES2015+ 이전버전에서의 호이스팅 오류임


function hoisting_test() {
    console.log(hoist);

    let hoist = "호이스팅";

    console.log(hoist);
}
hoisting_test();
// let을 이용하면 let hoist = "호이스팅"을 지정한 상위의 console.log(hoist)했을때 바로 에러발생시킴
// 과거의 ES2015+에서의 호이스팅이 먹혀들지 않음