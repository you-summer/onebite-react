// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

//기존방법
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// let [one, two, three] = arr;
// console.log(one, two, three);

// let [one, two] = arr; //두개도 가능
// console.log(one, two);

// let [one, two, three, four] = arr;
// console.log(one, two, three, four); //출력값은 초기화되지 않은 변수처럼 undefined가 저장되어있음


let [one, two, three, four = 4] = arr;
console.log(one, two, three, four); // 결과값 1,2,3,4


// 2. 객체의 구조 분해 할당
let person = {
    name : "조연정",
    age : 32,
    hobby : "수영",
}

// 기존방법
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

//let {name, age, hobby} = person 
//각각 개체의 프로퍼티를 키값을 기준으로 변수에다가 저장 가능
//console.log(name, age, hobby);
// 객체는 중괄호{}를 이용한다

// 배열의 구조분해 할당 처럼 존재하지 않는 프로퍼티를 구조분해할당으로 받으려고 하면 undefined가 저장된다

let {
    age : myAge, //myAge라는 ㅂ변수에 할당받고싶을때 
    hobby, 
    name, 
    extra = "hello"
} = person;

console.log(name, myAge, hobby, extra);


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

// 기존방법
//const func = (person) =>{
    // person.name;
    // person.age;
//}

const func = ({ name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
    //결과값 : 조연정 32 수영 undefined
}

func(person);