import React, { useContext } from 'react';
import { themeContext } from '../../context/ThemeContextProvider';

import lightLogo from '../../../images/light-logo_sm.svg';
import darkLogo from '../../../images/logo-dark.svg';

import circle1 from '../../../images/whiteInterstellar/circle-1.svg';
import circle2 from '../../../images/whiteInterstellar/circle-2.svg';
import circle3 from '../../../images/whiteInterstellar/circle-3.svg';
import circle4 from '../../../images/whiteInterstellar/circle-4.svg';
import circle5 from '../../../images/whiteInterstellar/circle-5.svg';
import circle6 from '../../../images/whiteInterstellar/circle-6.svg';
import circle7 from '../../../images/whiteInterstellar/circle-7.svg';
import circle8 from '../../../images/whiteInterstellar/circle-8.svg';
import circle9 from '../../../images/whiteInterstellar/circle-9.svg';
import circle10 from '../../../images/whiteInterstellar/circle-10.svg';

import circle1Black from '../../../images/blackInterstellar/circle-1.svg';
import circle2Black from '../../../images/blackInterstellar/circle-2.svg';
import circle3Black from '../../../images/blackInterstellar/circle-3.svg';
import circle4Black from '../../../images/blackInterstellar/circle-4.svg';
import circle5Black from '../../../images/blackInterstellar/circle-5.svg';
import circle6Black from '../../../images/blackInterstellar/circle-6.svg';
import circle7Black from '../../../images/blackInterstellar/circle-7.svg';
import circle8Black from '../../../images/blackInterstellar/circle-8.svg';
import circle9Black from '../../../images/blackInterstellar/circle-9.svg';
import circle10Black from '../../../images/blackInterstellar/circle-10.svg';

const LandingInterstellar = () => {
  const { footer } = useContext(themeContext);

  return (
    <>
      <div className="landingInterstaller-hero">
        <div className="landingInterstellar-child">
          <div className="circles">
            <div className="circles-container">
              <div className="circle">
                <img
                  className="footer-interstellar_logo"
                  src={footer ? darkLogo : lightLogo}
                  alt="logo"
                />
              </div>
              <div className="circle">
                <img
                  className="rotating-30"
                  src={footer ? circle1Black : circle1}
                  alt="circle"
                />
              </div>
              <div className="circle">
                <img
                  className="rotating-50"
                  src={footer ? circle2Black : circle2}
                  alt="circle"
                />
              </div>
              <div className="circle2">
                <img
                  className="rotating-70"
                  src={footer ? circle3Black : circle3}
                  alt="circle"
                />
              </div>
              <div className="circle2">
                <img
                  className="rotating-40"
                  src={footer ? circle4Black : circle4}
                  alt="circle"
                />
              </div>
              <div className="circle3">
                <img
                  className="rotating-70"
                  src={footer ? circle5Black : circle5}
                  alt="circle"
                />
              </div>
              <div className="circle3">
                <img
                  className="rotating-30"
                  src={footer ? circle6Black : circle6}
                  alt="circle"
                />
              </div>
              <div className="circle4">
                <img
                  className="rotating-50"
                  src={footer ? circle7Black : circle7}
                  alt="circle"
                />
              </div>
              <div className="circle4">
                <img
                  className="rotating-40"
                  src={footer ? circle8Black : circle8}
                  alt="circle"
                />
              </div>
              <div className="circle5">
                <img
                  className="rotating-100"
                  src={footer ? circle9Black : circle9}
                  alt="circle"
                />
              </div>
              <div className="circle5">
                <img
                  className="rotating-70"
                  src={footer ? circle10Black : circle10}
                  alt="circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingInterstellar;
