// 간단한 계산 기능을 하는 코드들을 모아둔 Math모듈 이라고 부를 수 있음

//덧셈
export function add(a,b){
    return a + b;
}

//뺄셈
export function sub(a,b){
    return a - b;
}

// CommonJS 방식
// module.exports = {
//      add,
//      sub,
// };

// export {add, sub}

// 곱셈
export default  function multiply(a,b){
    return a * b ;
 }