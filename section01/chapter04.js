// 1. 변수
let age ;
//변수 선언과 동시에 값을 넣는걸 초기화한다고 함
//27이라는 값을 age라는 이름으로 불러서 사용가능
//console.log(age);

age =30;
//console.log(age);

//let age = 40;
//중복된 이름으로 선언 불가


// 2. 상수
//상수에서는 한번 저장된 값은 변경 불가
const birth = "1997.01.07";
//상수는 초기값이 필요함

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name

// 3-2. 숫자로 시작할 수 없다.
let name1; //숫자를 사용하는건 ㄱㅊ
//let 2name; //숫자로 시작할수 없음
// 변수의 중간이나 끝에 사용해야함 숫자를 정 써야한다면 앞에 특수기호를 붙여야함 _, $사용해서

// 3-3. 예약어를 사용할 수 없다.
// let let
// let if 

// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b;

//판매량을 사용한다면
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
//누가봐도 바로 이해할수있는 변수명을 설정해주는게 편함
//다른사람과 협업을 할때도!
