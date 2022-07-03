/* 기본 한 줄 주석 */
// 기본 한 줄 주석

/* 여러 줄
 * 주석입니다. 
 */

console.log("Hello " /* 끼워넣기 */ + "World");

/**
 * Represents a book
 * @constructor
 * @param {string} title - The title of the book
 * @param {string} author - The author of the book
 */
function Book(title, author) {
    let print_A = title;
    let print_B = author;
    console.log(print_A);
    console.log(print_B);
}
Book(10, 10);