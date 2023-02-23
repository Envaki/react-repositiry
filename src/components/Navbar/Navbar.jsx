import React from 'react';
import x from './navbar.module.css';


const Navbar =()=> {
    return (
      <nav className={x.nav}>
        <div className= {`${x.item} ${x.active}`}>
        <a href='#'>Profile</a>
        </div>
        <div className={x.item}>
        <a href='#'>Message</a>
        </div>
        <div className={x.item}>
        <a href='#'>News</a>
        </div>
        <div className={x.item}>
        <a href='#'>Music</a>
        </div>
        <div className={x.item}>
        <a href='#'>Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;