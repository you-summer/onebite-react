//Quiz. 1
function printMovieReview({title,releaseYear,reviewers}) {
    // 코드를 입력하세요 ...
    console.log(title,releaseYear,reviewers)
    console.log(`제목 :  ${title}` );
    console.log("개봉 : ", releaseYear);
    if(reviewers.length===0){
        console.log("첫 번째 리뷰어 : 리뷰어 미정")
    }else {
        console.log("첫 번째 리뷰어 : ", reviewers[0]);
    }

  }
  
  printMovieReview({
    title: "하얼빈",
    releaseYear: 2024,
    reviewers: ["박정민", "김효빈", "이정환"],
  });
  
  // 출력 결과 :
  // 제목 : 하얼빈
  // 개봉 : 2023
  // 첫 번째 리뷰어 : 박정민
  
  printMovieReview({
    title: "위키드",
    releaseYear: 2024,
    reviewers: [],
  });
  
  // 출력 결과 :
  // 제목 : 위키드
  // 개봉 : 2024
  // 첫 번째 리뷰어 : 리뷰어 미정





//Quiz. 2
  function printAvgScore(students) {
    // 여기에 코드를 작성하세요 ...
    console.log(students)

    for(name in students){
        //console.log(name); //이름이 들어가있음
        let student = students[name];
        let sum = 0;
        for(let i = 0;  i<student.scores.length; i++){
            sum += student.scores[i]
        }
        let avg = sum / student.scores.length
        console.log(name, " : ", avg)
    }


  }
  
  printAvgScore({
    이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
    김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
    홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
  });
  
  // 출력 결과 :
  // 이정환: 30
  // 김효빈: 64
  // 홍길동: 58