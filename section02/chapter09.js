// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name : "조연정", hobby : "수영"},
    {name : "김민정", hobby : "수영"},
    {name : "홍길동", hobby : "독서"}
];

const tennisPeople = arr1.filter((item) => {
    if (item.hobby === "수영") return true;
});

console.log(tennisPeople);


// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr)=>{
    return item * 2;
})

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // 결과값 a b c

// 숫자값으로 이루어진 배열이라면 정상적으로 작동하지 않음
// sort메서드는 배열을 사전순으로 정렬하기 때문에 숫자의 대소비교는 아니라서!!
// 숫자의 대소기준으로 정리하고싶다면 sort 메서드를 호출하면서 비교기준을 설정하는 콜백함수도 같이 넘겨줘야함

let arr31 = [10, 3, 5];
arr31.sort((a,b)=> {
    if (a > b){
        // b가 a 앞에 와라
        return 1; // -> b, a 배치
    } else if (a < b){
        // a가 b 앞에 와라
        return -1; // -> a, b 배치
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a,b 자리를 그대로 유지
    }
});

console.log(arr31);

// 반대로 내림차순으로 정렬하려면 조건을 반대로 설정해주면 됨
arr31.sort((a,b)=> {
    if (a > b){
        // a가 b 앞에 와라
        return -1; 
    } else if (a < b){
        // b가 a 앞에 와라
        return 1; 
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a,b 자리를 그대로 유지
    }
});
console.log(arr31);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);
// toSotred는 원본을 정렬하는게 아닌 정렬된 새로운 배열을 반환하는것


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-");
console.log(joined) //반환값 hi,im,winterlood 구분자를 바꾸고싶다면 바꾸고싶은 구분자를 넣어주면됨