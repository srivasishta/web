import React from 'react';
import Header from './Header';
import ProjectCard11 from './ProjectCard11';
import TitleSection11 from './TitleSection11';
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
      <TitleSection11 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard11
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client6/c61.png" 
          id="first-image111"

        />
        <ProjectCard11
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client6/c62.png"  
          id="second-image112"
          
        />
        <ProjectCard11
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client6/c63.png"  
          id="third-image113"
          />
        <ProjectCard11
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client6/c64.png"  
          id="fourth-image114"
        />
        <ProjectCard11
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client6/c65.png"  
          id="fifth-image115"
        />

        <ProjectCard11
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client6/c66.png"  
          id="six-image116"
        />
        
        
    
  
  




        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text111">Connect with us</span>
          <div className="social-icons111">
            <div className="social-circle">
              <img src="src/assets/insta.png" alt="Social "onClick={() => window.open("https://www.instagram.com/weare_bask/?hl=en", "_blank", "noopener,noreferrer")} />
            </div>
            <div className="social-circle">
              <img src="src/assets/link.png" alt="Social "onClick={() => window.open("https://www.linkedin.com/company/baskworldwide-creative/posts/?feedView=all", "_blank", "noopener,noreferrer")} />
            </div>
            <div className="social-circle">
              <img src="src/assets/fb.png" alt="Social "  onClick={() => window.open("https://www.facebook.com/profile.php?id=61555741500166&mibextid=rS40aB7S9Ucbxw6v", "_blank", "noopener,noreferrer")}/>
            </div>
          </div>
         </div> 
         <div className="Our-Teams">
       <span className="Next111">NEXT UP</span>
        <span className="Our-Team111"onClick={() => navigate("/layout12")}>Puravankara</span>
        <span className="Our-Values111"onClick={() => navigate("/layout6")}>Salvadores</span>
        <span className="What-we-do111"onClick={() => navigate("/layout7")}>The Presidential Tower</span>
       
      

       

    
       </div>

        <div className="work-links">
    <span className="work-text111">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image111" />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer111">
        <div className="footer-container">
          <div className="footer-links111">
            <a href="/about" className="about-link">About</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img006"
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