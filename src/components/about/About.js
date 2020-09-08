import React, { useContext } from 'react';
import { Section } from 'react-scroll-section';
import { themeContext } from '../context/ThemeContextProvider';

const About = () => {
  const { light } = useContext(themeContext);

  return (
    <Section id="about">
      <div className="lg-container">
        <div className="about-parent">
          <div className="about-child_title-container md_section-spacing">
            <h1 className="about-title">about</h1>
          </div>
          <div className="about-child2">
            <h1 className="about-subtitle">
              Let’s face it. <br /> Just streaming <br /> isn’t enough these
              days.
            </h1>
            <div className="about-child2_parent">
              <div className="about-child2_flex">
                <h4 className="about-content about-content1">
                  The greatest content creators in the world have had their
                  personal brand for years. They’re well known and stand out
                  from the crowd. If you’re new to the scene, you’re going to
                  need more than just good content to escape the noise.
                </h4>
                <h4 className="about-content">
                  At Platformpro we know your content deserves a proper home- a
                  beautiful website to show sponsors, a place to own your
                  content, and tools to grow your personal brand without being
                  tied to one service. Our completely free website builder let’s
                  you get the head start you need.
                </h4>
                <h4 className="about-content">
                  Content creators from all over the world are using Platformpro
                  to stand out, it’s time to join them.
                </h4>
              </div>
              <div className="about-child2_flex about-btn_container">
                <button
                  className={`${light ? 'btn-bg_dark' : 'btn-bg'} about-btn`}
                >
                  start now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
