// 5가지 요소 순회 및 탐색 메서드
// 1. forEach 
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [ 1, 2, 3];

arr1.forEach(function(item, idx, arr){
    console.log(item, idx, arr); // item은 1, 2, 3 // idx는 인덱스의 값(반복횟수) // arr은 [1, 2, 3] 이런식으로 배열이 들어옴
    // 배열의 요소에 *2를 해주고 싶다면
    console.log(idx, item * 2); // 이렇게 해주면 됨 // 출력결과 : 0 2 / 1 4 / 2 6
})


let doubleArr = []; // doubleArr이라는 빈 배열을 만들어준 다음에 forEach메서드를 이용해서 arr의 모든 값에 곱하기 2를 해서 doubleArr 배열에 넣어 보도록 할거임
// 내가 한거
// arr1.forEach(function(item, idx, arr){
//     console.log(idx, item * 2)
//     doubleArr.push(item * 2);
// })

// 선생님이 한거
arr1.forEach((item)=> {
    doubleArr.push(item*2);
})

console.log(doubleArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메소드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3)
// includes를 호출하고 인수로는 우리가 arr2 배열에서 찾으려는 값
// 예를들어 3이렇게 넣어주면 이 배열에 3이라는 값이 있는지를 찾아서 그 결과를 반환함
console.log(isInclude); // 3이라는 값이 존재하기 때문에 true를 반환하고있음
//3이 아닌 존재하지 않는 값을 넣어주면 없다는 의미에서 false를 반환하게 됨


// 3. indexOf
// 특정 요소의 인덱스, 즉 위치를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); //2라는 값이 어디있는지 찾은 뒤에 이 요소의 인덱스를 반환하게 됨
console.log(index); // 2라는 값이 현재 1번 인덱스에 있다라고 콘솔에 1이 출력됨
// 만약에 arr3 = [2, 2, 2]일때 arr3.indexOf(2)를 하면 indexOf는 배열의 맨 앞에서 부터 탐색을 시작 하기 때문에 가장 첫번째로 찾아낸 요소의 인덱스를 반환하게 됨
// 결과값으로는 0을 출력하게 됨
// 존재하지 않는 값인 10을 출력해달라고 하면 존재하지 않는다는 의미로 -1을 반환하게 됨


// 4. findIndex
// 모든 요소를 순회하면서, 콜백 함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 1);

console.log(findedIndex);

// 없는 값을 넣으면 없다는 뜻에서 -1을 반환함


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환함
let arr5 = [
    {name : "조연정"},
    {name : "홍길동"},
];

// 이런 객체값들을 보관하는 배열이 있다고 했을때
const finded = arr5.find((item)=> item.name === "조연정");//findindex메서드와 동일하게 콜백함수를 전달함 
//arr5에서 이 조건을 만족하는 요소를 찾아서 인덱스를 반환하는게 아니라 요소 자체를 반환함
console.log(finded); //출력 결과 : {name:'조연정'};
