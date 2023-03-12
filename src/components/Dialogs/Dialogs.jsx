import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/Dialogsitem";
import x from "../Dialogs/Dialogs.module.css";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d, i) => (
    <DialogItem key={i} name={d.name} id={d.id} img={d.img} />
  ));

  let messageElement = props.state.messagges.map((m, i) => (
    <Message key={i} message={m.message} id={m.id} />
  ));

  let postElement = React.createRef();
  let addPost = () => {
    let text = postElement.current.value;
    alert(text);
  };

  return (
    <div className={x.dialogs}>
      <div className={x.dialogsItem}>
        <div>{dialogElements}</div>
      </div>
      <div className={x.messages}>
        {messageElement}
        <textarea
          ref={postElement}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={addPost}>add post</button>
      </div>
    </div>
  );
};

export default Dialogs;
