/** 정수로 변환
 * String 문자를 number로 변환할 때 parseInt() 또는 Number()로 사용
 * 가능한데 ParseInt를 대부분 많이 사용한다.
 */

parseInt("10"); // 문자를 숫자로
Number("10"); // 문자를 숫자로
console.log(parseInt("10")); // output: 숫자 10
console.log(Number("10")); // output: 숫자 10

Number.MIN_SAFE_INTEGER;
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

parseInt(
    /** parseInt는 사용하는 것은 10진수를 사용할 때 parseInt를 사용한다.
     * 그렇기 때문에 parseInt를 사용할땐 10진수가 아닌 것은 몇 진수
     * 넣어서 parseInt를 해줘야한다.
     */
)
Number();

function parseInt2(value, radix) {
    if (radix === undefined) {
        return Number("10")
    } else {
        return parseInt("90")
    }
};
console.log(parseInt2(10, ));
console.log(parseInt2(10, 0));