// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴


// 2. 객체 프로터티 (객체 속성)
let person = {
    name : "조연정",
    age : 32,
    hobby : "수영",
    job : "FE Developer",
    extra : {},
    10 : 20,
    "like cat" : true,
}
// 프로퍼티의 갯수는 제한이 없다

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); //name변수에 중간라인이 그려지는건 타입스크립트와 관련된 경고사항
//존재하지 않는 프로퍼티에 접근하면 오류나는게 아니라 undefined가 반환된다.

let age = person["age"]; //쌍따옴표와 함께 문자열로 작성해야함
console.log(age);
//괄호표기법 역시 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.

let property = "hobby";
let hobby = person[property];
console.log(hobby);  

// 3.1 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "햄버거";
console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜렛";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);//true를 반환함
console.log(result2);//false를 반환함
// in연산자를 활용하면 특정 객체에 특정 프로퍼티가 존재하는지 그 유무를 알수있다.

