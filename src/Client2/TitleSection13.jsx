import React from 'react';
import './TitleSection13.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title311">Come to Savana</h1>
        <p className='content311'>Savana by Adarsh is a forest of happiness. With trees and walkways and lakes, it’s  an oasis  in the city. Come to Savana, came easy. The project was sold out in no time. They came, they saw, they bought.</p>
        <div className="decorative-line322"></div>
        <div className="decorative-square322"></div>
        <h1 className="title222">Refreshing</h1>
        <div className="decorative-square323"></div>
        <div className="decorative-line323"></div>
        <p className='content333'>Homes by the lake. If that isn’t refreshing, we don’t know what is.</p>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

