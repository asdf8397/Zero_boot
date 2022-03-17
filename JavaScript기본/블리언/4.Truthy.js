/* 참 같은 값 */
// truthy


/** if문을 썼을때 true로 return되서 나오는 것들
 * if(true)
 * if({})
 * if([])
 * if(42)
 * if("0")
 * if("false")
 * if(new Date())
 * if(-42)
 * if(12n)
 * if(3.14)
 * if(-3.14)
 * if(infinity)
 * if(-infinity)
 */

if(true) {
    console.log("(1)지금 출력이 된다면 이것은 true(참)입니다")
}

if({}) {
    console.log("(2)만약 지금 출력이 된다면 이것은 true(참)입니다.")
}

if([]) {
    console.log("(3)만약 이것이 출력이 된다면 참(true)입니다")
}

if(42) {
    console.log("(4)만약 이것은 출력이 된다면 참이라고 생각하면되요")
}

if("0") {
    console.log("(5)만약에 만약에 이것은 참이라고 생각하세요 왜냐 출력이 되거든요")
}

if("false") {
    console.log("(6)안녕하세요 참입니다")
}

if(new Date()) {
    console.log("(7)안녕 참이라고 해")
}

if(-42) {
    console.log("(8) 안녕 출력되는거지 그렇다면 참이다")
}
if(12n) {
    console.log("(9) 이거 참이야")
}

if(3.14) {
    console.log("(10) 오 출력 잘된다 참!!")
}

if(-3.14) {
    console.log("(11) 참이랍니다")
}

if(Infinity) {
    console.log("(12) 참참참")
}

if(-Infinity) {
    console.log("(13) true, true, true")
}
/* 코드를 만들때 Boolean을 사용해서 true false를 사용해서 코드를 짤때 
Boolean을 사용하지 않고 그냥 간단하게 true를 사용할때 사용되는 truthy */

