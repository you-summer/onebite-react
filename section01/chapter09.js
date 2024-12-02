// 1. if 조건문 (if문)
let num = 4;

if(num >= 10){
    console.log("num은 10 이상입니다");
    console.log("조건이 참 입니다");
} else if(num>=5){
    console.log("num은 5 이상입니다")
} else if(num>=3){
    console.log("num은 3 이상입니다")
}
else{
    console.log("조건은 거짓입니다");
}

// 2. Switch 조건문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "owl";

switch (animal) {//스위치 소괄호안에는 변수가 들어감
    case "cat" : {
        console.log("고양이");
        break;
    }
    case "dog" : {
        console.log("강아지");
        break;
    }
    case "bear" : {
        console.log("곰");
        break;
    }
    case "snake" : {
        console.log("뱀");
        break;
    }
    case "tiger" : {
        console.log("호랑이");
        break;
    }
    default : {
        console.log("그런 동물은 전 모릅니다.");
    }
}
//일치하는 케이스가 없으면 아무런코드도 출력하지 않음
// 일치하는 케이스가 없을때 실행할 코드를 만들어 주는 방법도 있다
// defalt를 쓰면됨
// 어떤 변수의 값을 기준으로 각각 다른 코드를 실행시키고 싶다면 switch문
// 복잡한 여러개의 조건을 이용하고 싶다면 if문 