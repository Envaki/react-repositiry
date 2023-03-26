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
      dispatch = {props.dispatch}
      newPostText = {props.profilePage.newPostText}
      />
      
    </div>
  );
};

export default Profile;
