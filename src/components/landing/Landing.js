import React, { useContext } from 'react';
import { themeContext } from '../context/ThemeContextProvider';

import logo from '../../images/logo.svg';

const Landing = props => {
  const { light } = useContext(themeContext);

  return (
    <div className="lg-container section-spacing">
      <div className="landing-parent">
        <div className="landing-child1">
          <h1 className="landing-title">
            The web <br /> design platform <br /> for content creators.
          </h1>
        </div>
        <div className="landing-child2">
          <div className="landing-illustration_container landing-child2_flex">
            <img className="landing-logo" src={logo} alt="logo" />
          </div>
          <div className="landing-child2_flex">
            <h4 className="landing-child2_title">
              Whether you’re brand new or breaking into the top 10,
              Platformpro’s tools and services will help make streaming your
              main source of income. We’ll help you, grow, manage and monetize
              your brand to make a living doing what you love.
            </h4>
            <button
              className={`${light ? 'btn-bg_dark' : 'btn-bg'} landing-btn`}
            >
              start now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
