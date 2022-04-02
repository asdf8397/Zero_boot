/**
 * 에러 던지기
 */
/*
function login(id, pw) {
    if(id === "zero" && pw === 0000) {
        return true;
    }
}

try { // 에러발생하지 않음
    login("one", 111); // login(id, pw) login()의 자리에 id, pw를 집어넣는다.
} catch (error) {
    console.error(e);
    console.error("에러발생");
} finally {

}
*/

/*
function login(id, pw) {
    if(id === "zero" && pw === 0000) {
        return true;
    }

    throw new Error("로그인 실패") // Error를 발생시켜서 "로그인 실패"를 catch(error)에 넣어준다.
}

try {
    login("one", 111);
} catch(error) {
    console.error(e);
    console.error("에러발생"); // 그러면 [Error: 로그인 실패], output: 에러발생
} finally {
    console.info("로그인 시도 시간: " + new Date());
}
*/

// 직접 앱을 만들때 이렇게 사용할 수 있고 window.alert는 에러가 발생했을때 고객에게 직접적으로 보여지는 부분
function login(id, pw) {
    if(id === "zero" && pw === 0000) {
        return true;
    }

    throw new Error("로그인 실패");
}

try {
    login("one", 111);
} catch (error) {
    console.error(error);
    window.alert(error); // 사용자에게 안내됨 노출 알림이 뜸
} finally {
    console.info("로그인 시도 시간: " + new Date());
}