// 1. 배열 생성
let arrA = new Array() // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3];
console.log(arrC)

let arrC1 = [
    1,
    2,
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];
//배열 안에는 어떤 타입의 값이든 다 넣을 수있음
//길이 제한 없음

// 2. 배열 요소 접근
let item1 = arrC1[0];
let item2 = arrC1[1];
console.log(item1, item2);

arrC1[0] = "hello"; //특정 원소의 값을 수정하는것도 가능
console.log(arrC1);