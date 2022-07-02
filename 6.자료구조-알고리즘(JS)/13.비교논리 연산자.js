// 비교 연산자
// 좌항과 우항의 피연산자를 비교한 다음 결과값을 논리적 자료형으로 반환하는 연산자
// ==은 단순 값의 같음을 비교하는 동등 비교, ===는 자료형까지 같음을 판단하는 일치 비교 연산자

// 비교 연산자 예제
console.log("Z" > "A"); // output: true // 문자 순서상 z가 a보다 위에 있기때문에
console.log("Hello" < "Hi"); // output: true // 문자 순서상 hello보다 hi가 위에 있으므로
console.log("Hello" >= "Helloo"); // output: false
console.log("5" <= 10); // output: false
console.log(true == 1); // output: true
console.log(false != 123); // output: true
console.log(true === 1); // output: false // 각각의 타입이 다르므로 false출력
console.log(false !== 123); // output: true


// 논리 연산자
// 좌항과 우항의 피연산자 간 논리 값을 연산하여 참 또는 거짓을 결과로 얻는 연산자
// 논리 연산자: &&(AND), ||(OR), !(NOT)


// 논리 연산자의 예제
console.log(true || false); // output: true // 둘중에 하나가 true이면 true가 된다 그래서 true
console.log(Boolean(0 || false)); // output: false // 0이 false || false 이므로
console.log(Boolean(123 || false)); // output: true // 123이 true이므로 
console.log(Boolean(123 && 0)); // output: false // 123이 true이고 0이 false이므로 &&는 둘다 true이어야 함
console.log(Boolean(false && true)); // output: false // 둘중 하나가 false이므로
console.log(Boolean(true && 3)); // output: true // true이고 3또한 true이므로 
console.log(Boolean(0 && false)); // output: false // 0은 false이고 && false이므로
console.log(!false); // output: true // !(NOT) 반대다 false의 반대는 true이다
console.log(!123); // output: false // 123(true)의 반대는 false이므로