import React from 'react';
import './Careers.css';
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <img 
            src="src/assets/image.png" 
            alt="Logo" 
            className="logop"
          />
          <img 
            src="src/assets/image copy.png" 
            alt="Menu" 
            className="menu-iconl"
            onClick={() => navigate("/menu")}
          />
        </div>
      </header>

      <h1 className="title100">Join the </h1>
      <h1 className="title101">Bask Team </h1>
      <div className="decorative-line396"></div>
      <div className="decorative-square396"></div>
      <p className="detail">Are you passionate about creativity, strategy, and making a real impact? At Bask, we’re always on the lookout for talented individuals who bring fresh ideas and a drive for excellence. </p>
      <h1 className="title102">We're sorry</h1>
      <p className="detail1">
        While there are currently no positions available, we encourage you to send us your  
        <span className="secondLine"> resume and portfolio if you’re interested in joining the Bask team in the future.</span>
        </p>
        <p className="detail2">We’ll keep your information on file and reach out when a suitable role becomes available. </p>
        <p className="detail3">
        Send your resume and a brief introduction to <b>info@blackis.in</b>
      
        </p>
        <p className="detail4">Let us know how you see yourself contributing to Bask, and we’ll be in touch if an </p>
        <p className="detail5">opportunity opens up! </p>
        
      <div className="input-container">
        
      <button type="submit" className="upload-btn">Upload Resume</button>
        
      <div className="social-links">
          <span className="connect-textco">Connect with us</span>
          <div className="social-iconsco">
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
         <div className="work-links">
    <span className="work-textco">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-imageco" />
  </div>
  
       
       
        
         
         
         
      </div>
      <footer id="footerc">
        <div className="footer-containerc">
          <div className="footer-linksc">
            <a href="/about" className="about-link">About</a>
            <a href="#work" className="contact-link">Work</a>
            <a href="#careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-imgc"
            />
          </div>
        </div>
      </footer>
      
    </div>
    
    

    
 
  );
};

export default Contact;