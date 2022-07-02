/* 배열에 넣는 방법 */
const data = "a";
const num = 0;
const boolean = true;

const arrayList = [data, num, boolean, "name"] // 배열
console.log(arrayList); // [a, 0, true, name]
console.log(arrayList.data); // 이렇게 출력하면 undefined로 출력됨
console.log(arrayList.num); // 이렇게 출력하면 undefined로 출력됨
console.log(arrayList.boolean); // 이렇게 출력하면 undefined로 출력됨

/* 출력할때는 무조건 배열 형식으로 출력해야함 */

console.log(arrayList[0]); // output: a
console.log(arrayList[1]); // output: 0
console.log(arrayList[2]); // output: true
console.log(arrayList[3]); // output: name

/* 배열에 넣는 방법 2번째 */
// 배열 안에 먼저 값을 넣고 재할당해서 다시 뺴내는 형식

const list_a = "MINI";
const list_b = "BOX";
const list_c = "SOLUTION";

let arrayList_BOX = [list_a, list_b, list_c, "MEMO"];
console.log(arrayList_BOX);

arrayList_BOX[0] = "미니";
arrayList_BOX[1] = "박스";
arrayList_BOX[2] = "솔루션";
arrayList_BOX[3] = "메모";
console.log(arrayList_BOX);
// output: [ '미니', '박스', '솔루션', '메모' ]

arrayList_BOX.push("마지막으로 테스트 추가합니다.");
console.log(arrayList_BOX);
// output: [ '미니', '박스', '솔루션', '메모', '마지막으로 테스트 추가합니다.' ]

for (let i = 0; i < arrayList_BOX.length; i++) {
    console.log(i); // 길이만큼 0,1,2,3,4, 만큼 돈다 갯수만큼
    console.log([i]); // 길이만큼 [0],[1],[2],[3],[4] 갯수만큼 배열로 돈다.
    // ↑ 그냥 i의 길이만큼 돈다 근데 arrayListBOX로 지정했기때문에 그 길이만큼 i가 돌고 주체도 i임 그래서 배열로 나옴
    
    console.log(arrayList_BOX[i]); 
    // ↑ 의 주체는 arrayList_BOX임 그래서 5개 이니까 "마지막으로 테스트 추가합니다."가 출력이 됨
}

// forEach문의 [반복문]]]]]]]]
// for문을 대체할 수 있는 반복문(내장객체)
arrayList_BOX.forEach(i => { // ~부터 ~까지 반복해준다고 할때 써주면됨
    console.log(i);
})

arrayList_BOX.forEach(i => { // ~부터 ~까지 배열로 반복할때도 사용할 수 있음
    console.log([i])
})

/* 실행안됨 undefined로 적힘
arrayList_BOX.forEach(i => {
    console.log(arrayList_BOX[i]);
})
 */