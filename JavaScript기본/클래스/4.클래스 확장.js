/* 클래스 확장(extends, 상속) */
// Super Class

class animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    getInfo() {
        return (
            this.name +
            "가(이)" +
            this.sound +
            " 소리를 낸다."
        );
    }
}

// Sub Class ___ 클래스의 확장
class friends extends animal {
    constructor(name, sound) {
        super(name, sound);
    }
}

const dog = new friends("개", "멍멍");
const cat = new friends("고양이", "냐옹");

dog.getInfo();
cat.getInfo();

dog.constructor.name;
cat.constructor.name;

dog instanceof friends;
dog instanceof animal;

const arr = [];

arr instanceof Array;
arr instanceof Object;