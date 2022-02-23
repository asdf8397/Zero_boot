// N차원 배열
// 배열(Array) 안에 N개 만큼의 배열이 존재하는 객체
// 2/3차원 지도 정보, RGB를 저장하는 2차원 사진 파일 등을 표현할 때 활용가능

/* 2차원 배열 예제 */
// 2차원 배열은 array[N][M]으로 접근하며, 배열(Array) 전체를 Push(), pop() 가능

let array = [
    [101, 102, 103],
    [201, 202, 203],
    [301, 302, 303],
];

console.log(array); // output: [[101, 102, 103], [201, 202, 203], [301, 302, 303]]
console.log(array[0]); // output: [101, 102, 103] /// [0]배열을 말함
console.log(array[1][0]); // output: 201 /// 1번째 배열에서 0번째 배열을 호출
console.log(array[2][2]); // output: 303

let arr_2 = array.pop();
console.log(array.length); // output: 3
console.log(arr_2); // output: [301, 302, 303] /// pop은 배열에서 마지막 배여릉ㄹ 삭제한다.
console.log(array); // output: [[101,102,103],[201,202,203]]  /// pop에서 마지막 배열을 삭제했고 그래서 array를 출력했을때 301,302,303배열 삭제된 나머지가 출력됨

let array_num = array.push([401, 402, 403]);
console.log(array.length); // output: 3
console.log(array_num); // output: 3  //// 배열이 3개가 맞는데 배열로 나온줄 알았는데 3으로 나온다 왜 3으로 나오는지 모르겠음
console.log(array); // output: [[101,102,103],[201,202,203],[401,402,403]]


/* 메모 */
// 배열 요소 추가 제거 메서드
// 배열의 처음 혹은 마지막에 요소를 추가하거나 제거하는 메서드들 입니다
// push 메서드: 배열의 마지막에 새로운 요소를 추가한 후, 벼녕된 배열의 길이를 반환
// pop 메서드: 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환
// unshift 메서드: 배열의 첫 번째 자리에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
// shift 메서드: 배열의 첫 번째 요소를 제거한 후, 제거한 요소를 반환
// splice 메서드 - 배열 요소 추가 삭제
// reverse 메서드 - 배열 요소 순서 반전
// sort 메서드 - 배열 요소 정렬
// Array 메서드: 유사 배열 혹은 반복가능한 객체로 부터 새 Array 인스턴스를 만듭니다.