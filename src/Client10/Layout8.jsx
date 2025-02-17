import React from 'react';
import Header from './Header';
import ProjectCard8 from './ProjectCard8';
import TitleSection8 from './TitleSection8';
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
      <TitleSection8 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard8
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client10/c101.jpeg" 
          id="first-image18"
          titleClass="project-one-title1"
          subtitleClass="project-one-subtitle1"
        />
        <ProjectCard8
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client10/c102.jpeg"  
          id="second-image28"
          titleClass="project-two-title2"
          subtitleClass="project-two-subtitle2"
        />
        <ProjectCard8
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client10/c103.jpeg"  
          id="third-image38"
          titleClass="project-three-title3"
          subtitleClass="project-three-subtitle3"
        />
        
    
  
  




        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text14">Connect with us</span>
          <div className="social-icons14">
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
       <span className="Next6">NEXT UP</span>
        <span className="Our-Team6"onClick={() => navigate("/layout3")}>Peps Mattressess</span>
        <span className="Our-Values6"onClick={() => navigate("/layout13")}>Adarsh Group</span>
        <span className="What-we-do600"onClick={() => navigate("/layout9")}>Skyye</span>
      

       

    
       </div>

        <div className="work-links">
    <span className="work-text14">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image14" />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer14">
        <div className="footer-container">
          <div className="footer-links14">
            <a href="/about" className="about-link">About</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img10"
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