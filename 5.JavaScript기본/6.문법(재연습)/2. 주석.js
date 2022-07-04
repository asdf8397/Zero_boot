/** 여러줄 주석입니다.
 * //: 한줄 주석입니다
 *
 */
/* 여러줄 주석입니다. */

console.log("Hello" /* 끼워넣기 */ + "World");
// 여기서는 끼워넣기를 사용할 수 있음 기능이 작동 함
console.log(`Hello /* 끼워넣기 */ World`);
// ``에서 끼워넣기를 사용할 수 없음 그대로 출력 됨

/** Represents a book
 * @constructor
 * @param {string} title - The title of the book
 * @param {string} author - The author of the book
 */

function Book(title, author) {
    let str = title;
    let num = author
    console.log(str);
    console.log(num);
}
Book("function String", 100);
// output: function String, 100
 
function Cost(Snack, Potato) {
    let Cost_Snack = Snack;
    let Const_Potato = Potato;
    console.log(Cost_Snack);
    console.log(Const_Potato);
}
Cost("$100", "$200");
