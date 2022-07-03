/** JS type
 * -- 원시타입(Primitive)
 * -- 객체, 참조(Reference)
 */

const object = {
    name: "jang",
    age: 11,
    arr: [],
    func: function () {},
    child: {}
};
/** object는 메모리 꾸러미 name, age, arr, func, child를 담고있음
 * object 함수안에 목록을 넣을때 function func() {}으로 넣을 수 없음
 * 그래서 func: function() {}으로 넣을 수 있음
 */

console.log(object);
console.log(object.name);
console.log(object.age);
console.log(object.arr);
console.log(object.func()); // 함수는 목록에서는 나타나지만 따로 print할경우 undefined로 나타남
console.log(object.child);

const obj = {
    string: "string",
}
console.log(obj);
console.log(obj.string);
console.log(obj.string.toUpperCase());

const arr = [1,2,3];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr[3] = 1000;
console.log(arr); // 이렇게하면 배열 마지막에 추가됨
console.log(arr[3]);

console.log(object instanceof Object); // true
// object안에 Object가 들어있음 그래서 instanceof로 했을때 true로 나옴

function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);
console.log(auto instanceof Car);
console.log(auto instanceof Object);