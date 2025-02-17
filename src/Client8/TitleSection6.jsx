import React from 'react';
import './TitleSection6.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title3">The Victorian Era</h1>
        <p className='content4'>Victoria, Bangalore’s Iconic watering hole gets a new life as Salvador’s. Same cuisine, same team. Different space. It took some convincing.</p>
        <div className="decorative-line24"></div>
        <div className="decorative-square24"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

