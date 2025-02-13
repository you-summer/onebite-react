import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext} from "../App";

const Editor = () =>{
    const {onCreate} = useContext(TodoDispatchContext);

    const [content, setContent] = useState("");
    const contentRef = useRef();

    function onChangeContent(e){
        setContent(e.target.value);
    }

    function onKeyDown(e){
        if(e.keyCode === 13){ //엔터 눌렀을때 onSubmit이 실행되도록!
            onSubmit();
        }
    }

    function onSubmit(){
        if (content === ""){ //컨텐트에 입력한값이 빈문자열이면 강제로 리턴시키면됨
            contentRef.current.focus(); // 컨텐츠값이 비어있을때 focus주기위함
            return;
            // 그러면 추가 버튼이 클릭되었을때 content상태의 값이 빈 문자열이라면 input태그에 아무것도 입력하지 않은것!
            // 그래서 onCreate 함수를 호출하지 않도록 리턴해주면됨
        }
        onCreate(content);
        setContent("");
    }


    return (
        <div className="Editor">
            <input 
                ref = {contentRef}
                value={content} 
                onKeyDown={onKeyDown}
                onChange={onChangeContent} 
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
        
    )
}

export default Editor;