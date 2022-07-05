/** 화살표 함수
 * 화살표 함수는 function을 빼고 편리하게 사용할 수 있음
 * 화살표 함수는 함수 내에 여러 개가 들어갈 때 편리하게 사용할 수 있음
 *
 * JS의 화살표 함수는 동작 방식이 기존의 function 함수들과 많이 다르다.
 * 1.argument
 * 2.this
 */

const arrowFunc = (banana_cost) => {
    return `${banana_cost} 바나나 가격입니다.`
    // 화살표 함수는 이렇게 사용함 코테에서 많이 활용됨 외워야 함
};
console.log(arrowFunc(3400));