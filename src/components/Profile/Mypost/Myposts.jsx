import React from "react";
import x from "./Myposts.module.css";
import Post from "./Posts/Post";

const Myposts = (props) => {
  
  let postElement = props.posts.map((p, i) => (
    <Post key={i} message={p.message} like={p.like} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action  = {type: 'UPDETE-NEW-POST-TEXT', newText: text}
    props.dispatch(action);
  };
  return (
    <div className={x.postsBlock}>
      <div>
        <h3>My posts</h3>

        <div>
          <div>
            <div>
              <textarea
                onChange={onPostChange}
                ref={newPostElement}
                value={props.newPostText}
                cols="30"
                rows="5"
              />
            </div>
            <div>
              <button onClick={addPost}>Add post</button>
            </div>
          </div>
          <div className={x.posts}>{postElement}</div>
        </div>
      </div>
    </div>
  );
};

export default Myposts;
