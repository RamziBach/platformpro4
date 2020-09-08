import React, { useContext } from 'react';

import { themeContext } from './context/ThemeContextProvider';

import { ScrollingProvider } from 'react-scroll-section';
import VisibilitySensor from 'react-visibility-sensor';

import Header from './header/Header';
import Landing from './landing/Landing';
import About from './about/About';
import Builder from './builder/Builder';
import Features from './features/Features';
import CollapsibleComponent from './features/CollapsibleComponent';
import MoreFeatures from './features/MoreFeatures';
import Cta from './cta/Cta';
import Footer from './footer/Footer';

import '../styles/app.css';

const dark = '#101820';
const white = '#eef2f6';

const App = () => {
  const { light, toggleLight, toggleFooter } = useContext(themeContext);

  return (
    <ScrollingProvider>
      <div
        className="body"
        style={{
          color: light ? dark : white,
          backgroundColor: light ? white : dark,
        }}
      >
        <Header />
        <Landing />
        <About />
        <VisibilitySensor
          partialVisibility={true}
          offset={{ top: 1000, bottom: 1000 }}
          onChange={toggleLight}
        >
          <Builder />
        </VisibilitySensor>
        <Features />
        <CollapsibleComponent />
        <MoreFeatures />
        <Cta />
        <VisibilitySensor
          partialVisibility={true}
          offset={{ top: 500, bottom: 500 }}
          onChange={toggleFooter}
        >
          <Footer />
        </VisibilitySensor>
      </div>
    </ScrollingProvider>
  );
};

export default App;
