import React from 'react';
import './TitleSection4.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title3">Flawless</h1>
        <p className='content1'>When women make the choice, they always get it right. Said our campaign for Aukera, Grown Diamond Jewellery.</p>
        <div className="decorative-line22"></div>
        <div className="decorative-square22"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

