 // 스코프
 // -> 전역(전체 영역) 스코프 / 지역(특정 지역) 스코프
 // -> 전역 스코프 : 전체 영역에서 접근 가능
 // -> 지역 스코프 : 특정 영역에서만 접근 가능

 let a = 1; // 전역 스코프
 
 function funcA(){
    let b = 2; // 지역 스코프
    console.log(a);
 }

 funcA();
//  console.log(b); //b를 찾을 수 없다는 에러 뜸

if (true){
    let c = 1;
}
// console.log(c);dddddddd


for( let i = 0; i < 10; i++){
    let d = 1;
}
// console.log(d);

//중괄호 안에 선언된 변수는 다 지역스코프라고 생각하면 편함
//반복문 외부에서는 접근할 수 없다.