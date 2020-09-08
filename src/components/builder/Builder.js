import React, { useContext } from 'react';
import { Section } from 'react-scroll-section';
import { themeContext } from '../context/ThemeContextProvider';

import builder1 from '../../images/builder1.svg';
import builder2 from '../../images/builder2.svg';
import builder3 from '../../images/builder3.svg';
import builder1Dark from '../../images/builder1-dark.svg';
import builder2Dark from '../../images/builder2-dark.svg';
import builder3Dark from '../../images/builder3-dark.svg';

const dark = '#101820';
const white = '#eef2f6';

const Builder = props => {
  const { light } = useContext(themeContext);

  return (
    <Section id="builder">
      <div className="builder md_section-spacing">
        <div className="lg-container">
          <h1 className="builder-title md_section-spacing">website builder</h1>
          <div
            className="builder1-parent"
            style={{
              borderBottom: light ? `1px solid ${dark}` : `1px solid ${white}`,
            }}
          >
            <div className="builder1-child_container sticky">
              <div className="builder1-child_container1">
                <h2 id="builder1-h3_first" className="builder1-h3">
                  <span>
                    Powerful Tools, <br /> All in One Place
                  </span>
                </h2>
                <p>
                  Customize and optimize your site with powerful tools that put
                  you in the driver’s seat of your web design. Quickly swap
                  between themes and designs in our easy-to-use drag and drop
                  system to build a site that will impress any sponsor that
                  visits.
                </p>
              </div>
              <div>
                <h2 className="builder1-h3">Own your brand</h2>
                <p>
                  Platformpro stores and archives your important content, like
                  emotes, animations and banners for easy access without relying
                  on services like twitch. Use your pre-made custom content on
                  your site easily for a seamless experience.
                </p>
              </div>
            </div>
            <div className="builder-img_container">
              <div className="builder-spacing">
                <img
                  className="builder1"
                  src={light ? builder1Dark : builder1}
                  alt="builder illustration"
                />
              </div>
              <div className="builder-spacing">
                <img
                  className="builder2"
                  src={light ? builder2Dark : builder2}
                  alt="builder illustration"
                />
              </div>
              <div>
                <img
                  className="builder3"
                  src={light ? builder3Dark : builder3}
                  alt="builder illustration"
                />
              </div>
            </div>
          </div>
          <div
            className="builder-cta_parent"
            style={{
              borderBottom: light ? `1px solid ${dark}` : `1px solid ${white}`,
            }}
          >
            <h1 className="builder-cta">Build your website</h1>
            <button
              className={`${light ? 'btn-bg_dark' : 'btn-bg'} builder-cta_btn`}
            >
              build now
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Builder;
