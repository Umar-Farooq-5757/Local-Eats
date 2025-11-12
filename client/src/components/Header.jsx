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
        <h1 className="font-semibold text-2xl">Local Eats</h1>
      </div>
      <div className="flex items-center gap-2 ">
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
          <ChevronDown
            className={`size-4 ${
              isProfileDropdownOpen && "rotate-180"
            } transition-all`}
          />
        </div>
        <a
          href="https://github.com/Umar-Farooq-5757/Local-Eats"
          target="_blank"
          className="border border-gray-300 cursor-pointer flex justify-center items-center px-3 transition-all hover:bg-gray-800 hover:text-gray-200 rounded-md"
        >
          {/* GITHUB SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github-icon lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        {/* <button
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", !isDark);
          }}
          className="cursor-pointer rounded-full hover:bg-gray-200 transition-all p-1"
        >
          {isDark ? <Sun className="size-6" /> : <Moon className="size-6" />}
        </button> */}
      </div>
      <ProfileDropdown />
    </header>
  );
};

export default Header;
