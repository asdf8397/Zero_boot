/* 생성자 */
function FishBread(flavor, price) {
    this.flavor = flavor; // 여기 "cream", "redbean", "milk" / flavor자리
    this.price = price; // 여기 1200, 1000, 1500 들어감 / price자리
    this.base = "flour";
}

let bread_A = new FishBread("cream", 1200);
let bread_B = new FishBread("redbean", 1000);
let bread_C = new FishBread("milk", 1500);

console.log(bread_A); // FishBread {flavor: "cream", price: 1200, base: flour }
console.log(bread_B); // FishBread {flavor: "redbean", price: 1000, base:flour }
console.log(bread_C); // FishBread {flavor: "milk", price: 1500, base: flour }


타켓 target을 모르겠음
/* new.target */
// target 속성(property)을 사용하여 new와 함께 호출했는지 확인 가능
// 유연한 생성자 함수를 만들기 위해 new.target이 없을때 new 키워드 추가하여 호출 되도록 처리
function User(name) {
    console.log(new.target);
    this.name = name;
}

let result_1 = User("john");
console.log(result_1); // [Function: User]
let result_2 = new User("john");
console.log(result_2); // User {name: 'john'}

