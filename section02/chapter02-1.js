// 단락 평가 활용 사례

function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name : "조연정"});

//T||T 일때는 앞의 값을
// T&&T 일때는 뒤의 값이 반환됨