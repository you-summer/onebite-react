// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2 ;
console.log(var4);
// ?? 이게 병합연산자
// null이나 undefined가 아닌값을 찾아냄
// 그래서 console.log했을때 값은 10이 나옴
let var5 = var1 ?? var3 ; 
console.log(var5);
let var6 = var2 ?? var3 ;
//둘다 null이나 undefined가 아니면 첫번째 값이 출력됨
console.log(var6);

//ex) 회원관리시스템
let userName = "조연정";
let userNickname = "yousummer";

let displayName = userName ?? userNickname;
console.log(displayName);
// userName이 비어있다면 userNickname을 출력할 것이고
// userName이 설정되어 있다면 userName이 출력될 것이다.

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1); //결과값 boolean

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝, 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
//let res = 조건식 ? 참일때 : 거짓일때;
// var8을 2로 나눈값이 0인가? 참일때 출력하는값 : 거짓일때 출력하는 값

