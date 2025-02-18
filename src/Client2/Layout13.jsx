import React from 'react';
import Header from './Header';
import ProjectCard13 from './ProjectCard13';
import TitleSection13 from './TitleSection13';
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
      <TitleSection13 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard13
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client2/c21.png" 
          id="first-image311"
          
        />
        <ProjectCard13
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client2/c22.png"  
          id="second-image312"
          
        />
        <ProjectCard13
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client2/c23.png"  
          id="third-image313"
          
        />
        <ProjectCard13
          style={{ 
            flexGrow: 1, 
            flexBasis: '45%', 
            margin: '10px', 
          }} 
          imageUrl="src/Client2/c24.png" 
          id="fourth-image314"
         
        />
        
    <ProjectCard13
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client2/c25.png" 
    id="fifth-image315"
   
    />
  
  <ProjectCard13
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client2/c26.png" 
    id="sixth-image316"
    
  />

<ProjectCard13
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client2/c27.png" 
    id="seventh-image317"
   
  />
  <ProjectCard13
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client2/c28.png" 
    id="eigth-image318"
   
  />
  </div><div className="Our-Teams">
       <span className="Next311">NEXT UP</span>
        <span className="Our-Team312"onClick={() => navigate("/layout9")}>Skyee</span>
        <span className="Our-Values313" onClick={() => navigate("/layout4")}>Aukera</span>
        <span className="What-we-do314"onClick={() => navigate("/layout5")}>Embassy Lake Terraces</span>

        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text210">Connect with us</span>
          <div className="social-icons210">
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
    <span className="work-text210">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image210"onClick={() => navigate("/Careers")} />
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
              className="footer-img002"
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