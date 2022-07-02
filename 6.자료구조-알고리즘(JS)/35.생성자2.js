
// new.target
// .new.target 속성(property)을 사용하여 new와 함께 호출했는지 확인 가능
// 유연한 생성자 함수를 만들기 위해 new.target이 없을 떄 new 키워드 추가하여 호출되도록 처리

function User(name) {
    console.log(new.target);
    this.name = name;
}

let result_1 = User("john");
console.log(result_1);
let result_2 = new User("john");
console.log(result_2);


// new.target 처리 추가
// 유연한 생성자 함수를 만들기 위해 new.target이 없을때 new 키워드 추가하여 호출되도록 처리
function FishBread(flavor, price) {
    if(!new.target) {
        return new FishBread(flavor, price);
    }

    this.flavor = flavor;
    this.price = price;
    this.base = "flour";
}

let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1); // output: FishBread { flavor: 'cream', price: 1200, base: 'flour' }
console.log(bread_2); // output: FishBread { flavor: 'redbean', price: 1000, base: 'flour' }
console.log(bread_3); // output: FishBread { flavor: 'milk', price: 1500, base: 'flour' }