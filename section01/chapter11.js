// 함수선언

// function greeting () {
//     //여기안에는 함수가 실행하면되는 코드를 작성하면됨
//     console.log("안녕하세요");
// }

// console.log("호출 전");
// greeting();
// //이렇게 함수 호출할때는 소괄호를 꼭 호출해야됨
// console.log("호출 후");


//직사각형의 넓이를 구하는 함수
function getArea (width, heigth) {
    let area = width * height;

    console.log(area);
}

getArea(10, 20); // 여기서 10, 20을 인수라고 부르고 위의 width, hight는 매개변수라고 함
getArea(30, 20);
getArea(120, 200);



let area1 = getArea(10, 20); 
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
// 선언문을 호출문 보다 아래에 두어도 내부적으로 알아서 호이스팅해서 끌어올려 실행하기 때문에 문제가 없다
function getArea (width, heigth) {
    function another(){
        console.log("another");
        //이런식으로 함수 내부에 또 다른 함수를 만들 수 있다.
        //이런식으로 만들어진 함수를 중첩함수 라고 함
    }

    let area = width * height;

    return area; //반환하는 값이라고 해서 반환값이라고 함
    console.log("hello");//함수가 리턴문을 만나게되면 값을 반환하고 바로 종료됨 그래서 코드는 수행되지 않음
}