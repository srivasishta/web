import React from 'react';
import './Contact.css';
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
            onClick={() => navigate("/Layout10")}
          />
          <img 
            src="src/assets/image copy.png" 
            alt="Menu" 
            className="menu-iconl"
            onClick={() => navigate("/menu")}
          />
        </div>
      </header>

      <h1 className="title99">Share your </h1>
      <h1 className="title98">contact details </h1>
      <div className="decorative-line296"></div>
      <div className="decorative-square296"></div>

      <div className="input-container">
        <input 
          type="text" 
          id="fullName" 
          className="full-name-input" 
          placeholder="Full Name"
        />
         <input 
          type="text" 
          id="EmailName" 
          className="Email-input" 
          placeholder="Email"
        />
         <input 
          type="text" 
          id="ContactName" 
          className="Contact-input" 
          placeholder="Contact"
        />
        <input 
          type="text" 
          id="selectName" 
          className="select-input" 
          placeholder="Select an interest"
        />
         <input 
          type="text" 
          id="messageName" 
          className="message-input" 
          placeholder="Mesaage"
        />
       <button type="submit" className="submit-btn">Submit</button>
       <img 
          src="src/Contacts/image.png" 
          alt="Thank You" 
          className="location"
        />
        <h1 className="Basks">Bask Creative</h1>
         <p className="address">
         No. 3-B, 3rd Floor, Platinum Square, No. 86, Coles Road, Frazer Town, Bangalore, India 560005</p>
         <div className="social-links">
          <span className="connect-textc">Connect with us</span>
          <div className="social-iconsc">
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
         
         
      </div>
      <footer id="footerc">
        <div className="footer-containerc">
          <div className="footer-linksc">
            <a href="/about" className="about-link">About</a>
            <a href="#work" className="contact-link">Work</a>
            <a href="/careers" className="careers-link">Careers</a>
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