import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

function getMonthData(pivotDate, data) {
  //이번달이 시작되는 시간 년 월 일 시 분 초
  // beginTime이라는 변수에 저장되는 Date객체는 pivotDate의 연도와 월인데
  // 해당하는 월에 1일 0시 0분 0초 해당하는 date객체를 만들어서 저장한거임
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(function (item) {
    return (
      beginTime <= item.createdDate && item.createdDate <= endTime
    );
  });
}

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthData(pivotDate, data);
  // console.log(monthlyData);

  function onIncreaseMonth() {
    //날짜를 한달 뒤로 만들어 주는 기능 >
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
    );
  }
  function onDecreaseMonth() {
    //날짜를 한달 전으로 만들어 주는 기능 <
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    );
  }

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${
          pivotDate.getMonth() + 1
        }월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
