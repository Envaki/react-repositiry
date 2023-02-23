import React from 'react';
import x from './profile.module.css';
import Myposts from './Mypost/Posts/Myposts';

const Profile =()=> {

    return (
        <div className={x.content}>
        <div>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='im' />
        </div>
        <div className={x.img}>
        <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' alt='im' />
        ava + discription
        </div> 
        <Myposts/>  
      </div>
    )
}

export default Profile;