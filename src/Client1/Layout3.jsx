import React from 'react';
import Header from './Header';
import ProjectCard3 from './ProjectCard3';
import TitleSection3 from './TitleSection3';
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
      <TitleSection3 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard3
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client1/c1.jpeg" 
          id="first-image13"
          titleClass="project-one-title1"
          subtitleClass="project-one-subtitle1"
        />
        <ProjectCard3
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client1/c2.jpeg"  
          id="second-image23"
          titleClass="project-two-title2"
          subtitleClass="project-two-subtitle2"
        />
        <ProjectCard3
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Client1/c3.jpeg"  
          id="third-image33"
          titleClass="project-three-title3"
          subtitleClass="project-three-subtitle3"
        />
        <ProjectCard3 
          style={{ 
            flexGrow: 1, 
            flexBasis: '45%', 
            margin: '10px', 
          }} 
          imageUrl="src/Client1/c4.jpeg" 
          id="fourth-image43"
          titleClass="project-four-title4"
          subtitleClass="project-four-subtitle4"
        />
        
    <ProjectCard3
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client1/c5.jpeg" 
    id="fifth-image53"
    titleClass="project-five-title5"
    subtitleClass="project-five-subtitle5"
    />
  
  <ProjectCard3
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/Client1/c6.jpeg" 
    id="sixth-image63"
    titleClass="project-six-title6"
    subtitleClass="project-six-subtitle6"
  />
        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text9">Connect with us</span>
          <div className="social-icons9">
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
       </div><div className="Our-Teams">
       <span className="Next">NEXT UP</span>
        <span className="Our-Team1"onClick={() => navigate("/layout4")}>Aukera</span>
        <span className="Our-Values1" onClick={() => navigate("/layout9")}>Skyye</span>
        <span className="What-we-do1"onClick={() => navigate("/layout13")} >Adarsh Group</span>

    
       </div>

        <div className="work-links">
    <span className="work-text9"onClick={() => navigate("/Contact")}>Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image9" />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer9">
        <div className="footer-container">
          <div className="footer-links9">
            <a href="/about" className="about-link">About</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img01"
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