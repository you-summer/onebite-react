// 6가지의 요소 조작 메서드

// 1.push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);
// 여러개를 추가하고 싶다면 쉼표를 사용해서 추가해주면됨
arr1.push(5, 6, 7);

console.log(arr1)

// push 메서드는 추가하고 난 다음에 변환된 배열의 길이를 반환함
const newLength = arr1.push(8, 9);
console.log(newLength);
// 결과값은 변경된 배열의 길이인 9가 나옴


// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 제거된 요소를 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop()

console.log(poppedItem); // 반환값은 3
console.log(arr2); // 반환값은 [1,2]

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3); //반환값 1, [2, 3]

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2,arr4); // 반환값 4, [0, 1, 2, 3]

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 변환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 반환값 [3, 4, 5]
// 시작인 인덱스 2번과 끝까지 반환하고 싶다면 4가 아닌 그 다음 인덱스의 전까지 잘라주는거라 +1해서 써야됨
let sliced2 = arr5.slice(2); // 반환값 [3, 4, 5]
// n번부터 끝까지 잘라내서 반환하고 싶다면 뒷 숫자는 작성하지 않아도됨
let sliced3 = arr5.slice(-1); // 반환값 [5]
// 뒤에서 부터 잘라내고 싶다면 음수로 작성하면됨

console.log(sliced3);
// 주의할점 : slice로 원본 배열을 잘라냈다고 해도 원본 배열의 값이 바뀌진않음!


// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); //반환값 [1,2,3,4]
