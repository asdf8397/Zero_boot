// 원시값의 래퍼 객체
const bool = false;
const num = 123;
const str = "string";


const bool2 = new Boolean(false);
const num2 = new Number(123);
const str2 = new String("string");
// new Boolean, new Number, new String은 생성자 함수들이다.

console.log(bool); // output: false
console.log(bool2); // output: [Boolean: false]
console.log(num2); // output: [Number: 123]
console.log(str2); // output: [String: 'string']
console.log(typeof bool); // output: boolean
console.log(typeof bool2); // output: object

console.log(bool2 instanceof Boolean); // output: true ,,,,,, bool2는 new Boolean이므로 true
console.log(bool2 instanceof Object); // output: true ,,,,, bool2는 new Boolean이면서 Object이기때문에 Object를 넣었을때 true
console.log(bool2 instanceof Number); // output: false ,,,,, bool2는 new new Boolean인데 new Number이 들어오면 false가 된다.
console.log(str2 instanceof String); // output: true ,,,, str2는 new String이기때문에 true
console.log("string" instanceof String); 
// output: false ,,,, new String으로 지정한 것은 선언문 str2를 가리키고 있다
// "string"은 그냥 값이고 이것을 가리키고 있지 않으므로 false가 나온다


/* instanceof는 오른쪽에 있는 오브젝트는 클래스로 만들어진 오브젝트이다
여기서 instanceof는 왼쪽에 있는 Object가 오른쪽에 있는 클래스의 인스턴스 인지 아닌지,
즉 오브젝트가 오른쪽의 클래스로 만들어진 인스턴스인지 아닌지 true 혹은 false로 변환시켜준다 */
                    // ↑
        // 왼쪽의 선언과 오른쪽의 생성자가 같으면 true 틀리면 falses