import './Portfolio.css'; 
import photo from '../images/dolphin.jpeg';
import React from 'react';
// import Image from 'react-image-resizer';


export default function Home() {
  return (
    <div>

      <div>
        <h1>Daria Pressley</h1>
        <p>
          Welcome to my portfolio!
        </p>
      </div>
      <div>
      <img className="photo" src={photo} alt={"Dolphin Photo"}/>
      </div>

    </div>

  );
}
