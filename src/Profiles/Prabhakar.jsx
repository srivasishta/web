import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style1.css';
import Menu from '../Components/Menu'; 

const StylePage = ({ 
  name = "CP Prabhakaran",
  role = "DIRECTOR-BUSINESS",
  description="Prabhakaran is the consummate advertising and marketing professional. With 3 decades of experience both on the agency side as well as the brand side he has worked with some of the leading advertising agencies in Bangalore including Saatchi &Saatchi, Maa Bozzel, and Everest having later moved on to work on the brand side with RMZ Corp, Bangalore's leading Corporate and Residential developer, where he spent 10 years as head of marketing communication for both, RMZ Homes and Commercial spaces."
  //description = "Prabhakaran is the consummate advertising and marketing professional. With 3 decades ofWith Bask creative, his latest venture, he is intent on creating the agency of his dreams. Where the finest creative minds working in ike any other, produce work that creates successful brands of today."
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
            src="src/assets/image copy 2.png" 
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
        <img src="src/assets/left.png" alt="Previous" className="nav-arrow" onClick={() => navigate("/sampath")}  />
        <img src="src/assets/right.png" alt="Next" className="nav-arrow"onClick={() => navigate("/Suresh")} />
      </div>
    </div>

     
    </div>
  );
};

export default StylePage;
//https://dashboard.codeparrot.ai/api/assets/Z49Ccu3PLinENYM5