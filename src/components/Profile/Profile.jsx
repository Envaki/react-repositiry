import React from "react";
import x from "./profile.module.css";
import Myposts from "./Mypost/Myposts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  
  return (
    <div className={x.content}>
      <Profileinfo />
      <Myposts 
      posts={props.profilePage.posts} 
      addPost = {props.addPost}
      newPostText = {props.profilePage.newPostText}
      updateNewPostText = {props.updateNewPostText}
      />
      
    </div>
  );
};

export default Profile;
