import React from 'react';
import x from  './header.module.css';

const Header =()=> {

    return (
    <header className={x.header}>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fj0xguiKdBvzheum0vYrddRwRJ_3l3uqdd9VLpdQ2emVjz7VtRnFK8a2JaUUACGQfbc&usqp=CAU' alt='logo'/>
    </header>
    )
}

export default Header;