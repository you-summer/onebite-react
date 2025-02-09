import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mokData = [
  {
    id : 0,
    isDone: false,
    content : "React 공부하기",
    date : new Date().getTime()
  },
  {
    id : 1,
    isDone: false,
    content : "빨래하기",
    date : new Date().getTime()
  },
  {
    id : 2,
    isDone: false,
    content : "노래연습하기",
    date : new Date().getTime()
  }
]

function App() {

  const [todos,setTodos] = useState(mokData);
  const idRef = useRef(3); // id의 고유한 번호 매기기위해서
  //초기값으로는 mokDate와 겹지치 않기 위해 일단 3으로 설정함

  const onCreate = (content) =>{
    const newTodo ={
      id: idRef.current++, //이렇게 id의 값을 하나씩 증가시켜주면됨
      isDone:false,
      content:content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos])
  }

  function onUpdate(targetId){
    // Todo State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수 : tods 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(todos.map((todo)=>{
      if(todo.id === targetId ){
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      }
      return todo; //id가 일치하지 않는 투두는 그냥 그대로 반환해주면됨 
    }))

  }

  function onDelete(targetId){
    // 인수 : todos 배열에서 targetId와 일치하는 Id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo)=>todo.id!==targetId))
  }

  return (
    <div className='App' >
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
