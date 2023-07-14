import React from 'react';
import { Link } from 'react-router-dom';
import Style from "./Style.css";
import Bg from "./images/pexels-cottonbro-studio-5483064.jpg"
function Home() {
  return (
    <div className='header'>
        <div className="text-box">
        <h1>
         Satara's Biggest IT Institute of 10 Students
        </h1>
        <p>
          Our Aim To Make Students from No Where to Some Where
        </p>
        <Link className='hero-btn'>Visit To Know More</Link>
     </div>

    </div>
  )
}

export default Home
