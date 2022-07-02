// 호이스팅
// 코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어 올리는 작업
// var의 변수/함수의 선언만 위로 올려지고, 할당은 올려지지 않음
// let/const변수 선언과 함수 표현식에서는 호이스팅 발생하지 않음

// using var
console.log(name1); // output: undefined(찾을수없음)
var name1 = "john";
console.log(name1) // output: john

// using let/const
// ReferenceError: Cannot access "name_2" before initialization
// console.log(name_2);
// let name_2 = "john";