/* rest.parameter */

// Array.from은 유사 배열 객체를 배열로 바꾸는데 자주 사용함
/* reduce()매서드는 배열의 각 요소에 대해 주어진 (reduce)함수를 실행하고
    하나의 결과 값을 반환할때 사용됨 */


const func = (first, second, ...nums) => {
    console.log(first); // output: 1
    console.log(second); // output: 2
    console.log(Array.isArray(nums)); // output: true ,,,, 이유는 nums는 배열내 number 전체를 말하는것

    return nums.reduce((prev, curr) => prev + curr);
}
console.log(func(1,2,3,4,5,6,7)); // output: 25

// 화살표 함수를 할 수 있다

/* 설명 */
/* func(1,2,3,4,5,6,7)을 출력하려고 한다 이것은 const func = (first, second ... num)
에 들어가게 되는데 const func() { 내부에서 console.log(first), console.log(second) 
    를 했을때 1, 2를 출력하게 되는데 nums는 func()안에 있는 값 통틀어서 그룹을
    말한다고 할 수 있다
    
    그래서 return num.reduce((prev, curr) => prev + curr을 하면
    nums에는 func(1,2,3,4,5,6,7)이 담겨지게 되고 이것은 prev + curr로
    넘어가서 연산후 25로 출력이 된다*/