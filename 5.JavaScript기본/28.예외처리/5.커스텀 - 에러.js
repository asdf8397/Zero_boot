/* 커스텀 에러 */

// class LoginError extends Error { // 여기서 extends로 Error를 생성하고 여기서 생성한 Error는 throw new Error를 가리킴
//     constructor (message) {
//         super(message);

//         this.name = "Login Error"; 
//         /* class LoginError에 this.name = "Login Error"를 담고
//             class LoginError를 throw new LoginError에 담으면 
//             로그인 실패할 경우 class LoginError가 적용되서
//             output(출력): LoginError[Login Error] 아이디 불일치로 나온다.*/
//     }
// }
    
// function login(id, password) {
//     if(id !== "a") {
//         throw new LoginError("아이디 불일치");
//     }

//     if(id === "a" && password === "a") {
//         return true;
//     }

//     throw new Error("로그인 실패");
// }

// try {
//     login("ac", "a");
// } catch (e) {
//     console.error(e);
//     console.error("에러가 발생했습니다.");
// } finally {
//     console.log("로그인 시도", new Date());
// }

/** extends
 * extends는 클래스의 자식 클래스를 생성할때 사용한다.
 * 
 * super()은 부모 생성자를 호출한다.
 * 부모 생성자의 일이 끝난 후 부모가 해결하지 못하는 것은 자식 생성자가 하도록 하는 것이다.
 * super()이 없다면 중복이 될 것을 부모에게 가서 실행시키고 오는 것이다.
 */

/* 생성자 함수 constructor
 * 생성자 함수란 쉽게 말해서 new 키워드와 함께 쓰이는 함수이다
 * new Array();
 * new Object();
 * new Function();
 * 을 가리킴
 */

// 여기서 에러를 확장해서 사용했는데 여기 이부분 잘 모르겠음 위에 에러를 발생했을때 부분을 보면서 이해할 것

class LoginError2 extends Error { // Error는 예약어임 변경할 수 없음
    constructor(message) {
        super(message);

        this.name = "Login Error";
    }
}

function login2(id, password) {
    if(id !== "a") {
        throw new LoginError2("아이디 불일치");
    }

    if(id === "a" && password === "a") {
        return true;
    }

    throw new Error("로그인 실패"); // new Error는 예약어임 변경할 수 없음
}

try {
    login2("ac", "a");
} catch(e) {
    console.error(e);
    if (e instanceof LoginError2) {

    } else {
        console.error("로그인 에러가 발생했습니다.")
    }
    console.error("에러가 발생했습니다.");
} finally {
    console.log("로그인 시도", new Date());
}