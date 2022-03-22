/* instanceof */
// (객체)인스턴스 어떤 생성자로 생성된 것인지
// 문법: {} instanceof Object

const obj = {};
const arr = [];
const func = function() {};

obj instanceof Object;
arr instanceof Array;
func instanceof Function;
new Date() instanceof Object;

undefined instanceof Object;
null instanceof Object; // null => 원시값

// instanceof는 비교해서 <, >, = 등과 같이 비교해서 true, false를 내놓는다

/* 예시 */
/**
 * var Person = function(){ 
 * this.name = "unikys"; }; 
 * var inst = new Person(); 
 * inst instanceof Person; 
 * // === true inst instanceof Object; 
 * // === true typeof inst; // === 'object'
 */