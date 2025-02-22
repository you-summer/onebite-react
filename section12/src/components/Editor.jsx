import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭 저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const getStringedDate = (targetDate) => {
  // 날짜 -> YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1; //초기값이 0임 그래서 +1해줘야됨
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

// section 태그는 div 태그와 이름만 다를뿐 기능은 동일함
const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  function onChangeInput(e) {
    // console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
    // console.log(e.target.value); // 입력된 값이 무엇인지?

    let name = e.target.name;
    let value = e.target.value;

    if (name === "createDate") {
      value = new Date(value);
    }

    setInput({
      ...input, //기존state값은 유지
      [name]: value,
    });
  }

  // //현재 선택된 감정이 몇번인지 임시로 저장하는 변수
  // const emotionId = 5;

  const onClickSubmitButton = () => {
    onSubmit(input);
  };
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createDate"
          onChange={onChangeInput}
          type="date"
          value={getStringedDate(input.createDate)}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_lise_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={function () {
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button
          text={"작성완료"}
          type={"POSITIVE"}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
