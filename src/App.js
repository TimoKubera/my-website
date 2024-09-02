import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaGithub } from 'react-icons/fa'; // Import the menu icon from react-icons
import './App.css';
import Chatbox from './Chatbox';
import Footer from './Footer'; // Import the Footer component

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMenu } from 'react-icons/md';
import { HiMenu } from 'react-icons/hi';

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* Section 1 */}
      <section className="section1">
        <div className="chat-container">
          <div className="label-container">
            <label className="label">Willkommen auf meiner Website</label>
            <label className="label">Frage mein LLM zu meinem Lebenslauf und Projekten.</label>
            <Chatbox />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section2">
        <div className="projects">
          <h2>Projekte</h2>
          <div className="text-container-sec2">
            <div className="text-block-sec2">
              <ul>
                <li><p><b>Projekt 1</b> <FaGithub /></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 2</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 3</b> <FaGithub /></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 4</b> <FaGithub /></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 5</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 6</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
              </ul>
            </div>
            <div className="text-block-sec2">
              <ul>
                <li><p><b>Projekt 7</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 8</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 9</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 10</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 11</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
                <li><p><b>Projekt 12</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section3">
      <div className="image-container">
          <img src="me.jpg" alt="Placeholder" className="image-top-right" />
        </div>
        <div className="about-me">
        <div className="about-me-intro">
          <h2>Über mich</h2>
          <p>Lordem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="text-container">
          <div className="text-block">
            <h2>Beruflicher Werdegang</h2>
              <ul>
                <li>
                  <JobEntry 
                    title="Software Engineering Consultant" 
                    companyName="Ki Reply GmbH"
                    startDate="January 2024" 
                    endDate="aktuell" 
                    description="DevOps, MLOps, Cloud Computing, Creating Pilot Projects" 
                  />
                </li>
                <li>
                  <JobEntry 
                      title="Web Development"
                      companyName="Selbstständig"
                      startDate="January 2020" 
                      endDate="Dezember 2023" 
                      description="eCommerce" 
                  />
                </li>
              </ul>
            <h2>Ausbildung</h2>
              <ul>
                  <li>
                    <EducationEntry 
                      image="leibniz-uni.png" 
                      universityName="Leibniz Universität Hannover" 
                      subject="Informatik B.Sc."
                      startDate="October 2018" 
                      endDate="September 2023" 
                    />
                  </li>
                  <li>
                    <EducationEntry 
                      image="tu-berlin.png" 
                      universityName="TU Berlin"
                      subject="Mathematik B.Sc."
                      startDate="April 2016" 
                      endDate="September 2018" 
                    />
                  </li>
                </ul>
          </div>
          <div className="text-block">
            <h2>Zertifizierungen</h2>
            <ul>
                <li>
                  <CertificateEntry 
                    icon="saa-c03.png" 
                    title="AWS Solutions Architect Associate - SAA-C03" 
                    issueDate="Juli 2024" 
                    validity="Juli 2027" 
                  />
                </li>
                <li>
                  <CertificateEntry 
                    icon="pcap.png" 
                    title="Certified Associate Python Programmer - PCAP-31-0" 
                    issueDate="Juli 2024" 
                    validity="lifetime" 
                  />
                </li>
              </ul>
              <h2>Zertifikate & Sonstiges</h2>
            <ul>
                <li>
                  <CertificateEntry 
                    icon="ibm-ml.png" 
                    title="IBM Machine Learning Professional Certificate" 
                    issueDate="Juli 2023" 
                    validity="lifetime" 
                  />
                </li>
              </ul>
          </div>
        </div>
        </div>
      </section>

      <Footer /> 
    </div>
  );
}

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="topbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <GiHamburgerMenu size={24} />
      </div>
      {menuOpen && (
        <div className="menu" ref={menuRef}>
          <ul>
            <li>Chat</li>
            <li>CV</li>
            <li>Projekte</li>
          </ul>
        </div>
      )}
    </div>
  );
}

// JobEntry Component
const JobEntry = ({ title, companyName, startDate, endDate, description }) => {
  return (
    <div className="job-entry">
      <p><b>{title}</b></p>
      <p>{companyName}</p>
      <p>{startDate} - {endDate}</p>
      <p>{description}</p>
    </div>
  );
};

// EducationEntry Component
const EducationEntry = ({ image, universityName, subject, startDate, endDate }) => {
  return (
    <div className="education-entry">
      <img src={image} alt={universityName} className="education-image" />
      <div className="education-details">
        <p><b>{universityName}</b></p>
        <p>{subject}</p>
        <p>{startDate} - {endDate}</p>
      </div>
    </div>
  );
};

// CertificateEntry Component
const CertificateEntry = ({ icon, title, issueDate, validity }) => {
  return (
    <div className="certificate-entry">
      <img src={icon} alt={title} className="certificate-icon" />
      <div className="certificate-details">
        <p><b>{title}</b></p>
        <p>Gültigkeit: {issueDate} - {validity}</p>
      </div>
    </div>
  );
};


export default App;