// 5가지 요소 순회 및 탐색 메서드
// 1.forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach( function(item, idx, arr) {
    console.log(idx, item * 2);
})
// 반복문처럼 수노히하면서 매 반복마다 콜백함수 호출
// 매개변수=item 현재반복카운트=idx 전체배열의값=arr

let doubledArr = [];

arr1.forEach((item)=>{
    doubledArr.push(item*2);
});
console.log(doubledArr); //결과값 2,4,6

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude); //존재하기 때문에 반환값 : true
//존재하지 않는값을 넣으면 false를 반환함

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// let arr3 = [1, 2, 3];
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2);
console.log(index); //반환값1 1번인덱스에 있다!

//만약에[2, 2, 2] 배열에 찾으려는 값이 여러개 존재한다면 
// indexOf는 배열에 맨 앞에서부터 탐색을 시작하기 때문에
// 가장 첫 번째로 찾아낸 요소의 인덱스를 반환하게 됨
// 존재하지 않는값 ex)20 을 찾아달라고 한다면 존재하지 않는다는 의미로 -1 을 반환함


//  let objectArr = [
//     {name : "조연정"},
//     {name : "홍길동"},
// ];

// console.log(
//     objectArr.indexOf({name : "조연정"})
// );

// console.log(
//     objectArr.findIndex(
//         (item) => item.name === "조연정"
//     )
// );



// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item)=>{
    // if (item === 2) return true; // 반환값 : 1
    // if (item % 2 !== 0) return true; // 반홥값 : 0
    // 좀 더 간편하게 사용하려면 중괄호도 없애고
    // (item) => item %2 !== 0 이렇게 사용하면 됨
})

console.log(findedIndex);


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    {name : "조연정"},
    {name : "홍길동"}
]

const finded = arr5.find((item) => item.name === "조연정");

console.log(finded); //{name: '조연정'} 반환값!

