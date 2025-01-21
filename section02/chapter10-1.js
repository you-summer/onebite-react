// 1. Date 객체를 생성하는 방법
/*
  new라는 키워드와 함께 대문자 Date라는 내장함수를 호출해서 생성할 수 있음
  new라는 키워드와 함께 새로운 객체를 생성하는 Date같은 내장함수를 생성자라고 부름 
*/
let date1 = new Date(); // 생정자
console.log(date1); // 지금 현재시간을 출력하고 있음

// 특정날짜 또는 특정 시간을 기준으로 새롭게 생성하고 싶다라면면
let date2 = new Date("1997-01-07"); //()여기 안에 특정날짜를 넣어주면 됨
// 날짜 형식은 -가 아니여도 됨 1997.01.07 1997 01 07 1997/01/07(점,띄어쓰기,슬래시 가능)
console.log(date2); //Tue Jan 07 1997 09:00:00 GMT+0900 (한국 표준시)

// 시간 설정하는 방법
// 시간은 날짜 뒤에 / 넣어주고 10:10:10 이런식으로 넣어주면됨
let date21 = new Date("1997 01 01/10:10:10");
console.log(date21); //Wed Jan 01 1997 10:10:10 GMT+0900 (한국 표준시)

let date22 = new Date(1997,1,7,23,59,59); //이렇게도 가능
console.log(date22);


// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 기준이되는 시간은 UTC로 세계 모든 나라가 표준으로 사용하는 시간이 시작되는 지점
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);

console.log(date1, date4);


// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month, //현재 공부하는 시기는 2025년 1월임 근데 month가 0으로 나옴 왜 0으로 나올까?
    date,
    hour,
    minute,
    seconds
)

// 자바스크립트의 달은 0으로 시작하기 때문에 1월이 0으로 나오는거임 // 배열 인덱스와 비슷하다고 생각하면 됨
// 그래서 월은 +1을 해줘야됨



// 4. 시간 수정하기
date1.setFullYear(2023); //인수로 수정하고 싶은 연도를 전달하면 됨
date1.setMonth(2); //참고로 자바스크립트의 월은 0부터 시작한다고 했으니까 2를 전달하면 3월이 되겠구나 하고 수정하면 됨
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1); // 결과값 : Thu Mar 30 2023 23:59:59 GMT+0900


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //시간 제외 날짜만 출력됨 // Thu Mar 30 2023
console.log(date1.toLocaleString()); // 우리나라 언어에 맞게 출력됨 //2023. 3. 30. 오후 11:59:59

