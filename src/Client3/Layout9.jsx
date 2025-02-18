import React from 'react';
import Header from './Header';
import ProjectCard9 from './ProjectCard9';
import TitleSection9 from './TitleSection9';
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
      <TitleSection9 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard9
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client3/w31.jpeg" 
          id="first-image106"
          titleClass="project-one-title1"
          subtitleClass="project-one-subtitle1"
        />
        <ProjectCard9
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client3/c32.jpeg"  
          id="second-image206"
          titleClass="project-two-title2"
          subtitleClass="project-two-subtitle2"
        />
        <ProjectCard9
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client3/c33.jpeg"  
          id="third-image306"
          titleClass="project-three-title3"
          subtitleClass="project-three-subtitle3"
        />
        
    
  
  




        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text12">Connect with us</span>
          <div className="social-icons12">
            <div className="social-circle">
              <img src="src/assets/insta.png" alt="Social "onClick={() => window.open("https://www.instagram.com/weare_bask/?hl=en", "_blank", "noopener,noreferrer")} />
            </div>
            <div className="social-circle">
              <img src="src/assets/link.png" alt="Social " onClick={() => window.open("https://www.linkedin.com/company/baskworldwide-creative/posts/?feedView=all", "_blank", "noopener,noreferrer")}/>
            </div>
            <div className="social-circle">
              <img src="src/assets/fb.png" alt="Social " onClick={() => window.open("https://www.facebook.com/profile.php?id=61555741500166&mibextid=rS40aB7S9Ucbxw6v", "_blank", "noopener,noreferrer")} />
            </div>
          </div>
         </div> 
         <div className="Our-Teams">
       <span className="Next34">NEXT UP</span>
        <span className="Our-Team44"onClick={() => navigate("/layout4")}>Aukera</span>
        <span className="Our-Values44"onClick={() => navigate("/layout5")}>Embassy Lake Terrace</span>
        <span className="What-we-do44"onClick={() => navigate("/layout11")}>Zlate</span>
      

       

    
       </div>

        <div className="work-links">
    <span className="work-text11">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image11"onClick={() => navigate("/Careers")} />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer11">
        <div className="footer-container">
          <div className="footer-links12">
            <a href="/about" className="about-link">About</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img003"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;