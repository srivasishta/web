import React from 'react';
import './TitleSection0.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title2">Meet the team</h1>
        <div className="decorative-line1"></div>
        <div className="decorative-square1"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

