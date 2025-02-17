import React from 'react';
import './TitleSection16.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title15">What we do</h1>
        <div className="decorative-line156"></div>
        <div className="decorative-square150"></div>
        <div className="decorative-square166"></div>
        <div className="decorative-square176"></div>
        <div className="decorative-square186"></div>
        <div className="decorative-square196"></div>
        <div className="decorative-square206"></div>
        <div className="decorative-square216"></div>
        <div className="decorative-square226"></div>
        <div className="decorative-square227"></div>
  
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

