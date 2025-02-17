import React from 'react';
import Header from './Header';
import TitleSection0 from './TitleSection0';
import ProjectCard0 from './ProjectCard0';
import { useNavigate } from 'react-router-dom';
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
      <TitleSection0 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard0 
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="https://dashboard.codeparrot.ai/api/assets/Z43sHb9JV5SvYOp-" 
          title="Sampath Kumar" 
          subtitle="FOUNDER & CEO"
          id="first-image001"
          titleClass="project-one-title01"
          subtitleClass="project-one-subtitle01"
          onClick={() => navigate("/sampath")}
        />
        <ProjectCard0 
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/assets/image copy 2.png"  
          title="CP Prabhakaran"
          subtitle="DIRECTOR - BUSINESS"
          id="second-image002"
          titleClass="project-two-title02"
          subtitleClass="project-two-subtitle02"
          onClick={() => navigate("/prabhakar")}
        />
        <ProjectCard0 
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="https://dashboard.codeparrot.ai/api/assets/Z43sHb9JV5SvYOp-"  
          title="Suresh Manian"
          subtitle="EXECUTIVE CREATIVE DIRECTOR"
          id="third-image003"
          titleClass="project-three-title300"
          subtitleClass="project-three-subtitle300"
          onClick={() => navigate("/suresh")}
        />
        <ProjectCard0 
          style={{ 
            flexGrow: 1, 
            flexBasis: '45%', 
            margin: '10px', 
          }} 
          imageUrl="https://dashboard.codeparrot.ai/api/assets/Z43sHb9JV5SvYOp-" 
          title="Sonica Singh"
          subtitle="HEAD - DIGITAL"
          id="fourth-image004"
          titleClass="project-four-title400"
          subtitleClass="project-four-subtitle400"
          onClick={() => navigate("/sonica")}
        />
        
    <ProjectCard0 
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/assets/image copy 3.png" 
    title="Gowri Subramoniam"
    subtitle="HEAD - DIGITAL CONTENT"
    id="fifth-image005"
    titleClass="project-five-title500"
    subtitleClass="project-five-subtitle500"
    onClick={() => navigate("/gowri")}
    />
  
  <ProjectCard0 
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="https://dashboard.codeparrot.ai/api/assets/Z43sHb9JV5SvYOp-" 
    title="Priyanshu Mishra"
    subtitle="SENIOR SOFTWARE DEVELOPER"
    id="sixth-image006"
    titleClass="project-six-title600"
    subtitleClass="project-six-subtitle600"
    onClick={() => navigate("/priyanshu")}
  />
        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text7">Connect with us</span>
          <div className="social-icons7">
            <div className="social-circle">
              <img src="src/assets/insta.png" alt="Social " onClick={() => window.open("https://www.instagram.com/weare_bask/?hl=en", "_blank", "noopener,noreferrer")}/>
            </div>
            <div className="social-circle">
              <img src="src/assets/link.png" alt="Social " onClick={() => window.open("https://www.linkedin.com/company/baskworldwide-creative/posts/?feedView=all", "_blank", "noopener,noreferrer")}/>
            </div>
            <div className="social-circle">
              <img src="src/assets/fb.png" alt="Social " onClick={() => window.open("https://www.facebook.com/profile.php?id=61555741500166&mibextid=rS40aB7S9Ucbxw6v", "_blank", "noopener,noreferrer")} />
            </div>
          </div>
        </div><div className="Our-Teams">
        <span className="Our-Team0001">Our Team</span>
        <span className="Our-Values0002"onClick={() => navigate('/Layout15')}>Our Values</span>
        <span className="What-we-do0003"onClick={() => navigate('/Layout16')}>What We Do</span>
        
    
       </div>

        <div className="work-links">
    <span className="work-text77">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image77" />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer007">
        <div className="footer-container">
          <div className="footer-links007">
            <a href="/about" className="about-link">About</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img000"
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