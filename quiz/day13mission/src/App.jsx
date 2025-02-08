import { useState } from 'react'
import './App.css'
import CurrencyInput from './components/CurrencyInput'

function App() {
  const [state, setState] = useState({
    krw : 0,
    usd : 0
  })

  const exchange = 1300; //환율 1usd = 1300krw

  const onChange = (currency,value) =>{
    if(currency === "krw"){
      setState({
        krw : value,
        usd : value / exchange,
      })
    }else{
      setState({
        krw: value * exchange,
        usd : value,
      })

    }
  }

  return (
    <div>
      <h1>환율 변환기(KRW-USD)</h1>
      <CurrencyInput currency="krw" value={state.krw} onChange={onChange}/>
      <CurrencyInput currency="usd" value={state.usd} onChange={onChange}/>
    </div>
  )
}

export default App
