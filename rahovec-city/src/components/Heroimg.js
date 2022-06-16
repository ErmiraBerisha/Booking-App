import "./HeroimgStyles.css";

import React from 'react';

import IntroImg from "../assets/intro.jpg";

import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" 
            src={IntroImg} alt={""}
            />
        </div>
        <div className="content">
            <h1>WELCOME TO RAHOVEC</h1>
            <p>EXPLORE THE CITY OF FINE WINE, GRAPE AND FOOD</p>
            <div>
                <Link to="/things" className="btn">Things to Do</Link>
                <Link to="/contact" className="btn-light">Contact Us</Link>
            </div>


        </div>
    </div>
  )
}

export default Heroimg