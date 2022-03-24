/* 6. 배열 - 요소 병합 */
/* Array.prototype.concat(); */
// concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열로 반환합니다.

const Array = ["JS", "HTML","CSS"];
const New_Array = Array.concat(["TS", "JAVA"]);
console.log(Array); // output:
console.log(New_Array); // output:


const Array2 = ["JS", "HTML", "CSS"];
const New_Array2 = [...Array2, "TS", "JAVA"]
console.log(Array2); // output:
console.log(New_Array2); // output:

const Array3 = ["JS", "HTML", "CSS"];
const new_Array3 = ["TS", "JAVA", ...Array3];
console.log(Array3); // output:
console.log(new_Array3); // output: 