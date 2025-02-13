import './App.css'
import { useState, useRef, useReducer, useCallback, createContext , useMemo} from 'react'
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

function reducer(state, action){
  switch(action.type){
    case 'CREATE' : 
      return [action.data, ...state];
    case 'UPDATE' : 
      return state.map((item) => 
        item.id === action.targetId 
          ? {...item, isDone : !item.isDone} 
          : item
      );
    case 'DELETE' : 
      return state.filter((item) => item.id !== action.targetId);
    default : 
      return state;
  }

}

export const TodoStateContext = createContext(); //변화할 값을 담을 context
export const TodoDispatchContext = createContext();


function App() {

  const [todos, dispatch] = useReducer(reducer, mokData);
  const idRef = useRef(3); // id의 고유한 번호 매기기위해서
  //초기값으로는 mokDate와 겹지치 않기 위해 일단 3으로 설정함

  const onCreate = useCallback((content) =>{
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      }
    })
  },[])

  const onUpdate = useCallback((targetId) =>{
    dispatch({
      type:"UPDATE",
      targetId:targetId
    })
  },[])

  const onDelete = useCallback((targetId)=>{
    dispatch({
      type:"DELETE",
      targetId:targetId
    })
  }, [])

  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onDelete, onUpdate}
  },[]);

  return (
    <div className='App' >
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>


        <Editor/>
        <List/>

        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
