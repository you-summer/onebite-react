// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

//console.log(num1 + num2);
//console.log(num1 - num2);
//console.log(num1 * num2);
//console.log(num1 / num2);
//console.log(num1 % num2);
// %처럼 나머지를 구하는 연산은 모듈러연산이라고 함

let inf = Infinity; //양의무한대
let mInf = -Infinity; //음의무한대

let nan = NaN;

//console.log( 1 * "hello");


// 2. String Type
let myName = "조연정";
//문자열은 무조건 "쌍따옴표" 해줘야함
//쌍따옴표 미사용시 변수명으로 인식함
let myLocation = "중계";
let introduce = myName + myLocation;

console.log(introduce);

let introductText = `${myName}은 ${myLocation}에 거주합니다.`;
//백틱..`` `${}`
console.log(introductText);
//이런 문법을 템플릿 리터럴 문법이라고 부름

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
//아무것도 집어넣지 않았을때 자동으로 할당되는 값
let none;
console.log(none); //출력값은 undefined
//언디파인드는 진짜 변수를 선언하고 아무런값도 넣지 않았을때
//자동으로 활당되는 값

//null은 우리가 직접 명시적으로 변수에 할당해줘야하는 값
//즉 개발자들이 직접 이 변수에는 아무런 값도 없다 라는걸 표현해주는것
//언디파인드는 이 변수를 미처 초기화하지 못했거나 존재하지 안흔 값을 불러오려고 할때 발생할수있는 값
 