import { useState } from 'react';
import './App.css'
import CurrencyInput from './components/CurrencyInput';

function App() {

  const [state, setState] = useState({
    krw : 0,
    usd : 0,
  });

  const exchange = 1300; // 환율 1usd = 1300krw

  const onChange = (country, value)=>{
    
    console.log(country,value)
    if(country === "krw"){
      setState({
        krw : value,
        usd : value / exchange
      });
    }else{
      setState({
        krw : value * exchange,
        usd : value
      })
    }
  }

  return (
    <>
      <h1>환율 변환기 (KRW - USD)</h1>
      <CurrencyInput country={"krw"} onChange={onChange} value={state.krw}/>
      <CurrencyInput country={"usd"} onChange={onChange} value={state.usd}/>
    </>
  )
}

export default App
