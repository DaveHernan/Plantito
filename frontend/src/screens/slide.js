import React, {Component} from 'react';


function slide(){


return ( <div> 
  <div className="slideshow-container">
  <div className="mySlides fade">
    <div className="numbertext">1 / 3</div>
    <img src="/images/plant-logo.jpg" />
    <div className="text"></div>
  </div>
  
  <div className="mySlides fade">
    <div className="numbertext">2 / 3</div>
    <img src="/images/plant-logo.jpg" />
    <div className="text">Caption Two</div>
  </div>
  
  <div className="mySlides fade">
    <div className="numbertext">3 / 3</div>
    <img src= "/images/plant-logo.jpg"/>
    <div className="text">Caption Three</div>
  </div>
  
  </div>
  
  
  <div classNameNam="dot-but">
    <span className="dot"></span> 
    <span className="dot"></span> 
    <span className="dot"></span> 
  </div>
  </div>
  )
};

export default slide;