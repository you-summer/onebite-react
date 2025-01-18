// 1. 상수 객체
const animal= {
    type : "고양이",
    name : "나비",
    color: "black",
};
// 상수 선언후 저장값은 바꿀수가 없음

//animal = { a : 1}; 오류
animal.age = 21; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

console.log(animal);

// 이게 가능한 이유는 상수라는건 엄밀히 말하자면 새로운 값을 할당하지 못하는 변수임
// 아예 새로운 값을 부여하는건 문제가 됨.
// 저장되어있는 객체의 프로퍼티 값을 수정하는건 아무런 문제가 되지 않음


// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name : "이정환",
  
    // 메서드
    sayHi : function(){
        console.log("안녕!");
    },
} 

person.sayHi();
person["sayHi"]();