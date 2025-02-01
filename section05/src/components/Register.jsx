import { useState } from "react";
// 간단한 회원가입 폼
// 1. 사용자의 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () =>{
    const [name, setName] = useState("이름"); //이름을 저장할거 초기값으로는 빈 문자열 설정
    const [birth, setBirth] = useState(""); // 생년월일을 저장 초기값으로는 빈 문자열 설정
    const [country, SetCountry] = useState(""); // 국적 저장 
    const [bio, setBio] = useState(""); // 자기소개 저장

    const onChangeName = (e) =>{
        setName(e.target.value);
    };

    const onChangeBirth = (e) =>{
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        SetCountry(e.target.value);
    }

    const onChangeBio = (e) =>{
        setBio(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} placeholder={"이름"} />
            </div>

            <div>
                <input value={birth} type="date" onChange={onChangeBirth}/>
            </div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea value={bio} onChange={onChangeBio}/>
                {bio}
            </div>
        </div>
    )
}

export default Register;