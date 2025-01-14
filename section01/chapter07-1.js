// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
// 곱셉 나눗셈 모듈러 연산자는 덧셈과 뺄셈보다 우선순위가 높음

let num6 = 1 + 2 * 10;
//곱셈이 우선순위가 높기 때문에 결과는 21이됨
// 1 + 2에 우선순위를 주고 싶다면 ()소괄호를 이용하면 된다 이때 결과는 30
console.log(num6);

// 3. 복합 대입 연산자 // 산술연산자와 대입연산자가 복합되어있다
let num7 = 10;
// num7 = num7 +20; // 기존방법
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
console.log(num7)

// 4. 증감 연산자
// 값을 1씩 늘리거나 줄일때 사용
let num8 = 10;
console.log(--num8); // 전위 연산 // 콘솔출력값 9
console.log(num8--); // 후위 연산 // 콘솔출력값 9 다음라인부터 적용되는거라 9가 출력됨
console.log(num8); // 후위연산이 적용되어서 콘솔에 8이 출력됨

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

console.log(or,and,not);
// true false false가 출력됨
// or -> 둘중에 하나만 참이여도 참
// and -> 둘 다 참이어야 참
// ! -> 반전시키는것


// 6. 비교 연산자
let comp1 = 1 === 2; // 같은 값인지 비교하는 동등비교연산자 
let comp2 = 1 !== 2; // 비동등 비교 연산자 
console.log(comp1, comp2);
// == 두개만 써도 가능하나 값의 자료형까지 같은지 비교가 안됨
// 1 == "1"; 이렇게 했을때 값 자체로만 비교하기 때문에 결과는 true가 나옴

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6); //결과값 true true

 