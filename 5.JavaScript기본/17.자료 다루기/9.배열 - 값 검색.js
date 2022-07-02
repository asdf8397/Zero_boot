/* 9. 배열 - 값 검색 */
const members = ["현석","장현석","제로","베이스"];
console.log(members); // output: [ '현석', '장현석', '제로', '베이스' ]

let found = members.find(function(members) { 
    // find는 find(function(member))안에 있는 값을 찾아서 return한다 members안에서 "제로"가 있으면 "제로"가 나온다.
    return members === "제로"
});
console.log(found); // output: 제로

let find_word = members.find(function(word) {
    return word === "미미등급"
});
console.log(find_word); // output: undefined


const member = ["현석","장현석","제로","베이스","인강"];
const result = member.findIndex(function(i_got_it) {
    return i_got_it === "제로"
})
console.log(result); // output: 2
// findIndex는 배열로했을때 몇번째 자리인지 배열의 0, 1,2 이렇게 찾게 된다.

const member2 = ["현석","장현석","제로","베이스","인강"];
const result2 = member2.indexOf(function(i_got_it) {
    return i_got_it === "제로"
})
console.log(result2); // output: -1 // 배열이 없을때 -1로 나옴

const member3 = ["현석","장현석","제로","베이스","인강"];
const result3 = member3.findIndex(function(i_got_it) {
    return i_got_it === "제로"
})
console.log(result3); // output: 2 // 끝에서 배열로 몇번째 있는지 찾게됨

const member4 = ["현석","장현석","제로","베이스"];
const result4 = member4.includes("제로");

console.log(result4); // output: true /// 형식을 Boolean으로 한다.