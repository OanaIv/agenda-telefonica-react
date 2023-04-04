import React, { createContext, useState } from "react";

// 1. cream contextul
const InformationsContext = createContext([]);

// 2. cream provider pe baza contextului
function InformationsProvider({ children }) {
  const [informations, setInformations] = useState([]);

  const value = {
    informations,
    setInformations,
  };

  return (
    <InformationsContext.Provider value={value}>
      {children}
    </InformationsContext.Provider>
  );
}

// 3. cream un hook pentru a avea acces la context
function useInformations() {
  const context = React.useContext(InformationsContext);
  if (context === undefined) {
    throw new Error(
      "useInformations must be used within a InformationsProvider"
    );
  }
  return context;
}

export { InformationsProvider, useInformations };
