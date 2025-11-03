import { createContext, useContext, useState } from "react";
import dummyData from "../../data";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const user = dummyData.users[0];
  const [isDark, setIsDark] = useState(localStorage.getItem("isDark") || false);

  return (
    <AppContext.Provider
      value={{
        user,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
