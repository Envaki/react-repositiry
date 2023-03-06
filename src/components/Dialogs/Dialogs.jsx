import React from "react";
import Message from './Message/Message'
import DialogItem from "./DialogItem/Dialogsitem";
import x from "../Dialogs/Dialogs.module.css";

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map((d, i) => (
    <DialogItem key={i} name={d.name} id={d.id} />
  ));

  let messageElement = props.messagges.map((m, i) => (
    <Message key={i} message={m.message} id={m.id} />
  ));

  return (
    <div className={x.dialogs}>
      <div className={x.dialogsItem}>{dialogElements}</div>
      <div className={x.messages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
