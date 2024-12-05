// 1. 상수 객체
//상수에 저장해 놓은 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
}

//animal = { a: 1}; //불가

animal.age = 2; //추가
animal.name = "까망이" //수정
delete animal.color; //삭제

console.log(animal);

// 상수는 새로운 값을 할당하지 못하는 변수
// 아예 새로운 값을 할당하는건 문제가 됨
// 반면 저장되어 있는 객체값의 프로퍼티를 수정하는건 아무런 문제가 되지 않음


// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person ={
    name : "조연정",

    //메서드
    sayHi : function(){ // sayHi : () => {} 이렇게 줄이는것도 가능함
        console.log("안녕!");
    },

    //메서드선언 //화살표 보다 더 단축된 형태
    sayHi1(){
        console.log("안녕!1");
    }

}

person.sayHi();
person["sayHi1"]();

// 메서드는 보통 객체의 동작을 정의하는데 사용됨
// 함수가 아닌 프로퍼티들이 이 객체의 정보를 갖고있다면 이런 함수 프로퍼티들은 메서드로써 객체의 동작을 정의한다