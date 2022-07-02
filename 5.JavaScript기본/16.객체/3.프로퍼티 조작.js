/* 3. 프로퍼티 조각 */

const person = {
    firstName: "jang",
    location: "korea",
};
// 현재 person의 객체들
console.log(person.firstName); // output: 'jang'
console.log(person.location); // output: 'korea'
console.log(person); // output: { firstName: 'jang', location: 'korea' }

/* 추가 */
// 객체를 person속의 객체를 추가 할 수 있음

person.lastName = "hyeonseok";
console.log(person.lastName); // output: 'hyeonseok
console.log(person); // output: { firstName: 'jang', location: 'korea', lastName: 'hyeonseok' }

/* 수정 */
person.lastName = "hyeon_seok";
console.log(person.lastName); // output: 'hyeon_seok'
console.log(person); // output: { firstName: 'jang', location: 'korea', lastName: 'hyeon_seok' }


/* 삭제 */
// delete
delete person.location;
console.log(person.location); // output: undefined;
console.log(person); // output: { firstName: 'jang', lastName: 'hyeon_seok' }