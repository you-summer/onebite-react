// async
// 함수 앞에 붙이는 키워드
// 어떤 함수를 비동기 함수로 만들어주는 키워드 
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() { // 서버로부터 유저의 데이터를 받아오는 함수
    return {
        name : "조연정",
        id : "jojoor201",
    };
}// 이제 이 함수는 async 키워드에 의해서 비동기 함수로 바뀜
// 그러니까 저 객체를 그대로 반환하는 함수가 아니라 이 객체를 결과 값으로 갖는 새로운 promise를 반환하는 함수로 변환된다는것

console.log(getData()); 
/*Promise {<fulfilled>:}
[[Prototype]]
: Promise
[[PromiseState]]
: "fulfilled"
[[PromiseResult]]
: Object
    id: "jojoor201"
    name: "조연정"
    [[Prototype]]
    : Object */ //이걸 반환함

// promise state는 성공(fulfilled)상태 // promise의 result 결과는 우리가 반환하도록 설정한 객체가 들어가있음 
// async 키워드를 함수 앞에 붙여주게 되면 간단하게 동기적으로 작동하는 함수를 비동기 작업을 하는 프로미스를 반환하는 함수로 바꿔줄수있음

/* 
  이때 async가 붙어있는 함수가 이런 일반적인 객체값을 반환하는게 아니라 
  return new Promise()라고 해서 애초에 프로미스를 반환하는 함수였다면
  이때는 별다른 기능을 하지 않고 그냥 프로미스 객체 자체를 반환하도록 내버려둠
*/

async function getData1() { // 서버로부터 유저의 데이터를 받아오는 함수
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                name : "조연정",
                id : "jojoor201"
            })
        }, 1500);
    })
}

// console.log(getData1()); 
// 이렇게 애초에 Promise를 반환하고 있는 비동기 함수였다면, 그때는 async 키워드가 별다른 일을 하지 않고, 그냥 Promise가 반환되도록 내버려둔다! 
// async는 프로미스를 반환하지 않는 함수에 붙여서 자동으로 해당함수를 비동기로 작동하도록 변환하는 기능제공



// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    /*
    기존방법
    getData1().then((result)=>{
        console.log(result);
    });
    */

    const data = await getData1();
    // then을 쓰지 않아도 getData1 함수가 반환하는 promise가 종료되기를 기다림
    // 이런식으로 일반적으로 함수를 호출하듯이 작성해주면
    // 데이터라는 변수에 이 getData1 함수가 반환하는 promise의 비동기 작업이 종료되기까지 기다렸다가
    // 종료되면 결과값을 data에 넣어주는 기능을 하게 됨
    console.log(data)
    // getData 비동기 작업의 결과 값인 객체 값이 그대로 data변수에 담겨서 이렇게 출력이 되는걸 볼 수 있음
    // 출력값 : {name: '조연정', id: 'jojoor201'}
    // async와 await을 이용하면 비동기작업을 마치 동기 작업을 처리하듯이 간결한 코드로 수행할 수 있음
};

printData();