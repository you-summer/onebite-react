// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// null 아닌값을 찾아내는 null병합 연산자
console.log(var4); // var1는 null이고 var2는 10이기 때문에 10을 출력함

let var5 = var1 ?? var3;
console.log(var5); // 20이 출력됨

let var6 = var2 ?? var3;
console.log(var6);
// 둘 다 null,undefined값이 아닐때에는 첫번째 값을 반환함

// 실무에서 많이 사용됨
let userName = "조연정";
let userNickName = "swimming";

let displayName = userName ?? userNickName;
console.log(displayName);
// 유저네임이 비어있다면 유저닉네임을 반환 , 유저네임이 있다면 유저네임을 반환함



// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자 
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝" : "홀"
console.log(res);
// 1 조건식  2 참  3 거짓