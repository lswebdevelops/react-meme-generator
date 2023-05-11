import "../Styles/Content.css";
import React from "react";
import memesData from "../Data/memesData";

function Content() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/3si4.jpg",
  });

  const [allMeme, setAllMeme] = React.useState(memesData);

  React.useEffect(()=>{

    fetch("http://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);

  function getMemeImage() {
    const memesArray = allMeme.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function changeText(event){
  const {name, value } = event.target;
  setMeme(prevText =>({
    ...prevText,
    [name]: value,
  }))
  }

  function toggleImage(event) {
    event.target.classList.toggle("img-content-dark");
  }

  return (
    <div className="content-container">
      <div className="input-container">
        <input
        name="topText"
        value={meme.topText}
        onChange={changeText}
        className="input-left"></input>
        <input
        name="bottomText"
        value={meme.bottomText}
        onChange={changeText}
        className="input-right"></input>
      </div>

      <button onClick={getMemeImage} className="btn-meme">
        Get a new meme image
        <img
          className="img-troll-btn"
          src={require("../images/image-trollmemehat.png")}
          alt="troll"
        />
      </button>
      <div className="image_meme_container">
      <h1 className="image_meme_first_phrase" >{meme.topText}</h1>
      <h1 className="image_meme_second_phrase">{meme.bottomText}</h1>
      <img
        src={meme.randomImage}
        onMouseEnter={toggleImage}
        onMouseLeave={toggleImage}
        className="img-content"
        alt=" just a meme"
      />

      </div>
     
    </div>
  );
}

export default Content;
