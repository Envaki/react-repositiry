import React from "react";
import x from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/Dialogs/" + props.id;
  return (
    <div className={x.dialog}>
      <NavLink to={path} className={(as) => (as.isActive ? x.active : " ")}>
        {props.name}
      </NavLink>
    </div>
  );
};


export default DialogItem;
