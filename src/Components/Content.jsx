import '../Styles/Content.css';
import React from 'react';
import memesData from '../Data/memesData';

function Content() {
 

const [meme, setMeme]  =React.useState({
  topText:"",
  bottomText:"",
  randomImage: require('../images/image-take_money.png')
})

const [allMemeImages, setAllMemeImages] = React.useState(memesData)


function getMemeImage(){
  const memesArray = allMemeImages.data.memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  const url = memesArray[randomNumber].url;
  setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
  }))
}









function toggleImage(event){
  event.target.classList.toggle('img-content-dark')
}




  return (
    <div className='content-container'>
      <div className='input-container'>
        <input className='input-left' ></input>
        <input className='input-right'></input>
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
        src={meme.randomImage}
        onMouseEnter={toggleImage}
        onMouseLeave={toggleImage}
        className='img-content'  alt=" just a meme"
              
      />
     
    </div>
  );
}

export default Content;
