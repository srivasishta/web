import React from 'react';
import Header from './Header';
import TitleSection16 from './TitleSection16';
import ProjectCard16 from './ProjectCard16';
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
      <TitleSection16 style={{ flexGrow: 0 }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
        paddingBottom: '20px',
      }}>
        
       
        
        
        <h1 className="stratergy">strategy</h1>
        <p className="stratergy-para">At Bask, we believe being creative begins with great strategy. Without great strategy, there’s no great creativity. You will see that every great campaign ever, every great brand that was ever created all flowed from insight-driven strategy. We help brands with strategic insights.</p>
        <h1 className="Creative">creative</h1>
        <p className="creative-para">Creative
        We create advertising campaigns that unite a brand and give it a unique position in the minds of the consumer by providing emotional satisfaction and appeal through our work. We do brand campaigns in print, tv, radio, films and the digital medium.
        </p>
        <h1 className="Design">Design</h1>
        <p className="design-para">The face of every brand is its identity. We dress up brands with great logo design, graphics, packaging and experience design that tell the world the values they
        stand for.</p>
        <h1 className="digital">Digital</h1>
        <p className="digital-para">We do Websites, social media, Performance Marketing, App Design, SEO, Native Advertising and everything else digital.</p>
        <h1 className="Tech">Tech</h1>    
        <p className="Tech-para">We develop apps and find tech solutions for brand marketing problems. And our tech team also dabbles in AI to find applications in marketing and branding.
        </p>
        <h1 className="Marketing1">Marketing</h1>
        <p className="Marketing-para">All the best advertising campaigns may have only minimal effect if the brand’s marketing is flawed. Our marketing experts help iron out the flaws with appropriate marketing strategy and services. We offer brand and marketing audits and help establish fulfilment journeys.</p>
        <h1 className="Retail">Retail</h1>
        <p className="Retail-para">The touch point of brands. We do retail audits and help design retail experiences that are unique to the brand. After all getting a lead to come to the store is not good enough, conversion is what we try to achieve through good retail design.
        </p>
        <h1 className="Production">Production</h1>
        <p className="production-para">From idea to execution our production team manages production of still shoots to films.</p>
        <h1 className="Brand">Brand Factory</h1>
        <p className="Brand-para">We also create our own brands. We come up with ideas, find the right partners and help them run it. We have few of them in the kiln. And if you are an investor and like to partner with us in creating your own brands, give us a call.</p>
    </div>

      {/* Footer */}
      <footer className="footer15">
        <div className="social-links">
          <span className="connect-text156">Connect with us</span>
          <div className="social-icons156">
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
        <div className="Our-Team">
        <span className="Our-Team496"onClick={() => navigate("/layout0")}>Our Team</span>
        <span className="Our-Values396"onClick={() => navigate("/layout15")}>Our Values</span>
        <span className="What-we-do666">What We Do</span>
        
          
        
    
       </div>

        <div className="work-links">
    <span className="work-text156">Work with us</span>
    <img src="src/assets/right.png" alt="Work with us" className="work-image156"onClick={() => navigate("/Careers")} />
  </div>
      </footer>

      {/* Existing Footer Section */}
      <footer id="footer16">
        <div className="footer-container">
          <div className="footer-links166">
            <a href="/about" className="about-link">About</a>
            <a href="/contact" className="contact-link">Contact</a>
            <a href="/careers" className="careers-link">Careers</a>
            <img 
              src="src/assets/image.png" 
              alt="Footer Illustration" 
              className="footer-img16"
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