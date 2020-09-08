import React, { useContext } from 'react';
import { themeContext } from '../context/ThemeContextProvider';
import { SectionLink } from 'react-scroll-section';

import LandingInterstellar from './interstellar/LandingInterstellar';

import logo from '../../images/light-logo_sm.svg';

const dark = '#101820';
const white = '#eef2f6';

const Footer = () => {
  const { footer } = useContext(themeContext);

  return (
    <footer
      className="footer"
      style={{ backgroundColor: footer ? white : dark }}
    >
      <LandingInterstellar />
      <img className="footer-logo" src={logo} alt="logo" />
      <div className="sm-container">
        <div className="footer-ul_container">
          <ul className="footer-ul_menu">
            <li>
              <SectionLink section="about">
                {({ onClick, isSelected }) => (
                  <button
                    style={{ color: footer ? dark : white }}
                    className="footer-a_menu"
                    onClick={onClick}
                    selected={isSelected}
                  >
                    ABOUT
                  </button>
                )}
              </SectionLink>
            </li>
            <li>
              <SectionLink section="builder">
                {({ onClick, isSelected }) => (
                  <button
                    style={{ color: footer ? dark : white }}
                    className="footer-a_menu"
                    onClick={onClick}
                    selected={isSelected}
                  >
                    BUILDER
                  </button>
                )}
              </SectionLink>
            </li>
            <li>
              <SectionLink section="features">
                {({ onClick, isSelected }) => (
                  <button
                    style={{ color: footer ? dark : white }}
                    className="footer-a_menu"
                    onClick={onClick}
                    selected={isSelected}
                  >
                    FEATURES
                  </button>
                )}
              </SectionLink>
            </li>
            <li>
              <button
                style={{ color: footer ? dark : white }}
                className="footer-a_menu"
              >
                BLOG
              </button>
            </li>
            <li>
              <button
                style={{ color: footer ? dark : white }}
                className="footer-a_menu"
              >
                BRAND
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-legal_container">
          <button
            style={{ color: footer ? dark : white }}
            className="footer-legal_links"
          >
            Legal
          </button>
          <button
            style={{ color: footer ? dark : white }}
            className="footer-legal_links"
          >
            Privacy
          </button>
          <button
            style={{ color: footer ? dark : white }}
            className="footer-legal_links"
          >
            Terms of Service
          </button>
        </div>
        <div className="footer-socials_container">
          <button
            style={{ color: footer ? dark : white }}
            className="footer-socials_btn"
          >
            <span>
              <i className="footer-icons fab fa-facebook-f"></i>
            </span>
          </button>
          <button
            style={{ color: footer ? dark : white }}
            className="footer-socials_btn"
          >
            <span>
              <i className="footer-icons fab fa-twitter"></i>
            </span>
          </button>
          <button
            style={{ color: footer ? dark : white }}
            className="footer-socials_btn"
          >
            <span>
              <i className="footer-icons fab fa-instagram"></i>
            </span>
          </button>
          <button
            style={{ color: footer ? dark : white }}
            className="footer-socials_btn"
          >
            <span>
              <i className="footer-icons fab fa-twitch"></i>
            </span>
          </button>
        </div>
        <div className="legal-container">
          <p
            style={{ color: footer ? dark : white }}
            className="footer-platformpro"
          >
            ~ PLATFORMPRO ~
          </p>
          <p style={{ color: footer ? dark : white }} className="copyright">
            <span className="copyright-text_container">
              Copyright &copy; 2020.
            </span>
          </p>
          <p style={{ color: footer ? dark : white }} className="copyright">
            <span className="copyright-text_container">
              All rights reserved. Developed by{' '}
            </span>
            <span className="ramzi-container">
              <a
                style={{ color: footer ? dark : white }}
                className="ramzi"
                href="https://ramzibach.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ramzi Bach.
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
