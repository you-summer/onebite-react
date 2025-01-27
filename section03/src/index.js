// const moduleData = require("./math");
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));
// console.log(moduleData);

//객체구조분해할당
// const {add,sub} = require("./math"); // CommonJS
import mul, {add, sub} from "./math.js"

// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(2,3));


// 랜덤 컬러 라이브러리 사용
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);