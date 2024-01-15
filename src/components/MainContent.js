import React from 'react';
import Tilt from "react-parallax-tilt";
import './maincontent.css';
import sabrinaImage from '../assets/sabrina.png';

const MainContent = () => {
  return (
    <div className="main-content">
      
      <div className="content-container">
        <Tilt>
        <img src={sabrinaImage} alt="Sabrina" className='sabrina-image' /> 
        </Tilt>
        <h1>@sabrinamesquitaweb</h1>
        <p> Transformo idéias em sites de sucesso! </p>
      </div>
    </div>
  );
};

export default MainContent;
