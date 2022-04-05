/* 프로퍼티 열거 */

const obj = {
    pro1: "value1",
    pro2: "value2",
    pro3: "value3",
    pro4: "value4",
};

for (const key in obj) { 
    // for in문 왼쪽에는 값이 들어오는 변수가 들어오고 오른쪽에는 열거될 대상이 들어온다
    /* for in문에서 obj의 값을 key에 넣어서 console.log()로 뿌리면
        pro1, pro2, pro3, pro4가 들어옵니다
    */
    console.log(key); // output: pro1, pro2, pro3, pro4 // 이렇게 나오는 이유는 key값을 가져왔기 때문

}


// 객체의 값을 가져오고 싶을땐 
console.log(obj.pro1);
console.log(obj.pro2);
console.log(obj.pro3);
console.log(obj.pro4);

console.log("");

console.log(obj["pro1"]);
console.log(obj["pro2"]);
console.log(obj["pro3"]);
console.log(obj["pro4"]);

console.log("");


const obj2 = {
    pro11: "value11",
    pro12: "value12",
    pro13: "value13",
    pro14: "value14",
};


for (const key in obj2) {
    console.log(key);
}

const prop11 = "prop11";
console.log(obj2[prop11]); // output: value11

        // ↓

for(const key in obj2) {
    console.log(obj2[key]);
}

// 이해 안되는 부분의 간단히 정리 까먹을수 있음 다시 간단히 정리해봄

/* for(const key in obj) {
    console.log(key)
} output: pro1, pro2, pro3, pro4가 나오는데


const prop11 = "prop11";은 console.log(obj[prop11]);은 output: value11이다
obj2[prop11]의 value를 출력하려고 했기때문에 

for(const key in obj2) {
    console.log(obj2[key]);
}에서 console.log(key)를 출력하면 obj2가 그냥 key에 담겨서 출력하면 pro11, pro12, pro13, pro14가
출력되지만 console.log(obj2[key]);를 출력하면 obj2안의 [key]인 pro11~pro14까지의
값들 value를 출력하게 된다. */


// BLOCK SCOPE
{
    let val = 1;
    {
        {
            {
                console.log(val); // output: 1
            }
        }
    }
}
// 여기서 val은 1이 된다 {}안에 없으면 global로서 바깥쪽을 찾게되고 최상단 let val = 1;을 출력하게된다.
// 객체도 마찬가지이다.

const obj3 = {
    pro_1: "value_1",
    pro_2: "value_2",
    pro_3: "value_3",
    pro_4: "value_4",
};

for (const key in obj3) {
    if(obj3.hasOwnProperty(key)) {
        console.log(obj3[key]); // output: value_1, value_2, value_3, value_4
    }
}
// 여기서 hasOwnProperty는 obj3이 value가 없을때 global로서 찾게 되지만 hasOwnProperty는 없을경우 안찾고 안나오게 설정하는 것