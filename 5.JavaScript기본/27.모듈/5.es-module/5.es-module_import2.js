// import { a, hello } from "./5.es-module_export";
        // ↑ 원래 import{a, hello } 어떤걸 import할지 불러올 코드를 {} 안에 넣어줘야하지만 
        
        // * as i처럼 간단하게 대상을 지정한 코드를 지정할수 있음
        // ↓
import * as i from "./5.es-module_export2";

// console.log(a);
// console.log(hello());
//      ↓ 이런식으로 변경해 줄 수 있다.
console.log(i.a)
console.log(i.hello());