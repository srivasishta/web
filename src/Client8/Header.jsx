import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
const Header = ({ style }) => {
   const navigate = useNavigate();
  return (
    <header className="header" style={style}>
      <div className="header-content">
        <img 
          src="src/assets/image.png" 
          alt="Logo" 
          className="logop"
        />
        <img 
          src="src/assets/image copy.png" 
          alt="Menu" 
          className="menu-iconl"
          onClick={() => navigate("/menu")}
        />
      </div>
    </header>
  );
};

Header.defaultProps = {
  style: {}
};

export default Header;

