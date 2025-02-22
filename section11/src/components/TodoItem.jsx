import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onDelete, onUpdate } = useContext(TodoDispatchContext);

  function onChangeCheckbox() {
    onUpdate(id); // 체크박스를 클릭하면 onUpdate가 실행되고 인수로 id를 전달하도록 한다
  }

  function onClickDeleteButton() {
    onDelete(id);
  }
  return (
    <div className="TodoItem">
      <input
        checked={isDone}
        type="checkbox"
        onChange={onChangeCheckbox}
      />
      <div className={`content ${isDone ? "done" : ""}`}>
        {content}
      </div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem,(prevProps, nextProps)=>{
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // T -> Props 바뀌지 않음 -> 리렌더링 X
//     // F -> Props 바뀜 -> 리렌더링 O

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);
