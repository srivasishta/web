import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Menu from '../Components/Menu'; 

const StylePage = ({ 
  name = "Sampath Kumar",
  role = "FOUNDER & CEO",
  description="Sampath has varied experience in working with some of the finest creative agencies in India including Enterprise Advertising, Ambience, JWT and Contract. Over a caree spanning 30 years, he has worked on many multi-national as well as leading Indian Brands. For the last 15 years, he has been creating and helming his own ventures including start-ups in the charity and food & beverages space. With Bask creative, his latest venture, he is intent on creating the agency of his dreams. Where the finest creative minds working in an agency environment unlike any other, produce work that creates successful brands of today."
}) => {
  const navigate = useNavigate();
  return (
    <div className="Style-page">
      <header className="header">
        <img src="src/assets/image.png" alt="Logo" className="logo1"onClick={() => navigate("/Layout10")} />
        <img src="src/Profiles/x-removebg-preview.png" alt="Menu" className="menu-iconss"onClick={() => navigate("/Layout0")}  />
        <img src="src/assets/image copy.png" alt="Menu" className="menu-iconq"onClick={() => navigate("/Menu")}  />
        
      </header>
      
      <div className="content">
        <div className="profile-section1">
          <img 
            src="https://dashboard.codeparrot.ai/api/assets/Z43sHb9JV5SvYOp-" 
            alt="Profile" 
            className="profile-image1" 
          />
          <div className="profile-info1">
            <h1 className="name1">{name}</h1>
            
            <h2 className="role1">{role}</h2>
            <p className="description1">{description}</p>
          </div>
        </div>
        
        <div className="navigation-controls">
       
        <img src="src/assets/right.png" alt="Next" className="nav-arrow" onClick={() => navigate("/prabhakar")} />
      </div>
    </div>

     
    </div>
  );
};

export default StylePage;
