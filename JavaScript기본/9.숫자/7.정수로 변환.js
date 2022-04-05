/* 정수로 변환 */

/* string문자를 number로 변환할때 parseInt() 또는 Number() 로 사용 가능한데
parseInt를 대부분 많이 사용한다 */

parseInt("10");
Number("10");

Number.MAX_SAFE_INTEGER;

parseInt(
    // parseInt를 사용하는 것은 10진수를 사용할때 parseInt를 사용한다.
    // 그렇기때문에 parseInt를 사용할땐 10진수가 아닌것은 몇 진수인지를 넣어서
    // parseInt를 해줘야한다
)

Number();

function parseInt2(value, radix) {
    if (radix === undefined) {
        return Number(value)
    }

    return
}
console.log(parseInt2(value, radix));
