// 생성자
// 유사한 객체를 다중으로 만들때 사용되는 함수 (타 언어에서의 class 개념과 유사)
// 일반적으로 생성자 함수의 첫 글자는 대문자로 시작
// 생성자 함수로 객체 생성 시 new 연산자를 통해 객체 생성


// 생성자 함수 예제
// 생성자 함수와 new 연산자를 통해 빠른 객체 생성 가능

function FishBread(flavor, price) {
    this.flavor = flavor; // this.flavor(하나의 객체) = flavor은 FishBread안에 지정
    this.price = price; // this.price(하나의 객체) = price는 FishBread안에 지정
    this.base = "flour"; // FishBread안에 없음에도 따로 지정
}
// this.flavor는 flavor객체라는 뜻이고 this.flavor = flavor는 이것이 FishBread안에 있는 flavor를 변화시키겠다
// this.price는 price객체라는 뜻이고 this.price = price는 이것은 FishBread안에 있는 price를 변화시키겠다는 뜻

// FishBread(flavor, price) 2개이지만 this.flavor, price, base 3개를 지정했기에 let 3개가된다
// new FishBread는 this를 3개 해준 것 this.의 연장선
// 생성자 함수를 넣어줄땐 무조건 new를 넣어줘야함
let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1); // output: FishBread(flavor: cream, price: 1200, base: "flour")
console.log(bread_2); // output: FishBread(flavor: redbean, price: 1000, base: "flour")
console.log(bread_3); // output: FishBread(flavor: milk, price: 1500, base: "flour")