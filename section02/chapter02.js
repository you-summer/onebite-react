// function returnFalse(){
//     console.log("False 함수")
//     return false;
// }

// function returnTrue() {
//     console.log("True 함수")
//     return true;
// }

// console.log(returnFalse() && returnTrue());
//f and무엇을 하든 이 결과값은 무조건 false임
//그래서 두번째 피연산자에는 아예 접근조차 할 필요 x
//그래서 함수호출자체를 아예 생략해버린거임

// console.log(returnTrue() && returnFalse());
//이때는 단락평가가 작동하지x
//true와 false 둘다 출력이 됨
//왜냐면 단락평가가 작동하지 않았기 때문에
//T and (true 혹은 false)라서 첫번째 값만으로는 확정이 나지 않은거임
//그래서 두번째 피연산자도 호출을 해봐야 아는거임

// console.log(returnTrue() || returnFalse());
// returnTrue의 결과가 true이기 때문에 2번째값은 호출할 필요가 없음
// 단락평가가 이루어지기 때문에!


// truthy falsy 도 적용할수 있음
// function returnFalse(){
//     console.log("False 함수")
//     return undefined;
// }

// function returnTrue() {
//     console.log("True 함수")
//     return 10;
// }

// console.log(returnTrue() || returnFalse());
// console.log(returnFalse() && returnTrue());




// 단락 평가 활용 사례

// function printName(preson) {

//     if(!person){
//         console.log("person에 값이 없음")
//         return;
//     }
//     console.log(person.name);
// }
// 지난 시간에 만들었던 식인데 오늘 배운 단락평가로 좀 더 쉽게 쓸 수 있음

function printName(person) {
    const name = person && person.name
    console.log(name || "person의 값이 없음");
}

printName();
printName({name : "조연정"})
