import React from 'react';
import './TitleSection8.css';

const TitleSection = ({ style }) => {
  return (
    <div className="title-section1" style={style}>
      <div className="title-container">
        <h1 className="title3">Rare. Pure. Timeless.</h1>
        <p className='content5'>Platinum Guild was looking for reaffirmation that Platinum, as a jewellery metal, would be able to penetrate the fortress that was Gold. But we positioned Platinum for a different kind of woman—someone who knew that intrinsic value was more important than the flash value that Gold personified.</p>
        <div className="decorative-line26"></div>
        <div className="decorative-square26"></div>
      </div>
    </div>
  );
};

TitleSection.defaultProps = {
  style: {}
};

export default TitleSection;

