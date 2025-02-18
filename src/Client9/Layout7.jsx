import React from 'react';
import Header from './Header';
import ProjectCard7 from './ProjectCard7';
import TitleSection7 from './TitleSection7';
import { useNavigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingBottom: '20px',
    }}>
      <Header style={{ flexGrow: 0 }} />
      <TitleSection7 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard7
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client9/w91.png" 
          id="first-image17"
          titleClass="project-one-title1"
          subtitleClass="project-one-subtitle1"
        />
        <ProjectCard7
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client9/w92.png"  
          id="second-image27"
          titleClass="project-two-title2"
          subtitleClass="project-two-subtitle2"
        />
        <ProjectCard7
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client9/w93.png"  
          id="third-image37"
          titleClass="project-three-title3"
          subtitleClass="project-three-subtitle3"
        />
        <ProjectCard7
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client9/w94.png"  
          id="fourth-image47"
          titleClass="project-four-title3"
          subtitleClass="project-four-subtitle3"
        />
        
        
    
  
  




        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text13">Connect with us</span>
          <div className="social-icons13">
            <div className="social-circle">
              <img src="src/assets/insta.png" alt="Social "onClick={() => window.open("https://www.instagram.com/weare_bask/?hl=en", "_blank", "noopener,noreferrer")} />
            </div>
            <div className="social-circle">
              <img src="src/assets/link.png" alt="Social "onClick={() => window.open("https://www.linkedin.com/company/baskworldwide-creative/posts/?feedView=all", "_blank", "noopener,noreferrer")} />
            </div>
            <div className="social-circle">
              <img src="src/assets/fb.png" alt="Social " onClick={() => window.open("https://www.facebook.com/profile.php?id=61555741500166&mibextid=rS40aB7S9Ucbxw6v", "_blank", "noopener,noreferrer")} />
            </div>
          </div>
         </div> 
         <div className="Our-Teams">
       <span className="Next4">NEXT UP</span>
        <span className="Our-Team5"onClick={() => navigate("/layout8")}>Platinum Guild</span>
        <span className="Our-Values5"onClick={() => navigate("/layout3")}>Peps Mattresess</span>
        <span className="What-we-do5"onClick={() => navigate("/layout13")}>Adarsh Group</span>
      </div>

        <div className="work-links">
    <span className="work-text13">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image13"onClick={() => navigate("/Careers")} />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer13">
        <div className="footer-container">
          <div className="footer-links13">
            <a href="/about" className="about-link">About</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img009"
            />
          </div>
          <div className="footer-image">
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;