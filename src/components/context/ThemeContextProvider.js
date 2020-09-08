import React, { useState } from 'react';
const themeContext = React.createContext();

const ThemeContextProvider = props => {
  const [light, setLight] = useState(true);
  const [footer, setFooter] = useState(true);

  const toggleLight = () => {
    setLight(prevState => !prevState);
  };

  const toggleFooter = () => {
    setFooter(prevState => !prevState);
  };

  return (
    <themeContext.Provider value={{ light, toggleLight, footer, toggleFooter }}>
      {props.children}
    </themeContext.Provider>
  );
};

export { ThemeContextProvider, themeContext };
