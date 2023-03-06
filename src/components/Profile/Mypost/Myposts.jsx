import React from "react";
import x from "./Myposts.module.css";
import Post from "./Posts/Post";

const Myposts = (props) => {
  let postElement = props.posts.map((p, i) => (
    <Post key={i} message={p.message} like={p.like} />
  ));

  return (
    <div className={x.postsBlock}>
      <div>
        <h3>My posts</h3>

        <div>
          <div>
            <div>
              <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          <div className={x.posts}>{postElement}</div>
        </div>
      </div>
    </div>
  );
};

export default Myposts;
