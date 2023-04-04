import React, { createContext, useState, useEffect } from "react";

// 1. cream contextul
const InformationsContext = createContext([]);

// 2. cream provider pe baza contextului
function InformationsProvider({ children }) {
  const [informations, setInformations] = useState(() =>
    JSON.parse(window.localStorage.getItem("AGENDA") ?? "[]")
  );
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("AGENDA", JSON.stringify(informations));
  }, [informations]);

  const value = {
    informations: searchValue
      ? informations.filter(({ nume, prenume, telefon }) =>
          [nume, prenume, telefon].some((item) => item.includes(searchValue))
        )
      : informations,
    setInformations,
    searchValue,
    setSearchValue,
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
