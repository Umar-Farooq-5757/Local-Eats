import logo from "../images/modified-logo.svg";
import { useAppContext } from "../context/AppContext";
import ProfileDropdown from "./ui/ProfileDropdown";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const {
    isDark,
    setIsDark,
    user,
    isProfileDropdownOpen,
    setIsProfileDropdownOpen,
  } = useAppContext();
  const getInitials = (fullName) => {
    if (
      !fullName ||
      typeof fullName !== "string" ||
      fullName.trim().length == 0
    ) {
      return "";
    }
    const nameParts = fullName
      .trim()
      .split(/\s+/)
      .filter((part) => part.length > 0);
    const initials = nameParts.map((part) => part.charAt(0));
    return initials.join("").toUpperCase();
  };
  return (
    <header className="bg-white flex justify-between items-center px-20 shadow-md pb-2">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img className="h-[52px] w-[52px]" src={logo} alt="" />
        <h1 className="font-semibold text-2xl bg-orange-50">Local Eats</h1>
      </div>
      {/* <div className="flex items-center gap-2 "> */}
        <div
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          className="flex items-center justify-center gap-1 hover:bg-gray-200 transition-all py-1 px-2 rounded-lg cursor-pointer"
        >
          <div
            className="bg-[#ea580c] text-white font-semibold select-none border border-gray-200 shadow-sm rounded-full p-1.5 text-xs"
            title={user.name}
          >
            {getInitials(user.name)}
          </div>
            <ChevronDown className={`size-4 ${isProfileDropdownOpen&&'rotate-180'} transition-all`} />
        </div>
        
        {/* <button
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", !isDark);
          }}
          className="cursor-pointer rounded-full hover:bg-gray-200 transition-all p-1"
        >
          {isDark ? <Sun className="size-6" /> : <Moon className="size-6" />}
        </button> */}
      {/* </div> */}
      <ProfileDropdown />
    </header>
  );
};

export default Header;
