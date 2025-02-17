import React from 'react';
import './TitleSection15.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title15">Our values</h1>
        <div className="decorative-line15"></div>
        <div className="decorative-line16"></div>
        <div className="decorative-line17"></div>
        <div className="decorative-line18"></div>
        <div className="decorative-square150"></div>
        <div className="decorative-square16"></div>
        <div className="decorative-square17"></div>
        <div className="decorative-square18"></div>
        <div className="decorative-square19"></div>
        <div className="decorative-square20"></div>
        <div className="decorative-square21"></div>
  
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

