import React from 'react';
import './Style1.css';
import { useNavigate } from 'react-router-dom';
import Menu from '../Components/Menu'; 
const StylePage = ({ 
  name = "Sonica Singh",
  role = "HEAD - DIGITAL",
 description="Sonica brings a strategic vision to everything digital. Campaigns, Performance Marketing, Content Strategy, Social Media Strategy, SEO Strategy, Marketing Automation Strategy Analytics. Her experiences include working with micro, small, and mid-sized clients to large corporations through her agency engagements. Before she dived into digital communication she had various sales and marketing roles with Taj Hotels, ITC Hotels, The Ritz-Carlton Hotel Company, and Accor Hotels."
}) => {
  const navigate = useNavigate();
  return (
    <div className="Style-page">
      <header className="header">
        <img src="src/assets/image.png" alt="Logo" className="logo1" />
        <img src="src/assets/image copy.png" alt="Menu" className="menu-iconq"onClick={() => navigate("/Menu")} />
      </header>
      
      <div className="content">
        <div className="profile-section">
          <img 
            src="https://dashboard.codeparrot.ai/api/assets/Z43sHb9JV5SvYOp-" 
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
        <img src="src/assets/left.png" alt="Previous" className="nav-arrow" onClick={() => navigate("/Suresh")}/>
        <img src="src/assets/right.png" alt="Next" className="nav-arrow"onClick={() => navigate("/Gowri")} />
      </div>
    </div>

     
    </div>
  );
};

export default StylePage;
//https://dashboard.codeparrot.ai/api/assets/Z49Ccu3PLinENYM5