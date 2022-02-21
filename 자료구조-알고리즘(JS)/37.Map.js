// Map
// 다양한 자료형의 Key를 허용하고, key_value 형태의 자료형을 저장 가능할 수 있는 Collection
// Map은 Object대비 비교하면 다양한 Key의 사용을 허용하고, 값의 추가/삭제 시 메서드를 통해 수행이 필요함
// 대표 속성(Property) 및 메서드(method)
/* 
    .... 생성자: new Map()
    .... 개수 확인: Map.size
    .... 요소 추가: Map.set(key,value)
    .... 요소 접근: Map.get(key)
    .... 요소 삭제: Map.delete(key)
    .... 전체 삭제: Map.clear()
    .... 요소 존재 여부 확인: Map.has(key)
    .... 그 밖에 메서드: Map.keys(), Map.values(), Map.entires()
*/


// 요소 추가/삭제
// 요소추가: Map.set(key, value), 요소접근: Map.get(key), 요소 전체삭제: Map.clear()
// 다양한 자료형을 key로 사용 가능하며, map.set 호출시 map이 반환되므로 체이닝(chaining)가능

let map = new Map();

// map.set은 map객체 안에 세팅한다고할때 .set을 써주게 된다.
map.set("name", "john");
map.set(123, 456);
map.set(true, "bool_type");

console.log(map);
// output: Map(3) {"name" => "john", 123 => 456, true => "bool_tye"}
// Map() <= 괄호안에 들어간 3의 숫자란 map.set으로 넣어준 객체들의 숫자들이다.
console.log(map.get(123)); // output: "john"
console.log(map.get("name")); // output: 456
console.log(map.get(true)); // output: bool_type
console.log(map.size); // output: 3 <= 이것은 map에 넣었는 property가 3개 이므로
// map.set("name", "john"), map.set(123, 456), map.set(true, "bool_type")에서 name 123, true는 key값이다

map.delete(123);
console.log(map); 
// output: Map(2) { 'name' => 'john', true => 'bool_type' }
// map.set(123 => 456)으로 지정한 부분이 없어짐

map.clear();
console.log(map); //output: Map(0) {} map.clear();는 map이 다 없어짐

map.set("name", "alice").set(123, 789).set(false, "bool_type");
console.log(map); 
// output: Map(3) { 'name' => 'alice', 123 => 789, false => 'bool_type' }
// map.clear(); 해주고나서 map.set으로 연달아서 map.set("name", "alice").set(123, 789).set(false, "bool_type"); 지정 가능함
