let map = new Map();
// map.set은 map객체 안에 세팅할때 .set을 사용하게 해준다.

// map.set
map.set("name","john"); //'name' => 'john',
map.set(123, 456); // 123 => 456,
map.set(true, "bool_type"); // true => 'bool_type',
// map.set("김") // '김' => undefined
console.log(map);

// map.get
console.log(map.get(123)); // output: 456 / map안의 123제거
console.log(map.get("name")); // output: john / map안의 name제거
console.log(map.get(true)); // output: bool_type / map안의 true제거
console.log(map.size); // output: 3 / map으로 지정한게 몇개인가 3

map.delete(123);
console.log(map); // map안의 123, 456 제거
// output: Map(2) { 'name' => 'john', true => 'bool_type' }


map.clear();
console.log(map);  // map(0){} / map.clear();는 map에 세팅된것들 제거

map.set("name","alice").set(123, 789).set(false, "bool_type");
console.log(map);

/* Map 반복문 */
// Collection 객체인 Map이 가지고 있는 iterator속성을 이용하여 for ... of구문을 통해 반복문 수행 가능

let recipe_juice = new Map([
    ["strawberry", 50], // ["key값", value값]
    ["banana", 100],
    ["ice", 150],
]);
console.log(recipe_juice);

for(let item of recipe_juice.keys()) console.log(item);
// output: strawberry, banana, ice

for(let amount of recipe_juice.values()) console.log(amount);
// output: 50, 100, 150

for(let entity of recipe_juice) console.log(entity);
// output:[ 'strawberry', 50 ],[ 'banana', 100 ],[ 'ice', 150 ]

// entries: 프로퍼티뿐 아니라 가지고 있는 값도 모두 배열 형태로 변환한다.

console.log(recipe_juice.entries); // [Function: entries]


let recipe1_juice = new Map([
    ["strawberry", 50],
    ["banana", 100],
    ["ice", 150],
]);

let recipe1_juice_obj = Object.fromEntries(recipe1_juice);
console.log(recipe1_juice_obj); // output:{ strawberry: 50, banana: 100, ice: 150 }

let recipe1_juice_kv = Object.entries(recipe1_juice_obj);
console.log(recipe1_juice_kv); // output: [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]

let recipe1_juice_map = new Map(recipe1_juice_kv);
console.log(recipe1_juice_map); // output: Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
// Map(3)으로 묶음