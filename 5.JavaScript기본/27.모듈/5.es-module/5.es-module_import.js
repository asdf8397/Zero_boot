/* es-module(import) */
// es-module에서는 import만 써주면된다 그리고 import from "./어디서 가져왔는지 주소를 붙여주면됨"

import { a,hello } from "./5.es-module_export.js"; // 오류가 나옴
console.log(a); // output: a
console.log(hello()); // output: hello

/* 설명 */
// 간단하게 a와 hello()를 불러올 수 있음