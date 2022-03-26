/* 5. JSON */

/** JSON
 * JSON은 속성-값 쌍 또는 "키-값 쌍"으로 이루어진 데이터 오브젝트를 전달하기 위해
    인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다. 비동기 브라우저/서버 통신(AJAX)을 위해
    넓게는(AJAX가 사용)을 대체하는 주요 데이터 포맷이다. 특히 인터넷에서 자료를 주고 받을때 그 자료를 표현하는 방법
    으로 알려져있다. 자료의 종류에 큰 제한은 없으며, 특히 컴퓨터 프로그램의 변수값을 표현하는데 적합하다.

    JSON 포맷은 본래 더글라스 크록포드가 규정하였다. RFC 7159와 ECMA-404 그리고 ISO/IEC 21778: 2017 표준에
    의해 기술되고 있다. KS부합화 표준은 아직 제정되지 않았으며, TTA협회 표준명은 TTAE.OT-10.0394이다
    ECMA 표준과 ISO/IEC표준은 문법만 정의할 정도로 최소한으로만 정의되어 있는 반면 RFC 시맨틱, 보안적 고려사항을 일부 제공한다.
    JSON의 공식 인터넷 미디어 타입은 application/json이며, JSON의 파일 확장자는 .json이다.
 */

/* JS를 JSON으로 변환하는방법 */
// JSON.stringify()는 JS값이나 객체를 JSON문자열로 변환한다.


const obj = { x:5, y:6 };
const jsonObj = JSON.stringify({ x:5, y:6 });
console.log(obj); // output: {x:5, y:6} /// 일반적인 JS
console.log(jsonObj); // output: {"x":5,"y":6}/// JSON의 문자열
console.log(typeof obj); // output: object
console.log(typeof jsonObj); // output: string

/* JSON을 JS로 변환하는 방법 */
// JSON.parse()는 JSON문자열을 JS값이나 객체로 변환한다.
const obj_obj = {x:5, y:6};
const jsonobj_jsonobj = JSON.stringify({x:5, y:6});
const jsonParseObj = JSON.parse(jsonobj_jsonobj);
console.log(obj_obj); // output: { x: 5, y: 6 }
console.log(jsonobj_jsonobj); // output: {"x":5,"y":6}
console.log(jsonParseObj); // output: { x: 5, y: 6 }
console.log(typeof obj_obj); // output: Object // JS일때는 Object
console.log(typeof jsonobj_jsonobj); // output: String // JSON일때는 string
console.log(typeof jsonParseObj); // output: Object // JS에서 Object로 바꾸고나서 JSON에서 String문자열에서 JS의 Object로 다시 바꿀때 사용

/**
JSON -> JS Object (JSON parse) => 서버에서 데이터를 가져올때 사용함
ㄴJSON -> "JS Object"

JS Object -> JSON (JSON stringify) => 서버로 데이터를 보낼때 사용함
ㄴ"JS Object" -> JSON() -> 서버로 데이터를 보낼때

JavaScript (프론트엔드)
    ㅣ
    Json
    ㅣ
Java, Python, Ruby, Go(백엔드)
*/