/**
 * # 산술 연산자
 * + - / * %
 */

1 + 1
2 - 1
10 / 5
10 % 2
2 * 2

console.log(1+1); // output: 2
console.log(2-1); // output: 1
console.log(10/5); // output: 2
console.log(10%2); // output: 0
console.log(2*2); // output: 4

let x = 5;
++x;
console.log(x);
// output: 6
// let x = 5는 ++x를 하면 x의 값이 5인데 5를 +1한값이 대입되게 된다

let z = 5;
z++;
console.log(z);
// output: 5
// let z = 5가 된다 그렇지만 z++가 되면 output:에서 5가 되고 그 다음 6으로 변환된다


/* 증가 */
let x2 = 1
x2 = x2 + 1;
x2++;

/* 감소 */
let z2 = 1;
z2 = z2 - 1;
z2--;

// 연산
console.log(3 + 4 * 5); // output: 23
console.log(4 * 3 ** 2); // output: 36
// 연산의 우선은 *, /, +, - 순서이다
// 개발자가 수학 연산에 약하고 연산을 못할 수 도 있기때문에 연산 코드 작성을 달리해줄 필요가 있다
                    
                // ↓ 이런 식으로

// console.log(3 + 10 * 2);
            // ↓
console.log(3 + (10 * 2)); // output: 23,,,,, 23을 출력 괄호는 불필요
console.log((3 + 10) * 2); // output: 26,,,,, 괄호로 인해 실행 순서가 바뀜



/* 이런식으로 사용가능하다 연산자 할때 */
const isTicektPrice = 3 + 10;

// console.log((3 + 10) * 2)
        // ↓
if (isTicektPrice * 2) {
    console.log("연산자 1번 입니다.")
}

const isTicektPrice_Double = 10 * 2;
// if (3 + (10 * 2));

if (isTicektPrice_Double + 3) {
    console.log("연산자 2번 입니다")
}

