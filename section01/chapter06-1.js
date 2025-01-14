// 1. 묵시적 형변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);
// 콘솔에 결과값으로 1020이 출력됨
// 무조건 형변환이 일어나는건 아니고 하나만 형변환했을때 오류가 발생하지 않고 연산이 잘 종료될수 있는 경우에만 묵시적 형변환이 일어남


// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10+strToNum1);
//콘솔에 결과값으로 20이 잘 출력됨
// 문자열을 숫자로 변환하기 위해서는 내장함수인 Number를 이용하면 됨

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2); //결과값으로 10 출력함
// 문자열이 포함되어 있다면 parseInt를 사용해야함
// 그러나 숫자 앞에 문자가 있다면 (ex. dskfqew10개) 형변환이 잘 이루어지지 않을수 있음
// 숫자가 앞쪽으로 나와 있어야 한다!


// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + " 입니다");
// 20 입니다가 출력됨
// 문자열이기 때문에 두개가 이어붙어져서 출력되는거다!
