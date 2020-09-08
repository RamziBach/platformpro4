import React, { useContext } from 'react';
import { themeContext } from '../context/ThemeContextProvider';

import rocket from '../../images/rocket.svg';

const Cta = () => {
  const { light } = useContext(themeContext);

  return (
    <div className="cta lg-container">
      <div>
        <h1 className="cta-title">Blast off your career</h1>
      </div>
      <div className="cta-parent">
        <div className="cta-child">
          <p className="cta-p">
            Here at Platformpro we know your brand needs to be out there, and
            Platformpro is the boost you need to be seen. Our powerful tools
            will help you achieve your content dreams. All for the price of
            free. So, what are you waiting for?
          </p>
          <button className={`cta-btn ${light ? 'btn-bg_dark' : 'btn-bg'}`}>
            launch now
          </button>
        </div>
        <div className="cta-child rocket-container">
          <img className="rocket alive" src={rocket} alt="rocket" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
