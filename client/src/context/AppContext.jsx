import { createContext, useContext, useState } from "react";
import dummyData from "../../data";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const user = dummyData.users[0];
  const [isDark, setIsDark] = useState(localStorage.getItem("isDark") || false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        isDark,
        setIsDark,
        isProfileDropdownOpen,
        setIsProfileDropdownOpen,
        dummyData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
