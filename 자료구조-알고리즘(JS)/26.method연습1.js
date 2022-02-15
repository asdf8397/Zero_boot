// 함수저장
function hello_func() {
    console.log("hello");
}

function hi_func() {
    console.log("hi");
}

let obj = {
    name1: "john",
    age: 27,
    func: hello_func,
};

hello_func();
hi_func();
obj.func();
console.log(hello_func === obj.func);
console.log(hi_func === obj.func)