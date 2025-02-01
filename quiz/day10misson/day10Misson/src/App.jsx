import './App.css'
import Welcome from './components/Welcome'

function App() {

  const welcomeProps = {
    name : "스위밍", // 사용자의 이름
    isMember : false, // 사용자의 가입여부
  }

  return (
    <>
      <Welcome 
        {...welcomeProps}
      />
    </>
  )
}

export default App
