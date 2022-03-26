/* .__proto__ */

/* Object.prototype.__proto__ */
// __proto__는 사용 안하는게 좋으며 Object.getPrototypeOf, Object.setPrototypeOf를 사용하는게 낫다.

// __prto__는 표준이 아니기 때문에 getPrototypeof 또는 setPrototypeof를 사용하게는 낫다.
const obj = {}
const proto = Object.getPrototypeOf(obj);
console.log(proto);