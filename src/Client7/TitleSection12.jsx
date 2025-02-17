import React from 'react';
import './TitleSection12.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title3">We call it home work</h1>
        <p className='content1'>Puravankara is a leading builder in Bangalore. Their projects are some of the most sought-after. They really don’t need much advertising to sell. So it was time to have some fun with the campaigns.</p>
        <div className="decorative-line222"></div>
        <div className="decorative-square222"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

