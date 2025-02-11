import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action){
    console.log(state, action)
    // if(action.type === 'INCREASE'){
    //     return state + action.data
    // }else if(action.type === 'decrease'){
    //     return state - action.data
    // }
    switch(action.type){
        case 'INCREASE' : return state + action.data;
        case 'decrease' : return state - action.data;
        default : return state
    }
}

const Exam = () =>{
    // dispatch : 발송하다, 급송하다
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer,0);

    function onClickPlus(){
        // 인수 : 상태가 어떻게 변화되길 원하는지
        // -> 액션 객체
        dispatch({
            type :"INCREASE", //type이라는 프로퍼티에는 상태를 어떻게 변화시키길 원하는지
                             //INCREASE : 증가시키다 라는 뜻
            data : 1, //얼마나 증가시킬건지
        })
    }

    function onClickMinus(){
        dispatch({
            type:"decrease",
            data:1
        })
    }

    return <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
}
export default Exam;