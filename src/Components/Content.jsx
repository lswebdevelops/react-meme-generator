import '../Styles/Content.css';
import React from 'react';


function Content(){
    return(
        <div className='content-container'>
            <div className='input-container'>
            <input className='input-left' placeholder='shut up'></input>
            <input className='input-right' placeholder='and take my money'></input>
            </div>
           
                <button className='btn-meme'>Get a new meme image 
                <img className='img-troll-btn'
                 src={require('../images/image-trollmemehat.png')}
                />
                </button>
                <img className='img-content' src={require(`../images/image-moneyback.png`)} alt="money" />
            

        </div>
    )
}

export default Content;
