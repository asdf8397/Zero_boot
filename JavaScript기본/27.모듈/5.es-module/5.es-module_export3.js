export default function hello() { // 기본 내보내기 쉽게말해 default가 붙으면 고정값이다
    return "hello";
}

// 구문의 구성 2가지
/** 1번째
 * export default function hello() {return "hello";}
 * function hello() {return "hello"; export default hello;} 
 */