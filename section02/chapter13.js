// promise
/* 
날짜를 저장하는 Date객체처럼 특수한 목적을 위해서 존재하는 자바스크립트의 내장 객체
비동기 작업을 실행하고 그 결과를 처리하는 코드를 좀 더 효율적이고 편하게 작성할수 있도록 도와줌
promise는 setTimeout함수와 같은 비동기 작업들을 랩핑하는, 즉 감싸는 객체임
감싸고 있는 비동기 작업을 실행시켜 주거나 현재의 상태를 관리하거나 또는 비동기 작업의 결과를 저장해주거나
심지어는 여러 개의 작업을 병렬로 동시에 실행시켜 준다거나 아니면 다시 실행시켜주는 등의 이런 비동기 작업을 처리하는데 필요한 거의 모든 기능을 제공해주는 그런 객체
*/

/*
    promise의 효능
    - 비동기 작업 실행
    - 비동기 작업 상태 관리
    - 비동기 작업 결과 저장
    - 비동기 작업 병렬 실행
    - 비동기 작업 다시 실행
    - 기타 등등 ..
*/

// 오늘 배울건 여러가지 기능들 중에서도 가장 기본적이고 핵심적인 3가지 기능 (작업 실행, 상태 관리, 결과 저장) 에 대해서만 집중적으로 볼거임


/* 
    Promise의 3가지 상태

                    -해결(resolve)->    성공 (Fulfilled)
    대기(Pending)
                    -거부(reject) ->    실패 (Rejected)

    대기 : 아직 작업이 완료되지 않은 상태
    성공 : 비동기 작업이 성공적으로 마무리 된 상태
      ㄴ해결 : 비동기 작업이 대기 상태 였다가 작업이 성공적으로 완료되어서 성공 상태로 바뀌는 것
    실패 : 비동기 작업이 실패한 상태
      ㄴ거부 : 비동기 작업이 대기 상태 였다가 어떠한 이유로 실패해서 실패상태로 바뀌는 것



    ex) 유튜브 시청
    대기 : 유튜브 영상 로딩 중
    해결 : 영상 로딩이 성공적으로 완료되어서 시청 가능한 상태가 되어 가는 것
    성공 : 최종적으로 시청이 가능해진 상태 자체
    거부 : 영상 로딩이 실패하는 것 
    실패 : 로딩에 실패해서 시청이 불가능한 상태 자체
*/

// const promise = new Promise(function(resolve,reject){
//     // 비동기 작업 실행하는 함수
//     // executor 익세큐터?

//     setTimeout(() => {
//         console.log("안녕")
//         // resolve(); // 성공했음을 알림
//         reject("왜 실패했는지 이유...")
//     }, 2000);
// });

// setTimeout(() => {
//     console.log(promise)
// }, 3000);

/*
    중간 정리
  executor 함수에서 reject를 호출하게 되면 프로미스의 비동기 작업이 실패하게 되는거고
  resolve를 호출하게 되면 비동기 작업이 성공하게 되는거다
  각각 resolve와 reject 함수 모두 인수로 프로미스의 결과값을 전달해 줄 수 있다
*/


// 프로미스 객체를 이용하는 방법

// const promise = new Promise(function(resolve,reject){
//     // 비동기 작업 실행하는 함수
//     // executor 익세큐터

//     setTimeout(() => {
//         const num = null;

//         if(typeof num === "number") {
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다");
//         }
//     }, 2000);
// });

// 프로미스의 결과값을 우리가 직접 이용하기
// Then 이라는 메서드를 호출해야 됨
// -> 그 후에 라는 뜻을 가지고 있음
// executor 함수에서 resolve를 호출하게 되면 그 후에! then 메서드에 전달한 콜백 함수를 실행시켜줌
// 동시에 리졸브의 인수로 전달한 결과 값을 매개변수로 까지 제공해줌
// then 메서드를 이용하면 프로미스로 관리하는 비동기 작업의 결과 값을 언제든지 자유롭게 불러다가 이용할 수 있음

// promise.then((value)=>{
//     console.log(value)
// })

// num의 값이 숫자가 아니라 null이 들어간다면 then메서드는 실행되지 않음
// then메서드는 프로미스의 비동기 작업이 성공했을때만 호출되는 메서드이기 때문에 


// catch는 실패 버전의 then메서드 같은 것
// 프로미스가 실패했을 때 이 콜백 함수를 실행시켜 주게 됨
// promise.catch((error)=>{
//     console.log(error);
// })
// catch메서드가 실행 되면서 리젝트에 전달한게 콘솔에 잘 출력 됨

// promise객체를 이용할땐 then과 catch 메서드를 잘 활용하면 비동기 작업이 성공하거나 실패했을 때 결과값을 이용할 수 있다.


// promise의 강력한 기능
// 프로미스의 then 메서드는 프로미스를 한 번 다시 반환함
// then 메서드의 호출 결과가 프로미스를 반환한다는 것 
// 프로미스 체이닝이라고 함

// promise
//   .then((value)=>{
//     console.log(value)
//   })
//   .catch((error) => {
//     console.log(error);
//   })






//

function add10(num){
    const promise = new Promise(function(resolve,reject){
        // 비동기 작업 실행하는 함수
        // executor 익세큐터
    
        setTimeout(() => {
    
            if(typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });

    return promise;
}

add10(0)
  .then((result)=>{
    console.log(result);
    return add10(result);
  })
  .then((result)=>{
    console.log(result);
    return add10(result);
  })
  .then((result)=>{
    console.log(result);
  })
  .catch((error)=>{
    console.log(error);
  })