import React from 'react';
import './Header.css';

const Header = ({ style }) => {
  return (
    <header className="header" style={style}>
      <div className="header-content">
    
        
      </div>
    </header>
  );
};

Header.defaultProps = {
  style: {}
};

export default Header;

