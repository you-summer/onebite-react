// 1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자
console.log(date1);//현재시간으로 찍힘

//특정날짜 혹은 특정시간으로 새롭게 생성하고싶다면
let date2 = new Date("1993-11-01/10:10:10"); // 1993/11/01 1993.11.01 이렇게 해도 됨
// 시간정보도 넣고 싶다면 /(슬래쉬)쓴 후에 시분초 적어주면됨
// new Date(1993, 11, 01, 23, 59 ,59) 이렇게 넣어도 제대로 작동됨
console.log(date2); //반환값 : Mon Nov 01 1993 09:00:00 GMT+0900 (한국 표준시)
// 시간까지 넣은 반환값 Mon Nov 01 1993 10:10:10 GMT+0900 (한국 표준시)

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds
);
//month의 값은 0부터 시작함 배열인덱스처럼 생각하면됨 그래서 +1해줘야함


// 4. 시간 수정하기
date1.setFullYear(2023); //인수로 수정하고싶은 년도 넣으면됨
date1.setMonth(2); //js의 월은 0부터 시작한다고 했으니까 실제로는 3월이 되겠구나 하고생각하면됨
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1); //반환값 Thu Mar 30 2023 23:59:59 GMT+0900 (한국 표준시)


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //시간은 제외하고 (시분초) 현재 날짜만 출력하기
console.log(date1.toLocaleString()); // 영어포맷말고 우리나라에서 사용하는 현지화된 포맷으로 출력
                                     // 반환값 2023. 3. 30. 오후 11:59:59
