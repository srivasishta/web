import React from 'react';
import './Menu.css';
import { useNavigate } from 'react-router-dom';
const Menu = ({ onClose }) => {
  const navigate = useNavigate(); 
  return (
    <div className="menu">
      <div className="menu-content">
        <img src="src/assets/image copy 4.png" alt="Logo" className="logo3" />
        <img 
          src="src/assets/image copy 5.png" 
          alt="Close" 
          className="close-button"
          onClick={() => navigate(-1)} 
        />
        
        <nav className="navigation">
          <div className="nav-item work"onClick={() => navigate("/Layout17")}>Work</div>
          <div className="nav-item about"onClick={() => navigate("/about")} >About</div>
          <div className="nav-item contact"onClick={() => navigate("/Contact")}>Contact</div>
          <div className="nav-item job-openings"onClick={() => navigate("/Careers")}>Job Openings</div>
        </nav>

        <div className="footer">
          <div className="connect-section">
            <span className="connect-text">Connect with us</span>
            <div className="social-icons">
              <div className="social-circle">
                <img src="src/assets/insta.png" alt="Social"onClick={() => window.open("https://www.instagram.com/weare_bask/?hl=en", "_blank", "noopener,noreferrer")} />
              </div>
              <div className="social-circle">
                <img src="src/assets/link.png" alt="Social"onClick={() => window.open("https://www.linkedin.com/company/baskworldwide-creative/posts/?feedView=all", "_blank", "noopener,noreferrer")} />
              </div>
              <div className="social-circle">
                <img src="src/assets/fb.png" alt="Social"  onClick={() => window.open("https://www.facebook.com/profile.php?id=61555741500166&mibextid=rS40aB7S9Ucbxw6v", "_blank", "noopener,noreferrer")}/>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

Menu.defaultProps = {
  onClose: () => {},
};

export default Menu;