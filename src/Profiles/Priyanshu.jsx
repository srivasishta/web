import React from 'react';
import './style1.css';
import { useNavigate } from 'react-router-dom';
import Menu from '../Components/Menu'; 
const StylePage = ({ 
  name = "Priyanshu Mishra",
  role = "SENIOR SOFTWARE DEVELOPER",
  description="Priyanshu is a full stack developer, specializing in Express and React JS. He is a hoarder of horror cinema, and is rarely seen without his headphones on. Priyanshu is studying for his BCA while trying to set a record in the number of genres one can fit into a single week of reading. He enjoys taking long walks to unwind and loves exploring local cafes for unique coffee blends.When he's not crafting seamless web applications, you'll find him immersed in a vast array of anime, always on the lookout for the latest trends and technologies in the coding world."
  
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
        <img src="src/assets/left.png" alt="Previous" className="nav-arrow"onClick={() => navigate("/Gowri")} />
       
      </div>
    </div>

     
    </div>
  );
};

export default StylePage;
