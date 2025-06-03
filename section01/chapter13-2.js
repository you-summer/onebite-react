// 1. 콜백함수
function main(value) {
  value();
}

main(() => {
  //   console.log("i am sub");
});

// 콜백이라는게 우리 프로그래밍에서는 뒷전에 실행되는 또는 나중에 실행되는 이런 뜻
// 그래서

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
