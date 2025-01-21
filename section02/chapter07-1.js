// 6가지의 요소 ;조작 메서드

// 1.push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1);
//출력 결과 1,2,3,4,5,6,7
// push메서드는 변환된 길이를 반환함
console.log(newLength); //push 메서드 수행 이후인 변경된 배열의 길이인 7이 잘 출력됨


// 2. pop메서드
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem); // arr2의 맨 뒤에 있는 요소인 3이 제거되고 반환됨 / 출력결과 : 3
console.log(arr2); //출력 결과 [1,2]


// 3. shift 메서드
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3); // arr3의 맨 앞자리인 1이 제거되고 반환됨
                                // 출력결과 : 1, [2, 3]


// 4. unshift 메서드
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); //()소괄호 안에 배열의 맨 앞에 전달해줄 값을 적어줌
console.log(newLength2, arr4); // 출력값 4, [0, 1, 2, 3]
// push메서드와 동일하게 값을 추가하고 난 이후에 변경된 배열의 길이를 동시에 반환함 

// 3,4번인 shift와 unshift는 1,2번인 pop과 push보다 느리게 동작하게됨
// 그래서 되도록이면 push나 pop을 통해서 해결해주는게 좋다~


// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 바반환

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2,5);
// 사용 방법 slice 메서드를 호출하고 ()소괄호 안에 자르기 시작할 인덱스를 먼저, 두번째는 잘라낼 범위의 끝을 지정하는 인덱스+1을 작성하면됨
// arr5의 2번인덱스~4번인덱스까지 자르고 싶다면 arr5.slice(2,5) 이렇게 작성해 주면됨
// 2번 인덱스부터 시작해서 5번 인덱스 전까지 잘라냄
console.log(sliced); // 출력결과 [3, 4, 5]
// slice 메서드로 원본 배열을 잘라냈다고 하더라도 원본배열의 값이 바뀌진 않음
console.log(arr5); // 원본 배열의 값은 변경되지 않음
// slice의 두번째 인수를 생략하면 자르기 시작할 부분부터 끝까지 잘라냄
let sliced2 = arr5.slice(2);
console.log(sliced2); // 출력결과 [3, 4, 5]

// 배열의 뒤 부터 잘라내고 싶다 라고 한다면 slice()소괄호에 음수 값을 넣어주면 됨
let sliced3 = arr5.slice(-1);
console.log(sliced3); // 뒤에서부터 하나만 자르라고 해놨기 때문에 출력결과값이 [5]가 됨
// (-3)으로 하면 뒤에서부터 3개 잘라라 라고 해놨기 때문에 출력 결과는 [3, 4, 5]가 됨


// 6. concat 메서드
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // 출력 결과 [1, 2, 3, 4];

