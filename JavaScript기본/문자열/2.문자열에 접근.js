const str = "ABC";
str.toLowerCase(); // toLowerCase()는 소문자로 바꿀때

const str2 = "abc";
str2.toUpperCase(); // toUpperCase()는 대문자로 바꿀때 사용함

console.log(str);
console.log(str.toLowerCase());

console.log(str2);
console.log(str2.toUpperCase());

const str3 = "AbCdEfGh";
console.log(str3.toLowerCase());
console.log(str3.toUpperCase());
console.log(str3.toLowerCase().toUpperCase());
console.log(str3.toLowerCase().toUpperCase().toLowerCase());

// charAt()은 string문자열의 배열로서 charAt()안에 들어가있는 배열순서로 출력
const string = "AABBCC";
console.log(string.charAt(0));
console.log(string.charAt(1));
console.log(string.charAt(2));
console.log(string.charAt(3));
console.log(string.charAt(4));
console.log(string.charAt(5));

// string.charAt()과 string[]은 같다 둘다 똑같이 배열 형식으로 문자열을 출력하게 된다.
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);
console.log(string[4]);
console.log(string[5]);

// includes
// includes()는 string안에 해당되는 문자가 포함되어 있는지 true, false로 나타내게 된다
const paragraph = 
"The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";
console.log(paragraph.includes(searchTerm)); // output: true

const Search_words = "oven";
console.log(paragraph.includes(Search_words)); // output: false

// indexOf
// indexOf()는 string객체 안에 해당 되는 문자가 어디에 있는지 Number로 어디서 시작되는지 배열로 나타내게 된다.
// 주의 단어로 찾으면 undefined로 나오게 되고 찾을때 그 단어의 낱개로 스펠링 하나 하나 배열로 찾아야한다
const search_text = "lazy";
console.log(paragraph.indexOf(search_text)); // output: 35

const search_new = "d";
const search_new_spell = "o";
const search_new_english_spell = "g";
console.log(paragraph.indexOf(search_new)); // output: 40
console.log(paragraph.indexOf(search_new_spell)); // output: 12
console.log(paragraph.indexOf(search_new_english_spell)); // output: 42
console.log(paragraph.indexOf(searchTerm)); // output: 40
console.log("");

// 배열의 자리에 있는 스펠링은 무엇인지 알고싶을때 사용함 => []
console.log(paragraph[40]); // output: d
console.log(paragraph[41]); // output: o
console.log(paragraph[42]); // output: g
console.log("");
console.log(paragraph[35]); // output: l
console.log(paragraph[36]); // output: a
console.log(paragraph[37]); // output: z
console.log(paragraph[38]); // output: y

