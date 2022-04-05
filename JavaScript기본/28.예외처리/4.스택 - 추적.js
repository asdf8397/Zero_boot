/* try-catch */
try {
    x();
} catch (e) {
    console.error(e.stack);
    /* console.error(e.stack)이라고 하면 catch(e)에 들어간 것을 
        console.error로 어떤곳에 에러가 발생했는지 찾아낼때 사용함 */
}

// 또는

function x() {
    c();
    v();
    b();
    x();
    x();
    x();
}
try {
    x();
} catch (e) {
    console.error(e.stack); 
    // 어디에 에러가 있는지 X가 있고 catch(e)에서 어디에 에러가 있는지 찾을때 사용됨
}