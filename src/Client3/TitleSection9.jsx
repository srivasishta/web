import React from 'react';
import './TitleSection9.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title3">Cheer up</h1>
        <p className='content44'>When it came to delivering a great night out experience, the Skyye stands above (literally, too) every other bar in town. We found the words to communicate this. Garnishing it with a bit of sophistication the place deserves.</p>
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

