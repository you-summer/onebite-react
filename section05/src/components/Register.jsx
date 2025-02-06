import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 1. 사용자의 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () =>{
    // const [name, setName] = useState("이름"); //이름을 저장할거 초기값으로는 빈 문자열 설정
    // const [birth, setBirth] = useState(""); // 생년월일을 저장 초기값으로는 빈 문자열 설정
    // const [country, SetCountry] = useState(""); // 국적 저장 
    // const [bio, setBio] = useState(""); // 자기소개 저장
    // 이 4개의 state를 하나의 객체로 묶어서 관리해줄거임
    const [input, setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:"",
    });
    // 모든 유저의 입력을 저장할거다 라고 해서 input, setInput으로 만들어줌

    const countRef = useRef(0);
    const inputRef = useRef();

    // let count = 0;

    const onChange = (e) => {
        countRef.current++;
        // count++;
        console.log("수정횟수", countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    const onsubmit = () =>{
       if(input.name === ""){
        // 이름을 입력하는 DOM 요소 포커스
        console.log(inputRef.current)
        inputRef.current.focus();
       } 
    };

    // const onChangeName = (e) =>{
    //     // setName(e.target.value);
    //     // setName이라는 함수는 이제 존재하지 않음
    //     setInput({
    //         ...input,
    //         name : e.target.value,
    //     })
    // };

    // const onChangeBirth = (e) =>{
    //     setInput({
    //         ...input,
    //         birth : e.target.value,
    //     })
    // }

    // const onChangeCountry = (e) => {
    //     setInput({
    //         ...input,
    //         country : e.target.value,
    //     })
    // }

    // const onChangeBio = (e) =>{
    //     setInput({
    //         ...input,
    //         bio : e.target.value,
    //     })
    // }

    return (
        <div>

        {/* <button onClick={()=>{
            refObj.current++;
            console.log(refObj.current)
        }}>ref +1</button> */}
            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
            </div>

            <div>
                <input name="birth" value={input.birth} type="date" onChange={onChange}/>
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}/>
            </div>


            <button onClick={onsubmit}>제출</button>
        </div>
    )
} 

export default Register;