// for
//for (초기식; 조건식; 증감식){
// 조건식 : 언제까지 반복할건지
for(let idx=0; idx < 5; idx++){
    console.log("반복!")
}

for(let idx=1; idx <= 10; idx++){
    console.log(idx);
}


for(let idx=1; idx <= 10; idx++){
    if (idx % 2 === 0){
        continue;
        //컨티뉴를 만나게 되면 반복문내에 다른코드는 실행하지 않고 다음 반복회차로 넘어감
    }

    console.log(idx);

    if(idx >= 5){
        break;
    }
}