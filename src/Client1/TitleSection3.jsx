import React from 'react';
import './TitleSection3.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title3">Rewrite Your <br /> back story</h1>
        <p className='content'>We wanted to use the headline ‘Back Again?’ for Peps brand of Mattresses. Until we discovered some obscure agency in Minneapolis had come up with it a few decades ago for their Chiropractor client. The fact is they also won a few One Show Golds for it. Rewrite your back story, didn’t win any awards. But the client thought it worked. That’s the one award we were looking for.</p>
        <div className="decorative-line12"></div>
        <div className="decorative-square12"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

