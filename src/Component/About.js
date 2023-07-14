import React from 'react';
import Style from "./Style.css";
import Image from "./images/about.jpg"
import BG from './images/background.jpg'
import { Link } from 'react-router-dom';
function About() {
    return (
      <div>
      <div class="about-header">
              <h1>About us</h1>
        </div>
  
        <div className="about-content">
              <div className="col-1">
                  <h1>We are Largest IT Institute In Satara</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.blanditiis illo dolorem unde nihil, quod consectetur corporis? Ad qui voluptas, ipsum voluptate consectetur odio!</p>
                  <div>
                  <Link className="Btn">Explore Now</Link>
                  </div>
              </div>
              <div className="col-2">
                  <img src={Image} alt="img" />
              </div>
          </div>  
      </div>
    )
  }
  
  export default About
  