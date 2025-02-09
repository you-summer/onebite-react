import "./List.css"
import TodoItem from "./TodoItem"
import { useState } from "react"

const List = ({todos, onUpdate, onDelete}) =>{
    const [search,setSearch] = useState(""); //검색어를 저장하는 state

    function onChangeSearch(e){ 
        setSearch(e.target.value);
        // search 의 값이 바뀔때마다 list 컴포넌트가 리렌더링될테니까
        // 그때마다 Todos 배열에서 현재의 검색 결과에 해당하는 값들만 필터링해주면됨
    }

    function getFilteredData(){
        if(search === ""){ // search 의 값이 빈 문자열이라면 그냥 리턴해주면되는거니까!
            return todos;
        }
        // 그게 아니라면(search에 검색어가 있다면)
        // filter메서드를 이용해서 필터링된 todos 배열을 반환해주면됨
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase()))
        // todo의 컨텐츠에는 react공부하기, 빨래하기, 노래연습하기 이런 문자열이 있음
        // 문자열에 includes 메서드를 호출하게되면 인수로 전달한 값이(search) 문자열에 있는지 찾아서 있으면 True, 없으면 false를 반환함
        // search state에 보관된값이 React라면 그때는 'React 공부하기'라는 문자열에 React가 있으니까 true를 반환하게됨 
    }

    const filteredTodos =  getFilteredData(); // 이 함수를 컴포넌트가 렌더링될때마다 호출해주고 그 결과값을 filteredTodos라는 변수에 저장해서 
    // return문 안에서 Todos 대신에 filteredTodes를(필터링된 Todos) 호출해서 이용하도록 해주면됨

    return (
        <div className="List">
            <h4>Todo List🌱</h4>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
            <div className="todos_wrapper">
            {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
                })}
            </div>
        </div>
    )
}

export default List;