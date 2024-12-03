// 1. 콜백함수
function main(value){
    console.log(1);
    console.log(2);
    //console.log(value); // sub함수 자체가 출려고딤
    value(); //이렇게 해야 i am  sub가 출력됨
    console.log("end");
    // 콜백 함수는 메인함수가 언제든지 원하는 타이밍에 실행시킬수 있다.
}



// function sub(){
//     console.log("i am sub");
// }
// main(sub);
// 위에 코드를
main( () => {
    // console.log("i am sub");
})

// 2. 콜백함수의 활용
function repeat(count) {
    for (let idx = 1; idx <= count; idx++){
        console.log(idx);
    }
}

function repeatDouble(count) {
    for (let idx = 1; idx <= count; idx++){
        console.log(idx * 2);
    }
}

function repeatTriple(count) {
    for (let idx = 1; idx <= count; idx++){
        console.log(idx * 3);
    }
}
repeat(5);
repeatDouble(5);
repeatTriple(5);

//위의 함수는 중복코드를 발생하게 되어서 좋지 않은 방향으로 작업을 하게되는것
//이럴때 콜백함수를 사용하는것 코드 개선 가능

function repeat1(count, callback) {
    for (let idx = 1; idx <= count; idx++){
        callback(idx);
    }
}

repeat1(5, function (idx){
    console.log(idx)
});

repeat1(5, function (idx){
    console.log(idx * 2)
});

repeat1(5, function (idx){
    console.log(idx * 3)
});

 

