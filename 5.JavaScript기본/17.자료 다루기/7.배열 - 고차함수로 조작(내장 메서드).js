/* 고차함수로 조작(내장 메서드) */

/** 고차함수의 내장메서드들
 * map
 * filter
 * reduce
 */

// map
// map()은 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아서 새로운 배열을 반환합니다.
// HTML의 map은 지금의 배열을 새롭게 해서 반환할때 사용한다.

const langs = ["JS","HTML","CSS"];
const newLangs = langs.map(function(lang) {
    return lang + "언어"
})
console.log(langs); // output: ['JS','HTML','3.CSS']
console.log(newLangs); // output: ['JS언어','HTML언어','CSS언어']
/* langs를 .map(function)으로 하면 function에는 lang.map(function(lang))에는
langs의 배열이 들어가고 JS HTML CSS는 lang + 언어를 통해서 출력이된다
출력된 값은 [ 'JS언어', 'HTML언어', 'CSS언어' ]으로 출력됨 */

const langs_new = ["JS","HTML","CSS"];
const langs_NEW = langs_new.map(function(내맘대로) {
    return 내맘대로.toLowerCase() + "언어"
});

console.log(langs_new); // output: ['JS','HTML','3.CSS']
console.log(langs_NEW); // output: ['js언어','html언어','css언어']


/* filter */
// filter는 원하는 값만 추려서 출력할 때 사용함
const fil = ["JS","HTML","CSS",0,1,2,3];
const new_fil = fil.filter(function(el) {
    if (typeof el === "number") {
        return el;
    }
    // 설명
    /* new_fil을 설정하고 fil을 fil.filter(function(el))에 담는다
    if문으로 조건을 붙이는데 typeof el <=은 JS HTML 3.CSS 0,1,2,3,의 배열을 가리키고
    이것이 el === "number"일때 return el은 number이 되게 한다 */
}); 
console.log(fil); // output: ['JS','HTML','3.CSS',0,1,2,3]
console.log(new_fil); // output: [0,1,2,3]

const string = fil.filter(function(el) {
    if (typeof el === "string") {
        return el;
    }
    // 설명
    /* new_fil을 설정하고 fil을 fil.filter(function(el))에 담는다
    if문으로 조건을 붙이는데 typeof el <=은 JS HTML 3.CSS 0,1,2,3,의 배열을 가리키고
    이것이 el === "string"일때 return el은 string이 되게 한다 */
}); 
console.log(string); // output: ['JS','HTML','3.CSS']


/* filter를 간단하게 사용할때 */

const filter_1 = ["JS","HTML","CSS",0,1,2,3];
console.log(filter_1); // output: ['JS','HTML','3.CSS',0,1,2,3]
const numbers = filter_1.filter(function(el){
    if(typeof el === "number") {
        return true
        // return true는 el이 number 경우 [0,1,2,3]을 출력하고 false일때는 출력안함
    }
});
console.log(numbers); // output: [0,1,2,3]

const filter_2 = ["JS","HTML","CSS",0,1,2,3];
console.log(filter_2); // output: ['JS','HTML','3.CSS',0,1,2,3]
const string_2 = filter_2.filter(function(el) {
    if(typeof el === "string") {
        return true
        // return true일때는 string ['JS','HTML','3.CSS']를 출력하고 false일떄는 출력 안함
    }
});
console.log(string_2); // output: ['JS','HTML','3.CSS']


const filter_3 = ["JS","HTML","CSS",0,1,2,3];
const isNumber = function (el) {
    if(typeof el === "number") {
        return true
    }
};

const isString = (el) => typeof el === "string";

// 고차함수에서 filter를 사용해서 추출할 수 있음
// 고차함수에서 filter의 시작은 
        // 여기서 시작됨 ↓
const numbers_10  = filter_3.filter(isNumber); 
const strings_10 = filter_3.filter(isString);

console.log(numbers_10); // output: [0,1,2,3]
console.log(strings_10); // output: ['JS','HTML','3.CSS']


/* reduce */   /// reduce 모르겠음 다시 한번 볼 것
function sumTotal() {
    let temp = 0;

    for(let i = 0; i < arguments.length; i++) {
        temp = temp + arguments[i];   
    }
    return temp
}

sumTotal(1,2,3,4,5,6,7);
console.log(sumTotal());