import React from 'react';
import './TitleSection11.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title3">Settle for less</h1>
        <p className='content5'>Zlate is an online negotiating platform. We thought, here’s one client who would be willing to ‘settle for less.’ We were right.</p>
        <div className="decorative-line226"></div>
        <div className="decorative-square2226"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

