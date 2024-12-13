// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
// console.log(arr2);
// 4와 5사이에 arr1의 값들을 넣어주고 싶을때 원래 사용하던 방법은 위와 같음

// 배열을 그대로 쓰는건 위험하기 때문에 다른 방법이 필요함

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);
// ... 이 바로 스프레드 연산자 

// 스프레드 연산자는 객체에서도 사용 가능함
let obj1 = {
    a : 1,
    b : 2,
};
let obj2 = {
    ...obj1,
    c : 3,
    d : 4,
}
console.log(obj2);


function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
    //결과값 1 2 3
}

funcA(...arr1);


// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
function funcB(one, two, ...ahmumal){//배열로 전달받음
    console.log(ahmumal);
    //one, two를 적어주면 여기에 받아온 배열의 첫번째 두번째 값이 들어가고 나머지값이 ...ahmumal에 들어가게 됨
}

funcB(...arr1);



