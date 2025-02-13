import { useReducer, useRef, useCallback, createContext, useMemo  } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

const mockData = [
  {
    id:0,
    name : "이정환",
    email : "king199777@gmail.com"
  },
  {
    id:1,
    name : "스위밍",
    email: "test@email.com"
  },
  {
    id:2,
    name : "리액트",
    email: "react@email.com"
  }
]

function reducer(state, action){
  switch(action.type){
    case "CREATE" : 
      return [action.data, ...state];
    case "DELETE" :
      return state.filter((contact)=>contact.id!==action.targetId);
    default :
      return state;
  }
}

function App() {

  const [contact,dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3);

  const onCreate =useCallback((name, email)=>{
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        name : name,
        email : email
      }
    })
  },[]);


  const onDelete = useCallback((targetId) => {
    dispatch({
      type : "DELETE",
      targetId : targetId
    })
  },[])

  const memoizedDispatcheds = useMemo(
    ()=>({ onCreate, onDelete})
    ,[]
  )

  return (
    <div className="App">
      <ContactStateContext.Provider value={contact}>
        <ContactDispatchContext.Provider value={memoizedDispatcheds}>
        <h2>Contact List</h2>
        <section>
          <ContactEditor />
        </section>
        <section>
          <ContactList />
        </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>

    </div>
  );
}

export default App;
