// src/components/OrderEditor.jsx

import { useState } from "react";

const OrderEditor = () => {
    const [menu, setMenu] = useState("족발"); // 메뉴를 저장하기 위한
    const [address, setAddress] = useState(""); // 배달 주소를 저장하기 위한
    const [request, setRequest] = useState(""); // 배달 요청 사항을 저장하기 위한

    const onChangeMenu = (e) =>{
        setMenu(e.target.value);
    }
    const onChangeAddress = (e)=>{
        setAddress(e.target.value);
    }
    const onChangeRequest = (e) => {
        setRequest(e.target.value);
    }

    const onSubmit =()=>{
        alert(`주문이 완료되었습니다 메뉴 : ${menu}, 주소 : ${address}, 요청사항 : ${request}`)
        console.log(menu)
    }


    return (
      <div
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <h2>배달의민족 주문</h2>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            메뉴 선택
          </div>
          <select style={{ width: 300, padding: 5 }} onChange={onChangeMenu} value={menu}>
            <option value={"족발"}>족발</option>
            <option value={"떡볶이"}>떡볶이</option>
            <option value={"아이스크림"}>아이스크림</option>
            <option value={"샐러드"}>샐러드</option>
          </select>
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }} >
            배달 주소
          </div>
          <input
            style={{ width: 300, padding: 5 }}
            placeholder="주소) 서울특별시 xx동 .."
            onChange={onChangeAddress} value={address}
          />
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 요청사항
          </div>
          <textarea
            style={{ width: 300, padding: 5 }}
            placeholder="배달 요청사항을 써 주세요..."
            onChange={onChangeRequest} value={request}
          />
        </div>
        <div>
          <button
            onClick={onSubmit}
            style={{ width: 300, padding: 5 }}
          >
            주문 완료
          </button>
        </div>
      </div>
    );
  };

  export default OrderEditor;