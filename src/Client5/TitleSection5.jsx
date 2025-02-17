import React from 'react';
import './TitleSection5.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title3">Homes that speak<br/> the good life</h1>
        <p className='content3'>Dramatic black and white pictures score a point for sophistication in this Campaign for Embassy lake terraces.</p>
        <div className="decorative-line23"></div>
        <div className="decorative-square23"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

