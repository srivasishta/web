import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu';
import AboutPage from './Components/AboutPage';
import Prabhakar from './Profiles/Prabhakar';
import Suresh from './Profiles/Suresh';
import Sonica from './Profiles/Sonica';
import Gowri from './Profiles/Gowri';
import Priyanshu from './Profiles/Priyanshu';
import Sampath from './Profiles/Sampath';
import Layout0 from './Details/Layout0';
import Layout3 from './Client1/Layout3';
import Layout4 from './Client4/Layout4';
import Layout5 from './Client5/Layout5';
import Layout6 from './Client8/Layout6';
import Layout7 from './Client9/Layout7';
import Layout8 from './Client10/Layout8';
import Layout9 from './Client3/Layout9';
import Layout10 from './HomePage/Layout10';
import Layout11 from './Client6/Layout11';
import Layout12 from './Client7/Layout12';
import Layout13 from './Client2/Layout13';
import Contact  from './Contacts/Contact'
import Layout16     from './what/Layout16';
import Layout15 from './Values/Layout15';
import Layout17 from './Tasks/Layout17';
import Careers from './Careers/Careers';

const App = () => {
  return (
    <Router>
      <div style={{ width: "100%", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Layout10 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/layout0" element={<Layout0 />} />
          <Route path="/layout3" element={<Layout3 />} />
          <Route path="/layout4" element={<Layout4 />} /> 
          <Route path="/layout5" element={<Layout5 />} /> 
          <Route path="/layout6" element={<Layout6 />} /> 
          <Route path="/layout7" element={<Layout7 />} /> 
          <Route path="/layout8" element={<Layout8 />} /> 
          <Route path="/layout9" element={<Layout9 />} /> 
          <Route path="/layout11" element={<Layout11 />} /> 
          <Route path="/layout12" element={<Layout12 />} /> 
          <Route path="/layout13" element={<Layout13 />} />
          <Route path="/layout15" element={<Layout15 />} />
          <Route path="/layout16" element={<Layout16 />} />
          <Route path="/layout17" element={<Layout17 />} />
          <Route path="/what/Layout16" element={<Layout16 />} />
          <Route path="/Sampath" element={<Sampath />} />
          <Route path="/prabhakar" element={<Prabhakar />} />
          <Route path="/suresh" element={<Suresh />} />
          <Route path="/sonica" element={<Sonica />} />
          <Route path="/Gowri" element={<Gowri />} />
          <Route path="/Priyanshu" element={<Priyanshu />} />
          <Route path="/Menu" element={<Menu />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;