// 연산자
// 연산자는 프로그램에서 데이터를 처리하여 결과를 산출할 목적으로 사용하는 문자
// 연산은 대상 값은 피연산자라고 하며, 피 연산자의 개수에 따라 단항/이항/삼항 연산자의 종류 존재

// 산술 연산자
// 수학적 계산을 위해 제공하는 연산자

// 덧셈 연산자
console.log(31 + 10); // output: 41

// 뺄셈 연산자
console.log(31 - 10); // output: 21

// 곱셈 연산자
console.log(31 * 10); // output: 310

// 나눗셈 연산자
console.log(31 / 10); // output: 3.1
console.log(parseInt(31 / 10)); // output: 3
console.log(parseFloat(31 / 10)); // output: 3.1

// 나머지 연산자(나머지 연산자가 알고리즘에서 제일 많이 사용된다고 읽혀야한다.)
console.log(31%10); //output: 1

// 거듭제곱 연산자
console.log(2 ** 3); // output: 8


// 대입연산자
// 계산한 결과를 하나의 변수에 저장하기 위한 연산자

let num_1 = 123;
let num_2 = 456;
let str_1 = "hello";
let str_2 = "World";

let num_3, str_3;
num_3 = num_1 + num_2;
str_3 = str_1 + str_2;

console.log(num_3); // output: 579
console.log(str_3); // output: helloworld

let num_4 = num_1 - num_2;
console.log(num_4);

let num = 10;
let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 31;
console.log(result_1);

// 복합 대입 연산자: +=
result_1 += num;
console.log(result_1); // output: 41

// 복합 대입 연산자: -=
result_2 -= num;
console.log(result_2); // output: 21

// 복합대입 연산자: *=
result_3 *= num;
console.log(result_3); // output: 310

// 복합대입 연산자: /=
result_4 /= num;
console.log(result_4); // output: 3.1

// 복합대입 연산자: %=
result_5 %= num;
console.log(result_5); // output: 1


// 증가, 감소 연산자

// 숫자 1만큼 증가시키거나 감소시킬때 사용되는 연산자
// 증가 연산자: ++(피연산자), (피연산자)++;
// 감소 연산자: --(피연산자), (피연산자)--;

let num2, result2;

num2 = 10;
result2 = num2++;
console.log(result2); // output: 10
console.log(num2); // output: 11

num2 = 10;
result2 =  ++num2;
console.log(result2); // output: 11
console.log(num2); // output: 11

num2 = 10;
result2 = num2--; // console.log에서 output (num2)의 내용은 여기서 가지고온 num2를 output에 출력한다
console.log(result2); // output: 10
console.log(num2); // output: 9

num2 = 10;
result2 = --num2; // console.log에서 output (num2)의 내용은 여기서 가지고온 num2를 output에 출력한다
console.log(result2); // output: 9
console.log(num2); // output: 9