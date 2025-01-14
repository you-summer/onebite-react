// 1. if 조건문 (if문)
let num1 = 4;

if(num1>=10){
    // console.log("num은 10이상입니다");
    // console.log("조건이 참 입니다!");
}
else if(num1 >= 5){
    // console.log("num은 5이상입니다.");
}
else if(num1 >= 3){
    // console.log("num은 3이상입니다.");
}
else{
    // console.log("조건이 거짓입니다.");
}
// 무조건 if로 시작해서 else로 끝나거나 if로 시작해서 else없이 끝나야함

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "owl";

switch (animal){ //소괄호 안에는 비교하고싶은 변수를 넣어주면 됨! 스위치의 소괄호에는 변수가 들어감
    case "cat" : {
        console.log("고양이");
        break;
    }
    case "dog" : {
        console.log("강아지1");
        break;
    }
    case "bear" :{
        console.log("곰");
        break;
    }
    case "snake" :{
        console.log("뱀");
        break;
    }
    case "tiger" :{
        console.log("호랑이");
        break;
    }
    default:{
        console.log("그런 동물은 모릅니다 ");
    }

}