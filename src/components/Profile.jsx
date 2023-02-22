import React from 'react';
import x from './profile.module.css';

const Profile =()=> {

    return (
        <div className={x.content}>
        <div>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='im' />
        </div>
        <div>
        <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' alt='im' />
        ava + discription
        </div>
      <div>
      My posts
      <div>
        new post
        <div className={x.posts}>
          <div className={x.item}>
            post 1
          </div>
          <div className={x.item}>
          post 2
        </div>
        </div>
      </div>
      </div>      
      </div>
    )
}

export default Profile;