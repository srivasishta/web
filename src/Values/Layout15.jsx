import React from 'react';
import Header from './Header';
import TitleSection15 from './TitleSection15';
import ProjectCard15 from './ProjectCard15';
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
      <TitleSection15 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        <ProjectCard15 
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Values/Creative Led.jpg" 
          title="Creative Led" 
          subtitle="Everything we do at Bask has a creative angle. We know a problem can have many solutions, but the creative ones are also the most effective ones. It’s not just about constant
improvement, but about constant creative improvement."
          id="first-image15"
          titleClass="project-one-title15"
          subtitleClass="project-one-subtitle15"
        />
        <ProjectCard15
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Values/Idea Centric.jpg"  
          title={
            <span>
              Idea <br />
              <span className="move-up">Centric</span>
            </span>
          }
          subtitle="At Bask, everything revolves around
ideas. The search for the big idea fuels
our existence."
          id="second-image15"
          titleClass="project-two-title15"
          subtitleClass="project-two-subtitle15"
        />
        <ProjectCard15 
          style={{ flexGrow: 1, flexBasis: '45%', margin: '10px' }} 
          imageUrl="src/Values/Responsible.jpg"  
          title={<span>Respon<span className="sible-style">sible</span></span>}
          subtitle="Our responsibility is to ourselves, our clients, our work, our people
and to everyone who comes in contact with our work. We are here to enrich lives. And live an enriched life."
          id="third-image15"
          titleClass="project-three-title15"
          subtitleClass="project-three-subtitle15"
        />
        <ProjectCard15 
          style={{ 
            flexGrow: 1, 
            flexBasis: '45%', 
            margin: '10px', 
          }} 
          imageUrl="src/Values/Tech Driven.jpg" 
          title={<span>Tech<span className="Intensive">Intensive</span></span>}
          subtitle="We believe with the right tech we can have the flexibility to expand our thinking to areas we would not have otherwise explored as a brand agency. We use tech to bring better and more creative solutions for our clients’ problems."
          id="fourth-image15"
          titleClass="project-four-title15"
          subtitleClass="project-four-subtitle15"
        />
        <h1 className="mission-text">Mission</h1>
        <p className="mission-para">To create and produce inspiring print, film, digital, tech and photography work.</p>
        <h1 className="Vision-text">Vision</h1>
        <p className="vision-para">To be the most creative agency in advertising, design, digital and all other forms of brand communication.
        </p>
        <h1 className="Belief">Belief</h1>
            
    </div>

      {/* Footer */}
      <footer className="footer15">
        <div className="social-links">
          <span className="connect-text15">Connect with us</span>
          <div className="social-icons15">
            <div className="social-circle">
              <img src="src/assets/insta.png" alt="Social "onClick={() => window.open("https://www.instagram.com/weare_bask/?hl=en", "_blank", "noopener,noreferrer")} />
            </div>
            <div className="social-circle">
              <img src="src/assets/link.png" alt="Social "onClick={() => window.open("https://www.linkedin.com/company/baskworldwide-creative/posts/?feedView=all", "_blank", "noopener,noreferrer")} />
            </div>
            <div className="social-circle">
              <img src="src/assets/fb.png" alt="Social " />
            </div>
          </div>
        </div><div className="Our-Teams">
        <span className="Our-Team"onClick={() => navigate('/Layout0')}>Our Team</span>
        <span className="Our-Values"onClick={() => navigate('/Layout15')}>Our Values</span>
        <span className="What-we-do"onClick={() => navigate('/Layout16')}>What We Do
        </span>
          
        
    
       </div>

        <div className="work-links">
    <span className="work-text15">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image15" />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer15">
        <div className="footer-container">
          <div className="footer-links15">
            <a href="/about" className="about-link">About</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img15"
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