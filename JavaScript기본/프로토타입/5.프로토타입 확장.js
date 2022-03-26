/* 프로토타입 확장(extends, 상속) */

/** 잘모르겠음 한번더 봐야할듯 */

/**
 * 프로토타입 확장(extends, 상속)
 */

// super class
function animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

animal.prototype.getInfo = function() {
    return (this.name + 
        "가(이)" + 
        this.sound + 
        "소리를 낸다."
    );
};

// sub class
function Dog(name, sound) {
    animal.call(this, name, sound); // call은 명시적으로 animal을 바인딩 한다.
    // 바인딩: 구체적인 값을 할당하는 각각의 과정을 바인딩이라고한다.
    // .call(this, name, sound)에서 this는 Dog의 인스턴스이다.
}

Friend.prototype = Object.create(
    animal.prototype,
);
Friend.prototype.constructor = Friend;

const dog = new Friend("개", "멍멍");
const cat = new Friend("고양이", "냐옹");

dog.getInfo();
cat.getInfo();

console.log(dog.constructor.name);
console.log(cat.constructor.name);

console.log(dog instanceof Friend);
console.log(cat instanceof Friend);