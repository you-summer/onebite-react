// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {}; //객체 리터럴 ( 대부분 사용 )

// 2. 객체 프로퍼티 (객체 속성)
let person = { // key : value
    name : "조연정",
    age : "32",
    hobby : "수영",
    extra : {},
    10 : 20, //숫자키도 사용가능
    "like cat" : true, // 키값에 띄어쓰기가 포함된경우 따옴표 사용해야함 
};
// 프로퍼티의 갯수는 제한이 없음 
// value에 들어오는 자료형의 값도 제한이 없다 문자,숫자,배열,객체 넣어도 상관 ㄴㄴ


// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근하는 방법 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 콘솔 결과 조연정
// 존재하지 않는 프로퍼티에 접근하려고 하면 ex)person.name2 콘솔결과는 undefined를 반환함

let age = person["age"]; //프로퍼티의 키를 꼭 쌍따옴표와 함께 문자열로 작성해야함
console.log(age);
// 이것도 똑같이 존재하지 않는 프로퍼티에 접근하려고 하면 undefined를 반환함

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "햄부기";


// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "쌀국수";


// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1); //콘솔에 true로 나옴
//존재하면 true 존재하지 않으면 false
let result2 = "cat" in person;
console.log(result2);



