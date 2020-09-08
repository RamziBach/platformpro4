import React from 'react';
import { Section } from 'react-scroll-section';
import Interstellar from './Interstellar';

const Features = () => {
  return (
    <Section id="features">
      <div className="features-parent1">
        <div className="md_section-spacing">
          <h1 className="features-title1">features</h1>
        </div>
        <div>
          <Interstellar />
        </div>
      </div>
    </Section>
  );
};

export default Features;
