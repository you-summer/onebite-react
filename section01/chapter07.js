// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;
console.log(num6);

// 3. 복합 대입 연산자
//복합되어 있는 대입 연산자
// 산술연산자와 대입연산자가 복합되어 있다 라고 생각하면됨
let num7 = 10;
// 기존방법 : num7 = num7 + 20;
num7 += 20;
num7 -= 20; 
num7 *= 20;
num7 /= 20;
num7 %= 20;
console.log(num7);

// 4. 증감 연산자
let num8 = 10; 
num8++; //1만 늘리고싶다면
console.log(num8);
num7 *= 20;
console.log(++num8); //전위 연산
console.log(num8++); //후위 연산
//덧셈 말고 뺄셈도 가능함

// 5. 논리 연산자
//boolean의 값을 다룰때 사용
let or = true || false ;
//or는 둘중에 하나만 참이면 참

let and = true && false;
//두개가 모두 true여야 참

let not = !true;
//true라면 false로 false라면 true로 바꿔줌

console.log(or,and,not); //결과 true false false


// 6. 비교 연산자
let comp1 = 1 === 2;
//1과 2가 같은 값인지 비교

let comp2 = 1 !== 2;
//두개의 값이 서로 같지 않은지 비교하는 비동등비교연산자

console.log(comp1, comp2); //결과 false true
// 왜 =이 3개나 들어가는지?
// 2개만 써도 가능한데 한가지 문제가 있음
// 이렇게 ==두번만 써서 비교하게 되면 자료형까지 같은지는 비교가 안됨
 
//ex
let comp3 = 1 == "1";
let comp4 = 1 === "1";
//이렇게 했을때 그냥 값 자체로만 비교하기 때문에 true가 반환됨
// =3개일때는 자료형이 다르기 때문에 false가 나옴
// 자료형이 다를때는 다른값으로 보기 때문에 =2개대신 =3개 쓰는게 권장되는 방식

let comp5 = 2 > 1;
let comp6 = 2 < 1;
console.log(comp5, comp6)

let comp7 = 2 >= 2;
let comp8 = 2 <= 2;
console.log(comp7, comp8); //결과 참, 참









