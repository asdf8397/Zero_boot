/* XML HTTP_Request */
/** XML HTTP_Request
 *  XML HTTP_Request는 객체는 서버와 상호작용하기 위햇 사용됩니다
 * 전체 페이지의 새로고침없이도 URL로부터 데이터를 받아올수 있습니다.
 * 이는 웹 페이지가 사용자가 하고 있는 것을 방해하지않으면서 페이지의 일부를
    업데이트할 수 있도록 해줍니다.
    XML_HTTP_Reqeust는 AJAX프로그래밍에 주로 사용됩니다
 */

/*  XML_HTTP_Reqeust는 XML만 받아올수 있을것 같아보이지만, 모든 종류의 데이터를
    받아오는데 사용할 수 있습니다 또한 HTTP 이외의 프로토콜도 지원합니다
    통신을 통해 서버로부터 이벤트나 메시지 데이터를 받아야 한다면, EventSource를 통한
    Server-sent-events 사용을 고려하세요 완전 양방향 통신을 해야 한다면 웹 소켓이
    더 나은 선택일 수 있습니다.
 */


/* XML HTTP Request 사용 */
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState === xhr.DONE) {
        if(xhr.status === 200) {
            console.log(xhr.response)
        } else {
            console.log("error")
        }
    }
}

xhr.open("GET", "http://jsonplaceholder.typicode.com/todos/......")
xhr.send();

xhr.open("GET", "https://jsonplaceholer.typicode.com/todos/......")
xhr.send();