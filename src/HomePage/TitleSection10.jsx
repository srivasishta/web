import React from 'react';
import './TitleSection10.css';
import { useNavigate } from "react-router-dom";

const TitleSection = ({ style }) => {
  const navigate = useNavigate()
  return (
    <div className="title-section1" style={style}>
      {/* Video Background */}
      <video autoPlay loop muted className="video-background">
        <source src="src/HomePage/trial demo reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      <div className="title-container">
        <h1 className="title18">
          <span className="word word1">Hello,</span>
        </h1>
        <h1 className="title19">
          <span className="word word2">We</span>
          <span className="word word3">are</span>
          <span className="word word4">Bask.</span>
        </h1>
        <svg
          className="decorative-line245"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 689 1"
        >
          <line x1="0" y1="0" x2="689" y2="0" />
        </svg>
        <svg
          className="decorative-line02"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 1"
        >
          <line x1="0" y1="0" x2="500" y2="0" />
        </svg>
        <svg
          className="decorative-line03"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 1"
        >
          <line x1="0" y1="0" x2="600" y2="0" />
        </svg>
        <svg
          className="decorative-line04"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 1"
        >
          <line x1="0" y1="0" x2="600" y2="0" />
        </svg>
        

        <h1 className="title1=29">
          <span className="word word5">We turn</span>
          <span className="word word6">fresh ideas </span>
          <span className="word word7">into</span>
          <span className="word word8">impactful </span>
          <span className="word word9">results </span>
          <p className='content90'>We are an ad agency that brings strategic thinking and bold ideas to the table, with an eye for creativity that would make your brand truly stand out. Whether
          it’s branding, digital strategy, or a standout visual, we take pride in turning fresh ideas into impactful results. </p>
          
          <h2 className="peep-show-heading">Peep Show</h2>
        </h1>
        <div className="decorative-square245" onClick={() => navigate("/Menu")}  ></div>
        
        <div className="decorative-square01"></div>
        <div className="decorative-square002"></div>
        
        <div className="decorative-square003"></div>
        <div className="decorative-square004"></div>
        <p className="square-text">We're a<br/> multidisiplinary<br/> studio</p>
        <div className="Digital">Digital</div> 
        <div className="Advertising">Advertising</div>
        <div className="Branding">Branding</div>
        <div className="Environmental ">Environmental Graphics</div>
       
       <div className="Production1">Production</div>
       <div className="Marketing">Marketng Consultancy</div>
       
        <div className="Business">Business Consultancy</div>
      
      </div>
    </div>
  );
};
TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;