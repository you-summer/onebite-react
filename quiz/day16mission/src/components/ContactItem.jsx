import "./ContactItem.css";

import { memo } from "react";

function ContactItem({id,email,name,onDelete}) {

  function onClickDeleteButton(){
    onDelete(id)
  }

  return (
    
    <div className="ContactItem">
      <div hidden>{id}</div>
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onClickDeleteButton}>🗑️ Remove</button>
    </div>
  );
}


export default memo(ContactItem);