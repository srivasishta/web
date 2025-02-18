import React from 'react';
import Header from './Header';
import TitleSection17 from './TitleSection17';
import ProjectCard17 from './ProjectCard17';
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
      <TitleSection17 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard17 
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/assets/w5.png" 
          title="Rewrite your back story " 
          subtitle="PEPS MATTRESSES"
          id="first-image171"
          titleClass="project-one-title171"
          subtitleClass="project-one-subtitle171"
          onClick={() => navigate("/Layout3")}
         
        />
        <ProjectCard17 
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/assets/w6.png"  
          title="Come to Savana + Refreshing"
          subtitle="Adarsh Groups"
          id="second-image172"
          titleClass="project-two-title172"
          subtitleClass="project-two-subtitle172"
          onClick={() => navigate("/Layout13")}
          
        />
        <ProjectCard17 
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/assets/w7.png"  
          title="Cheer up"
          subtitle="SKYYE"
          id="third-image173"
          titleClass="project-three-title173"
          subtitleClass="project-three-subtitle173"
          onClick={() => navigate("/Layout9")}
          
        />
        <ProjectCard17 
          style={{ 
            flexGrow: 1, 
            flexBasis: '45%', 
            margin: '10px', 
          }} 
          imageUrl="src/assets/w8.png" 
          title="Flawless"
          subtitle="AUKERA"
          id="fourth-image174"
          titleClass="project-four-title174"
          subtitleClass="project-four-subtitle174"
          onClick={() => navigate("/Layout4")}
        />
        
    <ProjectCard17 
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/assets/w9.png" 
    title="Homes that speaks the good life"
    subtitle="EMBASSY LAKE TERRACES"
    id="fifth-image175"
    titleClass="project-five-title175"
    subtitleClass="project-five-subtitle175"
    onClick={() => navigate("/Layout5")}
    />
  
  <ProjectCard17 
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/assets/w10.png" 
    title="Settle for less"
    subtitle="ZLATE"
    id="sixth-image176"
    titleClass="project-six-title176"
    subtitleClass="project-six-subtitle176"
    onClick={() => navigate("/Layout11")}
    
  />
  <ProjectCard17 
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/assets/w1.png" 
    title="We call it home work"
    subtitle="PURAVANKARA"
    id="seventh-image1777"
    titleClass="project-seven-title177"
    subtitleClass="project-seven-subtitle177"
    onClick={() => navigate("/Layout12")}
  />
  <ProjectCard17 
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/assets/image copy 6.png" 
    title="Perfect the fine art of grilling"
    subtitle="ZLATE"
    id="eigth-image178"
    titleClass="project-eight-title178"
    subtitleClass="project-eight-subtitle178"
    onClick={() => navigate("/Layout6")}
    
  />
  <ProjectCard17 
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/assets/w3.png" 
    title="In the clouds"
    subtitle="THE PRESIDENTIAL TOWER"
    id="nine-image1778"
    titleClass="project-nine-title179"
    subtitleClass="project-nine-subtitle179"
    onClick={() => navigate("/Layout7")}
    
  />
   <ProjectCard17 
    style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
    imageUrl="src/assets/w4.png" 
    title="Rare. Pure. Timeless"
    subtitle="PLATINUM GUILD"
    id="ten-image180"
    titleClass="project-ten-title180"
    subtitleClass="project-ten-subtitle180"
    onClick={() => navigate("/Layout8")}
  />
        
    </div>

      {/* Footer */}
      <footer className="footer2">
        <div className="social-links">
          <span className="connect-text170">Connect with us</span>
          <div className="social-icons170">
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
        
        
    
       </div>

        <div className="work-links">
    <span className="work-text77">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image77"onClick={() => navigate("/Careers")} />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer008">
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