import React from "react";
import x from "./../Dialogs.module.css";


const Message = (props) => {
  return (
    <div className={x.message}>
      {props.message},{props.id}
    </div>
  );
};



export default Message;
