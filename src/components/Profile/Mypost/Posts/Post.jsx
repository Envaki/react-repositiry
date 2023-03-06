import React from "react";
import x from "../Posts/Post.module.css";

const Post = (props) => {
  return (
    <div className={x.item}>
      <img src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
      {props.message}
      <div>
        <span>Like:</span>
        {props.like}
      </div>
    </div>
  );
};

export default Post;
