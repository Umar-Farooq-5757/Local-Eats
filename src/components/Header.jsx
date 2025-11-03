import logo from "../../public/modified-logo.svg";
import { Sun, Moon } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { isDark, setIsDark } = useAppContext();
  return (
    <header className="bg-white flex justify-between items-center px-20 shadow-md pb-2">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img className="h-[52px] w-[52px]" src={logo} alt="" />
        <h1 className="font-semibold text-2xl bg-orange-50">Local Eats</h1>
      </div>
      <button
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("isDark", !isDark);
        }}
        className="cursor-pointer rounded-full hover:bg-gray-200 transition-all p-1"
      >
        {isDark ? <Sun className="size-6" /> : <Moon className="size-6" />}
      </button>
    </header>
  );
};

export default Header;
