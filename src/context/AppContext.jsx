import { createContext, useContext, useState } from "react";
import dummyData from "../../data";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const user = dummyData.users[0];

  return (
    <AppContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
