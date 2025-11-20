import { createPortal } from "react-dom";
import { useAppContext } from "../../context/AppContext";
import { User, LogOut, Sun, Moon } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const navigate = useNavigate()
  const {
    isProfileDropdownOpen,
    setIsProfileDropdownOpen,
    user,
    isDark,
    setIsDark,
  } = useAppContext();
  return createPortal(
    <div
      onClick={() => setIsProfileDropdownOpen(false)}
      className={`fixed top-16 bottom-0 left-0 right-0 transition-all select-none ${
        isProfileDropdownOpen ? "" : "-translate-y-[1000px]"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-64 w-52 py-2 px-3 overflow-hidden bg-white transition-all border border-gray-100 text-sm shadow-md rounded-md absolute top-0 right-16`}
      >
        <div className="flex justify-start items-center gap-2">
          <div className="bg-gray-200 border border-gray-300 p-1 rounded-full">
            <User className="size-7" />
          </div>
          <p className="text-[16px]">{user.name}</p>
        </div>
        <div className="mt-24">
          <div onClick={()=>{navigate('/dashboard');setIsProfileDropdownOpen(false)}} className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer transition-all rounded-md w-full pl-1 py-1.5 my-1">
            <div>
              <LayoutDashboard className="size-5" />
            </div>
            <p>Dashboard</p>
          </div>
          {/* TOGGLE THEME */}
          <div
            onClick={() => {
              localStorage.setItem("isDark", !isDark);
              setIsDark(!isDark);
            }}
            className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer transition-all rounded-md w-full pl-1 py-1.5 my-1"
          >
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            <p>Toggle theme</p>
          </div>
          {/* SIGN OUT */}
          <div className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer transition-all rounded-md w-full pl-1 py-1.5 my-1">
            <div>
              <LogOut className="size-5" />
            </div>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#portal")
  );
};

export default ProfileDropdown;
