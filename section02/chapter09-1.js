// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name : "조연정", hobby : "수영"},
    { name : "이정환", hobby : "수영"},
    { name : "홍길동", hobby : "테니스"},
];

// filter를 사용하면 배열 요소들 중에 hobby가 수영인 두 개의 요소들만 필터링하여 새로운 배열로 반환하도록 하는 기능을 만들 수 있음
// 콜백 함수를 이용해서 배열의 모든 요소를 순회하면서 조건을 만족하는 값들만 새로운 배열로 반환해주는 역할을 함
const swimPeople = arr1.filter(function(item){
    if(item.hobby === "수영")
        return true;
})
// const swimPeople = arr1.filter((item) => {
    // if(item.hobby === "수영")
// })}

console.log(swimPeople);
//출력 결과 : 2개의 요소만 필터링 되어 반환되고 있음
// [{ name : "조연정", hobby : "수영"}, { name : "이정환", hobby : "수영"}]

// filter메서드는 웹서비스 개발할때 특정 조건에 의해서 검색시키는 기능 혹은 카테고리별 필터 같은 기능을 만드는데 거의 필수적으로 사용됨



// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 =  arr2.map(function(item, idx, arr){
    // console.log(item, idx, arr)
    return item * 2;
})

console.log(mapResult1); // 1,2,3에 각각 2를 곱한 2,4,6이 배열로 새롭게 묶여서 반환이 되는걸 볼 수 있음
// 결론적으로 map메서드를 사용하면 원본 배열의 값들을 변형한 새로운 배열을 생성할 수 있음


// arr1배열에 있는 객체의 값들에서 name프로퍼티에 있는 이름 값들만 뽑아서 새로운 배열로 추출하는 기능을 만들어 볼것
// 예를 들어서 arr1의 배열에서 조연정, 이정환, 홍길동 이라는걸 묶어서 배열로 추출하는 기능을 만들어 볼것
let names = arr1.map(function(item, idx, arr) {
    //console.log(item, idx, arr)
    return item.name;
})
// arr1이라는 배열을 순회하면서 각각 item의 name프로퍼티 값들만 모아서 새로운 배열로 map메서드가 반환을 시켜주게 됨 
console.log(names); // 출력값 : ['조연정', '이정환', '홍길동']



// 3. sort
// 배열을 사전순으로 정렬하는 메소드
let arr3 = ["b", "a", "c"];
// 배열의 알파벳을 사전순으로 정리하고 싶다면
arr3.sort() //sort를 호출해주기만 하면 됨
console.log(arr3);// 결과값 ['a', 'b', 'c']
// sort메소드는 호출만 해도 배열의 요소들을 자동으로 정렬해줌
// 만약 [10, 3, 5]처럼 숫자로 이루어진 배열이라면 sort메서드가 정상적으로 동작하지 않음 결과[10, 3, 5]
// 왜그러냐면 sort는 사전순으로 정렬하는거기 때문에
// 숫자의 대소비교를 통해 정렬하는게 아니라 그냥 단순히 사전순으로만 정렬함 
// 숫자의 대소관계를 기준으로 정렬하고 싶다면 이때는 sort메서드를 호출하면서 콜백함수도 같이 넘겨줘야함

let arr31 = [10, 3, 5]

arr31.sort(function(a,b){
    if(a > b){
        //b가 a앞에 와야함
        return 1; // -> b, a 배치
        //sort함수에서 양수를 반환하게 되면 둘중 더 작은 값이 앞으로 가게됨
    }else if(b > a){
        //a가 b앞에 와야함
        return -1; // -> a, b 배치
    }else{
        // 두개의 값이 같은 값이라면 두 값의 자리를 바꾸지마라
        return 0; // a와 b의 자리를 그대로 유지
    }

})
console.log(arr31); //결과 : [ 3, 5, 10]
/*
 콜백함수에서는 두개의 배열 요소를 a,b로 받아서 
 뭐가 더 크고 뭐가 더 작은 값이라고 판단할건지 이 함수안에 설정해 줘야됨
 만약 숫자값을 기준으로 오름차순으로 정렬하고 싶다
  -> 조건문 이용 a>b 
*/

// 내림차순은 반대로 해주면 됨 

arr31.sort(function(a,b){
    if(a > b){
        // a가 b앞에 와야함
        return -1;
    }else if( b > a){
        // b가 a앞에 와야함
        return 1;
    }else{
        return 0;
    }
})
console.log(arr31); // 결과값 [10, 5, 3]




// 4. toSorted (가장 최근에 추가된 최신 함수)
// sort는 원본배열 자체를 정렬시키는 메서드
// toSorted는 원본배열은 냅두고 새로운 배열을 반환하는 메서드
let arr5 = ["c","a","b"]
const sorted = arr5.toSorted();

console.log(arr5); //원본배열에는 변화가 없음 ['c', 'a', 'b']
console.log(sorted); // 결과 ['a', 'b', 'c']
/*
  toSorted는 sort와 동일하게 배열을 사전순으로 정렬하지만 
  원본배열을 정렬하는게 아니라, 정렬된 배열을 새롭게 반환하는 함수다 라고 생각하면 편함
*/


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");
console.log(joined); //출력결과 : hi,im,winterlood
/*
  콤마는 separator(구분자)라고 하며 배열의 요소와 요소사이에 들어가는 문자를 말하는데
  구분자를 바꾸고 싶다면 join메서드의 인수로 바꾸고싶은 구분자를 넣어주면 됨
  join() <-소괄호 안에!
  join("-"), join("|"), join(" ")
*/