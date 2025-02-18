import React from 'react';
import './AboutPage.css';
import { useNavigate } from 'react-router-dom';
const AboutPage = () => {
  const navigate = useNavigate(); 
  return (
    <div className="about-page">
      <nav className="navbar">
        <img src="src/assets/image.png" alt="Logo" className="logom" onClick={() => navigate("/Layout10")} />
        <img src="src/assets/image copy.png" alt="Menu" className="menu-iconm" onClick={() => navigate("/menu")} />
      </nav>

      <main>
        <section className="section" id="section-what-we-do">
          <div className="yellow-square" id="square1"></div>
          <h2 className="heading" id="heading-what-we-do"onClick={() => navigate("/Layout16")}>What we do</h2>
        </section>

        <section className="section" id="section-our-values">
          <div className="yellow-square" id="square2"></div>
          <h2 className="heading" id="heading-our-values"onClick={() => navigate("/Layout15")}>Our values</h2>
        </section>

        <section className="section" id="section-our-team">
          <div className="yellow-square" id="square3"></div>
          <h2 className="heading" id="heading-our-team"onClick={() => navigate("/Layout0")}>Our team</h2>
        </section>

        <footer className="footer1">
          <div className="social-links">
            <span className="connect-text">Connect with us</span>
            <div className="social-icons">
              <div className="social-circle">
                <img src="src/assets/insta.png" alt="Social 1" onClick={() => window.open("https://www.instagram.com/weare_bask/?hl=en", "_blank", "noopener,noreferrer")}/>
              </div>
              <div className="social-circle">
                <img src="src/assets/link.png" alt="Social 2"onClick={() => window.open("https://www.linkedin.com/company/baskworldwide-creative/posts/?feedView=all", "_blank", "noopener,noreferrer")} />
              </div>
              <div className="social-circle">
                <img src="src/assets/fb.png" alt="Social 3" onClick={() => window.open("https://www.facebook.com/profile.php?id=61555741500166&mibextid=rS40aB7S9Ucbxw6v", "_blank", "noopener,noreferrer")} />
              </div>
            </div>
          </div>
          
          <div className="work-with-us1">
            <span>Work with us</span>
            <img src="src/assets/right.png" alt="Arrow" className="arrow-icon"onClick={() => navigate("/Careers")} />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AboutPage;
