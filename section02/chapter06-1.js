// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for(let i=0; i <arr.length; i++){
  //  console.log(arr[i]);
}
// length라는 프로퍼티는 모든 배열이 다 가지고 있는 기본적인 프로퍼티로 배열의 길이를 저장하고있는 프로퍼티임

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++){
    // console.log(arr2[i]);
}

// 1.2 for of 반복문
for(let item of arr){
    // console.log(item);
}

// 작업하기에 편한 방식을 골라서 사용하면 됨!


// 2. 객체 순회
let person = {
    name : "조연정",
    age : 33,
    hobby : "수영",
}

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환  

let keys = Object.keys(person);
console.log(keys);

for(let i=0; i<keys.length; i++){
    // console.log(keys[i]);
}

for(let key of keys){
    const value = person[key];
    // console.log(key, value);
}


// 2.2 Object.values 
// -> 객체에서 value값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values); //조연정, 33, 수영이 들어가있음

for(let value of values){
    // console.log(value);
};

// 2.3 for in // 객체만을 위해 존재하는 특수한 반복문
for(let key in person){ //in 뒤에있는 person이라는 객체의 프로퍼티를 키를 key라는 변수에 할당함
    // console.log(key); //name, age, nobby가 들어옴
   const value =  person[key];
   console.log(key, value);

}


// for of는 배열에만!
// for in은 객체에만!
