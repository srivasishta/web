import React from 'react';
import './style1.css';
import Menu from '../Components/Menu'; 
import { useNavigate } from 'react-router-dom';

const StylePage = ({ 
  name = "Gowri Subramoniam",
  role = "HEAD - DIGITAL CONTENT",
 description="Gowri Subramoniam is a Multidisciplinary Designer with a background in Architecture and a career spanning Digital Design, Strategy, Art Direction, Photography, and Videography. Over the past seven years, she has worked with over 40 brands, predominantly in the F&B space. She is currently “bask”ing as the Head of Digital Content."
}) => {
  const navigate = useNavigate();
  return (
    <div className="Style-page">
      <header className="header">
        <img src="src/assets/image.png" alt="Logo" className="logo1"onClick={() => navigate("/Layout10")} />
        <img src="src/assets/image copy.png" alt="Menu" className="menu-iconq"onClick={() => navigate("/Menu")} />
      </header>
      
      <div className="content">
        <div className="profile-section">
          <img 
            src="src/assets/image copy 3.png" 
            alt="Profile" 
            className="profile-image" 
          />
          <div className="profile-info">
            <h1 className="name">{name}</h1>
            <h2 className="role">{role}</h2>
            <p className="description">{description}</p>
          </div>
        </div>
        
        <div className="navigation-controls">
        <img src="src/assets/left.png" alt="Previous" className="nav-arrow" onClick={() => navigate("/sonica")}/>
        <img src="src/assets/right.png" alt="Next" className="nav-arrow"onClick={() => navigate("/Priyanshu") }/>
      </div>
    </div>

     
    </div>
  );
};

export default StylePage;
//https://dashboard.codeparrot.ai/api/assets/Z49Ccu3PLinENYM5