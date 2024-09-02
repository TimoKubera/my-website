import React from 'react';
import { FaGithub, FaLinkedin, FaChess } from 'react-icons/fa';
import { SiReddit } from 'react-icons/si';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/TimoKubera" target="_blank" rel="noopener noreferrer" className="github">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/timo-kubera-a364862a2" target="_blank" rel="noopener noreferrer" className="linkedin">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.chess.com/member/timo_0m1t" target="_blank" rel="noopener noreferrer" className="chess">
          <FaChess size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;