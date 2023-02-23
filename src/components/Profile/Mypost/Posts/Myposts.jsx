import React from 'react';
import x from './Myposts.module.css';

const Myposts =()=> {

    return (
    <div className={x.content}>
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

export default Myposts;