// this
// 메서드에서 객체 내부의 속성(property)값을 접근할 수 있는 지시자
// 객체 내부에 접속(접근)할수있는 지시자이다 (this)

let obj = {
    name2: "john",
    age: 27,
    hello_func() {
        console.log("hello " + this.name2);
    }
};
obj.hello_func(); // 값 출력



// this 예제
// this를 사용하는 method는 추가 가능하며, 이때 this는 runtime에 결정되어 호출한 객체에 따라 다름

let user = {
    name3: "john_Kim"
};
let admin = {
    name3: "admin_Lee"
};

// // hello_func 내 this 값은 런타임에 결정
function hello_func() {
    console.log("hello " + this.name3);
}
user.func = hello_func; // user.func 수행할 때, (this === user.name3)
admin.func = hello_func; // admin.func 수행할 때, (this === admin.name3)

// 출력 담당
user.func(); // hello john_Kim
admin.func(); // hello admin_Lee

user["func"](); // hello john_Kim
admin["func"](); // hello admin_Lee