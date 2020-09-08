import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import { themeContext } from '../context/ThemeContextProvider';

const dark = '#101820';
const white = '#eef2f6';

const Header = () => {
  const { light } = useContext(themeContext);

  return (
    <Headroom>
      <header
        className="header"
        style={{ backgroundColor: light ? white : dark }}
      >
        <div className="lg-container">
          <div className="header-parent">
            <div className="header-child header-child_title">
              <button
                className="header-title_btn"
                style={{ color: light ? dark : white }}
              >
                <h3 className="header-title">platformpro</h3>
              </button>
            </div>
            <div className="header-child header-child_menu">
              <ul className="header-ul_menu">
                <li>
                  <button
                    className="header-ul_menu-btn"
                    style={{ color: light ? dark : white }}
                  >
                    about
                  </button>
                </li>
                <li>
                  <button
                    className="header-ul_menu-btn"
                    style={{ color: light ? dark : white }}
                  >
                    builder
                  </button>
                </li>
                <li>
                  <button
                    className="header-ul_menu-btn"
                    style={{ color: light ? dark : white }}
                  >
                    features
                  </button>
                </li>
                <li>
                  <button
                    className="header-ul_menu-btn"
                    style={{ color: light ? dark : white }}
                  >
                    blog
                  </button>
                </li>
                <li>
                  <button
                    className="header-ul_menu-btn"
                    style={{ color: light ? dark : white }}
                  >
                    brand
                  </button>
                </li>
              </ul>
            </div>
            <div className="header-child header-child_buttons">
              <ul className="header-ul_btns">
                <li>
                  <button
                    className={`header-ul_btns-log-in ${
                      light ? 'menu-btn_border-dark' : 'menu-btn_border'
                    }`}
                  >
                    log in
                  </button>
                </li>
                <li>
                  <button
                    className={`${light ? 'menu-btn_bg-dark' : 'menu-btn_bg'}`}
                  >
                    sign up
                  </button>
                </li>
              </ul>
            </div>
            <div className="mobile-nav">
              <button>
                <span>
                  <i class="mobile-icon fas fa-bars"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
