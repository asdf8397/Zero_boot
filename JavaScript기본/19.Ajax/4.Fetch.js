/* 4.Fetch */

/* Fetch */
/** Fetch API
 * Fetch API는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있습니다
 * XMLHttpRequest와 같은 비슷한 API가 존재합니다만, 새로운 Fetch API는 좀더 강력하고 유연한 조작이 가능합니다.
 */

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((Response) => Response.json())
    .then((data) => console.log(data));
    /** 네트워크 통신에서
     * .then((Response) => Response.json())는 js를 JSON으로 변환
     * .then((data) => console.log(data));은 JSON을 js로 변환
     * */

/** 메서드를 호출하면 응답객체로 부터 JSON포멧의 응답 전문을 JS객체로 변환하여 얻을 수 있다
 * {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"
    }
 */