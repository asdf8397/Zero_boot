/* 깊은 복사(Deep copy) -1 */
// 재귀 함수를 이용한 깊은 객체 복사

****** 잘 모르겠음(깊은복사) - 1

let user = {
    name: "John",
    age: 23,
    sizes: {height: 180, weight: 72},
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

console.log(admin.sizes.weight);
console.log(user.sizes.weight);

/* 깊은 복사(Deep copy) -2 */

let user2 = {
    name2: "John",
    age2: 23,
    sizes2: {
        height: 180,
        weight: 72,
    },
};
// stringfy: js object → string, parse: string → js object
let admin2_json = JSON.parse(JSON.stringify(user2));

admin2_json.age2++;
admin2_json.sizes2.height++;
--admin2_json.sizes2.weight;

console.log(admin2_json.age2);
console.log(admin2_json.sizes2.height);
console.log(admin2_json.sizes2.weight);