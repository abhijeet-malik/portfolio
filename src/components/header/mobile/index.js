/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './mobile.css';

function Mobile({ isOpen, setIsOpen }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(false)}>
        <i className="fi fi-rr-cross-circle"></i>
      </div>

      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i className="fi fi-rr-edit-alt option-icon"></i>Projects
          </a>
        </div>

        <div className="mobile-option">
          <a href="#skills">
            <i className="fi fi-rr-laptop option-icon"></i>Skills
          </a>
        </div>

        <div className="mobile-option">
          <a href="#work">
            <i className="fi fi-rr-briefcase option-icon"></i>Experience
          </a>
        </div>

        <div className="mobile-option">
          <a href="#contact">
            <i className="fi fi-rr-smartphone option-icon"></i>Contact
          </a>
        </div>

        <div className="mobile-option" onClick={toggleTheme}>
          <a href="#">
            {theme === 'light' ? (
              <>
                <i className="fi fi-rr-moon option-icon"></i>Dark
              </>
            ) : (
              <>
                <i className="fi fi-rr-sun option-icon"></i>Light
              </>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
