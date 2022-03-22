const squidMembers = ["기훈", "상", "우", "일남", "준호", "새벽", "알리"];
console.log(squidMembers); // output: ['기훈', '상','우',   '일남','준호', '새벽','알리']


// 배열의 끝에 요소 추가
squidMembers.push("덕수");  
console.log(squidMembers); // output: ['기훈', '상','우','일남','준호','새벽','알리','덕수']


// 배열의 앞에 요소 추가
squidMembers.unshift("미녀");
console.log(squidMembers); // output: ['미녀', '기훈','상',   '우','일남', '준호','새벽', '알리','덕수']

console.log(squidMembers.indexOf("현우")); // output: -1 ,,, -1은 없을때 -1을 출력한다.
console.log(squidMembers.indexOf("상우")); // output: -1
console.log(squidMembers.indexOf("기훈")); // output: 1 ,,,, 있으면 1
console.log(squidMembers.indexOf("준호")); // output: 5 ,,,, 왜 5번이냐 배열로치면 4번인데 이유는 기훈이 true일때 1번으로 표기된다 그 1번을 기준으로 순서를 했을때 5번이 된다 그래서 5이다

console.log(squidMembers.lastIndexOf("알리")); // output: 1 ,, 배열의 마지막에서 순서대로 찾아서 찍는다.
console.log(squidMembers.lastIndexOf("준호")); // output: 3


// 배열에서 요소 포함 여부 확인
console.log(squidMembers.includes("기훈")); // output: true ,,,, 있으면 true
console.log(squidMembers.includes("상우")); // output: false ,,,, 없으면 false


// 배열의 앞 요소 지우기
squidMembers.shift("미녀"); // unshift 반대 // shift()안에 들어간 미녀를 지울때 사용한다.
console.log(squidMembers);


// 배열의 끝 요소 지우기
squidMembers.pop("덕수"); // push 반대 // pop()안에 들어간 덕수 배열의 끝부터 지운다 배열 끝에 지울것을 지정해야함 괄호 안에서
console.log(squidMembers);


// 배열에서 특정 인덱스 요소 지우기
squidMembers.splice(2,1);
console.log(squidMembers); // output: [ '기훈', '상', '일남', '준호', '새벽', '알리' ]
// 배열 2번에 있는 1개를 지울때 splice(2,1) 사용

squidMembers.splice(); // 이렇게 사용하면 배열 전체를 지울때 사용한다.
