import React, { createContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [ someInfo, setSomeInfo ] = useState('hello')
  return (
    <AppContext.Provider value={{someInfo, setSomeInfo}}>
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider, AppContext };
