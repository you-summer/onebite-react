import { useContext, useState } from "react";
import "./ContactEditor.css";
import ContactItem from "./ContactItem";
import { ContactDispatchContext, ContactStateContext } from "../App";

export default function ContactEditor() {

  const {onCreate} = useContext(ContactDispatchContext);

  const [state, setState] = useState({
    name:"",
    email:"",
  });

  function onChange(e){
   setState({
    ...state,
    [e.target.name] : e.target.value
   })
  }


  function onSubmit(){
    if(state.name==="" || state.email===""){
      alert("이름과 연락처를 입력해주세요")
      return;
    }
    onCreate(state.name, state.email)

    setState({
      name:"",
      email:""
    })
  }

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input 
          className="name" 
          placeholder="이름 ..." 
          onChange={onChange} 
          value={state.name} 
          name="name"
        />
        <input 
          className="contact" 
          placeholder="연락처(이메일) ..." 
          onChange={onChange} 
          value={state.email} 
          name="email"
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
