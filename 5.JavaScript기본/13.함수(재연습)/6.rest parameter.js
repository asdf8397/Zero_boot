const func = (first, second, ...nums) => {
    console.log(first); // 1
    console.log(second); // 2
    console.log(Array.isArray(nums)); // true

    /** first: 배열의 첫번째니까 1
     * second: 배열의 두번째니까 2
     * nums는 Array.isArray(nums)를 통해서 배열에 있는 nums가 배열인지 확인을 거치며
     * true값이 출력 됨
     */
    return nums.reduce((prev, curr) => prev + curr);
}
console.log(func(1,2,3,4,5,6,7));
/** console.log(func(1,2,3,4,5,6,7)의 출력값 25
 * 출력값이 나올 수 있었던 이유는 func의 안의 값이 3부터 nums(맨끝)까지
 * 여기서는 1,2를 제외한 3번부터 7(nums)가 된다고 할때
 * return nums.reduce((prev, curr) => prev + curr);
 * 3번부터 7번(nums)까지 다 +연산을 했을때 값을 도출했는 값이 25이다.
 */