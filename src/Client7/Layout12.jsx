import React from 'react';
import Header from './Header';
import ProjectCard12 from './ProjectCard12';
import TitleSection12 from './TitleSection12';
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
      <TitleSection12 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard12
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client7/c71.png" 
          id="first-image211"
          
        />
        <ProjectCard12
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client7/c72.png"  
          id="second-image212"
          
        />
        <ProjectCard12
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client7/c73.png"  
          id="third-image213"
          
        />
        <ProjectCard12
          style={{ 
            flexGrow: 1, 
            flexBasis: '45%', 
            margin: '10px', 
          }} 
          imageUrl="src/Client7/c74.png" 
          id="fourth-image214"
         
        />
        
    <ProjectCard12
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client7/c75.png" 
    id="fifth-image215"
   
    />
  
  <ProjectCard12
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client7/c76.png" 
    id="sixth-image216"
    
  />

<ProjectCard12
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client7/c77.png" 
    id="seventh-image217"
   
  />
  <ProjectCard12
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client7/c78.png" 
    id="eigth-image218"
   
  />
  </div><div className="Our-Teams">
       <span className="Next211">NEXT UP</span>
        <span className="Our-Team212"onClick={() => navigate("/layout6")}>Salvadores</span>
        <span className="Our-Values213"onClick={() => navigate("/layout7")}>The Presidential Tower</span>
        <span className="What-we-do214"onClick={() => navigate("/layout8")}>Platinum Guild</span>

        
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
    <img src="src/assets/right.png" alt="Work with us" className="work-image210" />
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
              className="footer-img007"
            />
          </div>
          <div className="footer-image">
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;