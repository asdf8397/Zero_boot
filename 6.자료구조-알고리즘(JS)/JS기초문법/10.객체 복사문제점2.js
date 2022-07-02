// 깊은 복사(Deep copy) -1
// 재귀 함수를 이용한 깊은 객체 복사

let user = {
    name: "john",
    age7: 23,
    sizes: { height: 180, weight: 72},
};

function copyObj(obj) {
    let result = {};
    for(let key in obj) {
        if(typeof obj[key] === "object") result[key] = copyObj(obj[key]);
        else result[key] = obj[key]
    }
    return result;
}
let admin = copyObj(user);

admin.sizes.weight++;

console.log(admin.sizes.weight); // output: 73
console.log(user.sizes.weight); // output: 72


// 깊은 복사(Deep copy) -2
// JSON 객체를 이용한 깊은 복사, stringify는 객체를 문자열로 변환하는데 이때 원본 객체와의 참조가 끊김

let user2 = {
    name2: "john",
    age2: 23,
    sizes2: {
        height2: 180,
        weight2: 72,
    },
};
// stringfy: js object → string, parse: string → js object
let admin2_json = JSON.parse(JSON.stringify(user2));

admin2_json.sizes2.weight2++;
--admin2_json.sizes2.height2;

console.log(admin2_json.sizes2.weight2); // output: 73
console.log(admin2_json.sizes2.weight2); // output: 179
console.log(user2.sizes2.weight2); // output: 72
console.log(user2.sizes2.weight2); // output: 180