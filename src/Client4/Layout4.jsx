import React from 'react';
import Header from './Header';
import ProjectCard4 from './ProjectCard4';
import TitleSection4 from './TitleSection4';
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
      <TitleSection4 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard4
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client4/c41.jpeg" 
          id="first-image14"
          titleClass="project-one-title1"
          subtitleClass="project-one-subtitle1"
        />
        <ProjectCard4
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client4/c42.jpeg"  
          id="second-image24"
          titleClass="project-two-title2"
          subtitleClass="project-two-subtitle2"
        />
        <ProjectCard4
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client4/c43.jpeg"  
          id="third-image34"
          titleClass="project-three-title3"
          subtitleClass="project-three-subtitle3"
        />
        <ProjectCard4
          style={{ 
            flexGrow: 1, 
            flexBasis: '45%', 
            margin: '10px', 
          }} 
          imageUrl="src/Client4/c44.jpeg" 
          id="fourth-image44"
          titleClass="project-four-title4"
          subtitleClass="project-four-subtitle4"
        />
        
    <ProjectCard4
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client4/c45.jpeg" 
    id="fifth-image54"
    titleClass="project-five-title5"
    subtitleClass="project-five-subtitle5"
    />
  
  <ProjectCard4
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client4/c46.jpeg" 
    id="sixth-image64"
    titleClass="project-six-title6"
    subtitleClass="project-six-subtitle6"
  />

<ProjectCard4
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client4/c47.jpeg" 
    id="seventh-image74"
    titleClass="project-seven-title6"
    subtitleClass="project-seven-subtitle6"
  />
  </div><div className="Our-Teams">
       <span className="Next1">NEXT UP</span>
        <span className="Our-Team2"onClick={() => navigate("/layout5")}>Embassy Lake Terraces</span>
        <span className="Our-Values2"onClick={() => navigate("/layout11")}>Zlate</span>
        <span className="What-we-do2"onClick={() => navigate("/layout12")}>Puravankara</span>

        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text10">Connect with us</span>
          <div className="social-icons10">
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

        <div className="work-links">
    <span className="work-text10">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image10" />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer10">
        <div className="footer-container">
          <div className="footer-links10">
            <a href="/about" className="about-link">About</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img004"
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