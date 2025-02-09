import "./TodoItem.css"

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    function onChangeCheckbox(){
        onUpdate(id); // 체크박스를 클릭하면 onUpdate가 실행되고 인수로 id를 전달하도록 한다
    }

    function onClickDeleteButton(){
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            <input checked={isDone} type="checkbox" onChange={onChangeCheckbox}/>
            <div className={`content ${isDone ? "done" : ""}`}>{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

export default TodoItem;