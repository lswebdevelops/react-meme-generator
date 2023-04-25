import '../Styles/Navbar.css';
import React from 'react';

function Navbar(){
    return(
       <div className='navbar-container'>
       <div className='icon-img-navbar-container'>
            <img src={require(`../images/image-trollmeme.png`)}          className='img-navbar-icon'/>
            <h1 className='h1-navbar'>Meme Generator</h1>
       </div>
        <h3 className='h3-navbar'>React Course - Project 3</h3>
       </div>
    )
}

export default Navbar;

