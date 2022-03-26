/* 3. 명시적 바인딩 */

/** 명시적 바인딩
 * call
 * apply
 * bind
 */

var person = {
    name: "현석",
    sayName: function() {
        return this.name + "입니다";
    },
};


const zero = {
    name: "베이스",
    sayName: function() {
        return this.name + "입니다";
    },
};

// console.log(window.person); // output: {name: "현석", sayName: f}
// console.log(window.zero); // output: error

const person_num2 = {
    name: "동영",
    sayName: function() {
        return this.name + "입니다";
    },
};

const zero_num2 = {
    name: "베이스",
    sayName: function() {
        return this.name + "입니다";
    },
};


function sayFullName(firstName) {
    return firstName + this.sayName()
};

// .call()로 호출한다.
const result = sayFullName.call(person_num2,"김"); // person_num2을 해주면 person_num2에 "김"이 적용되고
console.log(result);
const result2 = sayFullName.call(zero_num2, "JANG"); // zero_num2를 해주면 JANG이 적용됨
console.log(result2);




/* apply */

const person_num3 = {
    name: "동영",
    sayName: function() {
        return this.name + "입니다";
    },
};

const zero_num3 = {
    name: "베이스",
    sayName: function() {
        return this.name + "입니다";
    },
};

function sayFullName_Num2(firstName) {
    return arguments[1] + this.sayName()
};

const result_num2 = sayFullName_Num2.apply(person_num3, ["장", "JANG"]);
const result_num3 = sayFullName_Num2.apply(zero_num3, ["제로", "ZERO"]);

console.log(result_num2);
console.log(result_num3);


/* bind */

const person_num4 = {
    name: "동영",
    sayName: function() {
        return this.name + "입니다";
    },
};

const zero_num4 = {
    name: "베이스",
    sayName: function() {
        return this.name + "입니다";
    },
};

function sayFullName_Num3(firstName) {
    return firstName + this.sayName();
}
// bind는 의미 그대로 묶어 놓는 것

const sayFullNamePerson = sayFullName_Num3.bind(person_num4);
const sayFullNamezero = sayFullName_Num3.bind(zero_num4);


console.log(sayFullNamePerson("KIM")); // output: KIM동영입니다
console.log(sayFullNamezero("JANG_JANG")); // output: JANG_JANG베이스입니다