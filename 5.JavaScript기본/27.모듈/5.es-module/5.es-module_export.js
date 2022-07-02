/* es-module(export) */
// es-module은 기존의 모듈과 다르게 간소화 했다.
// es-module은 기존의 Common AMD는 모듈을 따로 만들어줘야했지만 es-module은 변수 앞에 export붙여주면 된다.
export const a = "a"; // 앞의 export는 ex-module에서 export할때 사용함

export function hello() {
    return "hello";
}