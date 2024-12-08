// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //big integer라는 특수한 자료형에 해당하는값 아주큰 숫자를 저장하는곳에 사용됨 그냥 이런값이 잇구나 정도 생각하기


// if(!f5){
//     console.log("falsy");
// }

// 2. Truthy 한 값
// -> 7가지 falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t2) {
    console.log("Truthy");
}

// 3. 활용 사례

function printName(person){
    if(!person){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = {name : "조연정"};
// let person;
// let person = null;
printName(person);


