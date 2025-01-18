// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

//배열 안에는 어떤 값이든 자유롭게 넣을 수 있음 길이의 제한도 없음
let arrC = [1, 2, 3, true, "hello", null, undefined, ()=>{}, {}, []];
console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello";

console.log(item1, item2, arrC);
