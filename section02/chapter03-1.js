// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 기존 방식
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four=4] =  arr; //arr의 배열에 있는 원소들이 순서대로 들어감
console.log(one, two, three, four);

// 만약 3번째 원소는 변수에 저장하고싶지 않다 라면 그냥 3번째 변수를 지우면 됨
// 배열의 원소 개수를 넘어서서 four이라고 저장해도 오류가 발생하진 않고
// 대신에 저장된 값을 출력하면 undefined가 저장되어있음
// four=4 이렇게 저장해도 됨


// 2. 객체의 구조 분해 할당
let person = {
    name : "조연정",
    age : 33,
    hobby : "수영"
}

//기존방법
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let { 
    name,
    age : myAge, 
    hobby,
    extra = "hello"} = person;
console.log(name, myAge, hobby, extra)
//객체는 중괄호{}를 사용함
// 추가로 extra = "hello" 이런식으로 저장가능
// 객체 구조 분해 할당에서는 할당받는 변수의 이름 변경 가능
//age 라는 변수 말고 my age라는 변수에 할당받고 싶다라고 한다면 age : maAge 이렇게 받으면 됨


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// 기존방법
// const func = (person) =>{
//  person.name;
//  person.age;
// }

const func = function({name, age, hobby, extra}){
    console.log(name, age, hobby, extra)
}
func(person);
// 객체를 넘겼을때만 중괄호와 함께 구조분해 할당을 받을 수 있는거임


