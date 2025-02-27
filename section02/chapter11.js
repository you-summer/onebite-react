//동기란 여러개의 작업이 있을때 작업들을 순서대로 처리하는 방식을 동기적으로 처리 한다고 함
// 여러개의 작업을 순서대로, 하나씩 처리하는 방식
// 자바스크립트는 기본적으로는 모든 코드가 동기적으로 실행됨
/* 
  자바스크립트 엔진은 모든 코드를 순서대로 즉, 동기적으로 실행시킴
 */


/*
 비동기란?
 
 동기적이지 않다는 뜻으로 여러개의 작업이 있을때 작업들을 순서대로 처리하지 않는 방식
 여러개의 작업이 주어졌을때 앞선 작업이 종료되지 않아도 기다릴 필요 없이 다른 작업을 동시에 진행시키는게 가능하다
*/

console.log(1);
console.log(3);
//실행 결과 1 3 이 출력됨 이게 동기적으로 두 코드가 실행된거임


console.log(1);

setTimeout(function(){
    console.log(2)
},3000);

console.log(3);

//setTimeout 비동기적으로 작동하는 함수, 우리가 원하는 코드를 특정시간이 지난 이후에 비동기적으로 실행시켜주는 기능을 가지고 있음

/* setTimesout 작성방법
setTimeout(()=>{},3000)
두번째 인수로 전달한 숫자값에 해당하는 밀리세컨즈만큼 대기했다가 그 시간이 지나면 첫번째 인수로 전달한 callback함수를 실행시켜주게됨
*/

// 위의 코드는 console.log(1)먼저 실행하고 그 다음에 setTimeout실행하고 console.log(3)을 실행함
// setTimeout은 비동기적으로 작동하는 함수이기 때문에 3초를 세는 타이머만 실행시켜놓고 바로 다음라인으로 넘어감

// 자바스크립트 엔진은 쓰레드가 1개밖에 없음
// 여러개의 쓰레드를 활용하지 못하니까 동시에 여러가지 일을 처리하기 어려움
// 근데 어떻게 여러개의 작업을 동시에 처리할수있는걸까?
// 자바스크립트에서는 setTimeout함수같은 비동기작업들은 자바스크립트에 엔진에 있는 스레드가 실애하는게 아니라 webAPIs라는 브라우저가 직접 관리하는 별도의 공간에서 따로 실행이 되기 때문임
// WebAPIs라는건 간단히 말하면 웹 브라우저가 직접 관리하는 별도의 영역을 말함 이 영역은 실제로 자바스크립트의 비동기 작업들이 실행되는 영역임
// 브라우저에 탑재되어 있는 자바스크립트 엔진은 코드를 한줄씩 실행하다가 setTimeout같은 비동기 함수를 만나게되면 이 비동기 작업을 브라우저의 WebAPIs에게 실행해달라고 부탁함  
// 그러면서 타이머가 끝나면 실행할 콜백 함수까지 같이 넘겨줌 
// 그리고 나서 자바스크립트 엔진은 이 타이머를 기다리지 않고 그 아래에 있는 작업을 즉시 이어서 실행함
// 웹 APIs에 있는 타이머가 완료가 되면 웹 APIs가 전달 받았던 콜백함수를 자바스크립트 엔진에 돌려줌
// 자바스크립트 엔진은 돌려받으면 돌려받은 콜백함수를 실행시킴으로써 비동기 처리가 이루어지게 됨

// 자바스크립트 엔진은 WebAPIs라는 브라우저의 별도 영역 또는 별도 기능을 활용해서 비동기처리를 진행하기 때문에
// 스레드가 하나밖에 없음에도 여러개의 작업을 동시에 처리할수있는 것
