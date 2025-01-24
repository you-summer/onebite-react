const moduleData = require("./math");

console.log(moduleData.add(1,2));
console.log(moduleData.sub(1,2));

// 객체의 구조분해할당을 이용하면 아래 코드도 가능함
// const {add, sub} = require("/.math");

console.log(moduleData);