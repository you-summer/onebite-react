// 1. 함수 표현식

function funcA(){
    console.log("funcA");
}

let varA = funcA;  
//console.log(varA); 이렇게 하면 함수 자체가 출력됨
varA(); //이렇게 해야 funcA가 출력된다.


varB();
//함수 표현식
let varB = function (){//익명함수
    console.log("funcB");
}



// 함수 표현식으로 써진 애들은 호이스팅이 되지 않음




// 2. 화살표 함수
let varC = (value) => { //function이 생략됨
    console.log(value);
    return value + 1;
}
console.log(varC(10));

//근데 여기서 값을 반환하기만 한다면 중괄호와 리턴문을 지워줘도됨
// let varC = () => 1; 그냥 1이라는 값을 반환하는 함수임
