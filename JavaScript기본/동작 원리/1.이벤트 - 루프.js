// alert("Hello") // Web API
// console.log("Hi");

// setTimeout(() => alert("Hello"), 1000)
// console.log("Hi");

// console.trace()는 추적을 할 수 있는 console이다.

// 쉽게말해서 웹의 웹툰페이지에서 뒤로가기를 눌렀을때 호출하게되는 페이지라고 생각하면 된다.
function third() {
    console.trace();
    console.log("세번째 수건");
}

function second() {
    console.log("두번째 수건");
    third()
}

function first() {
    console.log("첫번째 수건");
    second()
}
/* 웹에서 마지막 페이지(첫번째 수건)에서 뒤로가기를 누르면 
second()로 호출되서 두번째 페이지 두번째 수건으로 넘어감
두번째 수건에서도 뒤로가기를 누르면 third()로 호출되서 세번째 수건으로 넘어감 */