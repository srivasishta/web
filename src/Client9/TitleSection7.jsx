import React from 'react';
import './TitleSection7.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title3">In the Clouds</h1>
        <p className='content5'>If there was a tall ask, this was the one. We were up for it.</p>
        <div className="decorative-line25"></div>
        <div className="decorative-square25"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

