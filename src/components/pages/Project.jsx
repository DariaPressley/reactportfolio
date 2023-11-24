import React from 'react';


export default function Project() {
  return (
    <div>
      <h1>Portfolio</h1>


    <div>
      <p>
        <a href="https://evening-castle-00790-6ebb6c3c82fe.herokuapp.com" target="_blank">
          GiftGenius!
        </a>
      </p>
      <img className="projectPhoto" src={'/images/giftgenius.jpg'} alt={"GiftGenius"}/>
      <p>
        <a href="https://dariapressley.github.io/project-earworm/" target="_blank">
          Project Earworm
        </a>
      </p>
      <img className="projectPhoto" src={'/images/earworm.jpg'} alt={"Earworm"}/>
      <p>
        <a href="https://murmuring-taiga-79602-011f1c7742f6.herokuapp.com" target="_blank">
          CodeMingle
        </a>
      </p>
      <img className="projectPhoto" src={'/images/codemingle.jpg'} alt={"CodeMingle"}/>
    </div>


    </div>
  );
}
