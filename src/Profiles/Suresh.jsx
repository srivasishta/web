import React from 'react';
import './Style1.css';
import { useNavigate } from 'react-router-dom';
import Menu from '../Components/Menu'; 
const StylePage = ({ 
  name = "Suresh Manian",
  role = "EXECUTIVE CREATIVE DIRECTOR",
 description="Suresh Manian is a seasoned copywriter and creative director. His 40 year journey in the industry has seen him work in multiple agencies, Ogilvy, Lintas, Rediffusion, Enterprise, Contract to name a few. He also cofounded Fisheye Creative Solutions, a Bangalore based agency, way back in 1999. While advertising has always been his profession, Suresh has written Tamil dialogues for a film (Quick Gun Murugan), and dabbled in text analytics and insight mining. Suresh is married to Malini, and has two daughters and two dogs, and lives in Bangalore."
  //description = "Prabhakaran is the consummate advertising and marketing professional. With 3 decades ofWith Bask creative, his latest venture, he is intent on creating the agency of his dreams. Where the finest creative minds working in ike any other, produce work that creates successful brands of today."
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
        <img src="src/assets/left.png" alt="Previous" className="nav-arrow" onClick={() => navigate("/prabhakar")}/>
        <img src="src/assets/right.png" alt="Next" className="nav-arrow" onClick={() => navigate("/sonica")}/>
      </div>
    </div>

     
    </div>
  );
};

export default StylePage;
//https://dashboard.codeparrot.ai/api/assets/Z49Ccu3PLinENYM5