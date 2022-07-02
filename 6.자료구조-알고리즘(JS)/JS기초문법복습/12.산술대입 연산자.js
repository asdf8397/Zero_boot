// 연산자

console.log(31+10); // output: 41
console.log(31-10); // output: 21
console.log(31*10); // output: 310
console.log(31/10); // output: 3.1
console.log(parseInt(31/10)); // output: 3 // 소수점 없음 int형식으로 output: 뽑을때
console.log(parseFloat(31/10)); // output: 3.1 // 소수점으로 출력하는 float형식으로 output 뽑을때

// 나머지 연산자
console.log(31%10); // output: 1

// 거듭제곱 연산자
console.log(2**3); // output: 8 // 거듭제곱 연산자 정말 많이 쓰인다.


// 대입연산자

let num_1 = 123;
let num_2 = 456;
let str_1 = "Hello";
let str_2 = "world";

let num_3, str_3;
num_3 = num_1 + num_2;
str_3 = str_1 + str_2;

console.log(num_3); // output: 579;
console.log(str_3); // output: "Hello world";

let num_4, str_4;
num_4 = num_2 - num_1;
str_4 = str_2 + str_1;

console.log(num_4); // output: 333;
console.log(str_4); // output: worldhello


let num = 10;
let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 31;
console.log(result_1); // output: 31
console.log(result_2); // output: 31
console.log(result_3); // output: 31
console.log(result_4); // output: 31
console.log(result_5); // output: 31


// 복합 대입 연산자: += , -=, *=, /=, %=
result_1 += num;
console.log(result_1); // output: 41

result_2 -= num;
console.log(result_2); // output: 21

result_3 *= num;
console.log(result_3); // output: 310

result_4 /= num;
console.log(result_4); // output: 3.1

result_5 %= num;
console.log(result_5); // outpout: 1


// 증가, 감소 연산자

let num2, result2;

num2 = 10;
result2 = num2++; // result2에 결과값을 주고 난 후 ++ 붙어서 1이 올라간다
console.log(result2); // output: 10 ,,, num2++에서 1이 추가되기전에 값이다
result2 = num2; // num2에서 ++해서 11이 된 이후의 값이 result2에 맞다고 디폴트값으로 맞추고
console.log(result2); // output: 11 ,,,, 11이 된후 reuslt2 = num2를 같게 했을때
result2 = ++num2; // 11이 된후 result2에 값을 추가하게 된다.
console.log(result2); // output: 11 // 결과값은 11이 되는것


let num3, result3;

num3 = 20;
result3 = num3--;
console.log(result3); // output: 20 ,,, result3에 num3을 대입안한상태
console.log(num3); // output: 19 ,,, num3 -- 적용후 출력상태

result3 = --num3;
console.log(result3); // output: 19
console.log(num3); // output: 19