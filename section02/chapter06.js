// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i <arr.length; i++){
    console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++){
    console.log(arr2[i])
}

// 1.2 for of 반복문
// for of는 오직 배열을 순회하기 위해서만 존재하는 특수한 반복문
for(let item of arr){
    console.log(item);
    // of 뒤에 있는 arr의 변수의 값을 순서대로 하나씩 꺼내서 변수 item에다가 저장함
}

// 둘중 작업하기 편한방식 사용하면 됨


// 2. 객체 순회
let person = {
    name : "조연정",
    age : 32,
    hobby : "수영",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for(let i=0; i<keys.length; i++){
    console.log(keys[i]);
}

for(let key of keys){
    const value = person[key]
    console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

for(let value of values){
    console.log(value);
}


// 2.3 for in
for(let key in person){
    const value = person[key]
    console.log(key, value);
}

//for of 배열만 가능
//for in 객체만 가능