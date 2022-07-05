/* toLowerCase 대문자를 소문자로 */
const str_Low = "ABC";
const LowerCase = str_Low.toLowerCase();
console.log(str_Low); // ABC
console.log(LowerCase); // abc
console.log(str_Low.toLowerCase()); // abc

console.log("");

/* toUpperCase 소문자를 대문자로 */
const str_UP = "abc";
const UpperCase = str_UP.toUpperCase();
console.log(str_UP); // abc
console.log(str_UP.toUpperCase()); // ABC
console.log(UpperCase); // ABC

console.log("");

/* charAt()은 string 문자열의 배열로서 charAt()안에 들어가 있는
* 배열순서로 출력*/
const string = "AABBCC";
console.log(string.charAt(0)); // A
console.log(string.charAt(1)); // A
console.log(string.charAt(2)); // B
console.log(string.charAt(3)); // B
console.log(string.charAt(4)); // C
console.log(string.charAt(5)); // C

console.log("")
/* string.chartAt()과 string[]은 같다 둘다 똑같이 배열 형식으로 문자열
* 을 출력하게 된다.
* */
// const string = "AABBCC";
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);
console.log(string[4]);
console.log(string[5]);

/** includes
 * includes()는 string안에 해당되는 문자가 포함되어 있는지
 * true, false로 나타내게 된다.
 */
const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
console.log(paragraph.includes("dog")); // true
const searchTerm = "dog";
console.log(paragraph.includes(searchTerm)); // true

const Search_words = "oven";
console.log(paragraph.includes(Search_words)); // false
console.log(paragraph.includes("oven")); // false

const Looking_for = "over";
console.log(paragraph.includes("over")); // true
console.log(paragraph.includes(Looking_for)); // true

/** indexOf
 * indexOf()는 string객체 안에 해당되는 문자가 어디에 있는지
 * Number로 어디서 시작되는지 배열로 나타내게 된다.
 * 주의 단어로 찾으면 undefined로 나오게 되고 찾을때 그 단어의 낱개로 스팰링
 * 하나 하나 배열로 찾아야한다.
 */

// paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const search_text = "lazy";
console.log(paragraph.indexOf("lazy")); // 0에서 부터 35번째 위치에 있다고 나옴
console.log(paragraph.indexOf(search_text)); // 0에서 부터 35번째 위치에 있다고 나옴

console.log("");

const search_new = "d";
const search_new_spell = "o";
const search_new_english_spell = "g";
console.log(paragraph.indexOf("d")); // 40
console.log(paragraph.indexOf(search_new)); // 40
console.log(paragraph.indexOf("o")); // 12
console.log(paragraph.indexOf(search_new_spell)); // 12
console.log(paragraph.indexOf("g")); // 42
console.log(paragraph.indexOf(search_new_english_spell)); // 42

/** 배열의 자리에 있는 스펠링은 무엇인지 알고 싶을때 사용함 => []
 */
console.log(paragraph[0]); // T
console.log(paragraph[40]); // d
console.log(paragraph[41]); // o
console.log(paragraph[42]); // g

console.log("");

console.log(paragraph[35]); // l
console.log(paragraph[36]); // a
console.log(paragraph[37]); // z
console.log(paragraph[38]); // y