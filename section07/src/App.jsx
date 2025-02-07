import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState,useEffect, useRef } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false)

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log("mount")
  },[])

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    if(!isMount.current){ // 컴포넌트가 아직 마운트되지 않은 상황
      isMount.current = true; // 이제 마운트가 되었다는 의미로 true로 바꿔줌
      return // return으로 강제종료
    }
    console.log("update")
  })

  // 3. 언마운트 : 죽음

  // useEffect(()=>{
  //   console.log(`count:${count} / input : ${input}`)
  // },[count, input])
  // // 의존성 배열
  // // dependency array
  // // 줄여서 deps

  const onClickButton =(value)=>{
    setCount(count + value);
    // console.log(count)
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1> 
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null }
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section> 
    </div> 
  )
}

export default App
