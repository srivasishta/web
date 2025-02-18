import React from 'react';
import Header from './Header';
import ProjectCard10 from './ProjectCard10';
import TitleSection10 from './TitleSection10';
import { useNavigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxHeight: '100vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingBottom: '20px',
    }}>
      <Header style={{ flexGrow: 0 }} />
      <TitleSection10 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard10
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/assets/w10.png" 
          id="first-image606"
          title="Settle for less"
          subtitle="ZLATE"
          titleClass="project-one-title1111"
          subtitleClass="project-one-subtitle11"
          
        />
        <ProjectCard10
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/assets/w3.png"  
          id="second-image706"
          title="In the Clouds"
          subtitle="The Presedential Tower"
          titleClass="project-two-title21"
          subtitleClass="project-two-subtitle22"
        />
        <ProjectCard10
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/assets/w9.png"  
          title="Homes that speak the good life"
          subtitle="Embassy Lake Terraces"
          id="third-image806"
          titleClass="project-two-title32"
          subtitleClass="project-two-subtitle33"
        />
       
       < div className="work-links">
    <span className="work-text1001">View Our work</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image1001"onClick={() => navigate("/layout17")} />
    <div className="Our">Our Clients</div>
    <img src="src/HomePage/clientss.png" className="Clients"/>
  </div>
    
  
  




        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text121">Connect with us</span>
          <div className="social-icons121">
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
    <span className="work-text121">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image121" onClick={() => navigate("/Careers")}/>
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer121">
        <div className="footer-container">
          <div className="footer-links121">
            <a href="/about" className="about-link">About</a>
            <a href="/layout17" className="work-link">Work</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img0001"
            />
            
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Layout;