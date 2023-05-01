import '../Styles/Content.css';
import React from 'react';
import memesData from '../Data/memesData';

function Content() {
 

  const [memeImage, setMemeImage] = React.useState("");

 
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url)


    
    }



  // function darkenImage(event) {
  //   event.target.classList.add('img-content-dark');
  // }

  // function lightenImage(event) {
  //   event.target.classList.remove('img-content-dark');
  // }
//using toggle instead:
function toggleImage(event){
  event.target.classList.toggle('img-content-dark')
}
 
  return (
    <div className='content-container'>
      <div className='input-container'>
        <input className='input-left' placeholder='shut up'></input>
        <input className='input-right' placeholder='and take my money'></input>
      </div>

      <button 
        onClick={getMemeImage}
        className='btn-meme'
      >
        Get a new meme image 
        <img 
          className='img-troll-btn'
          src={require('../images/image-trollmemehat.png')}
          alt='troll'
        />
      </button>

      <img  
        // onMouseEnter={darkenImage} 
        // onMouseOut={lightenImage}
        onMouseEnter={toggleImage}
        onMouseLeave={toggleImage}
        className='img-content' 
        // src={memeImage} 
        //if the meme can't load bring the image: 
        src={memeImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = require(`../images/image-moneyback.png`);
        }}
        alt="meme"
              
      />
     
    </div>
  );
}

export default Content;
