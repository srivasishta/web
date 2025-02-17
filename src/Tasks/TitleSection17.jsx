import React from 'react';
import './TitleSection17.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title2">Our Work</h1>
        <div className="decorative-line170"></div>
        <div className="decorative-square1"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

