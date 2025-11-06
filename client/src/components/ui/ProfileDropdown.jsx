import { createPortal } from "react-dom";
import { useAppContext } from "../../context/AppContext";
import { User, LogOut } from "lucide-react";

const ProfileDropdown = () => {
  const { isProfileDropdownOpen, setIsProfileDropdownOpen, user } =
    useAppContext();
  return createPortal(
    <div
      onClick={() => setIsProfileDropdownOpen(false)}
      className={`fixed top-16 bottom-0 left-0 right-0 transition-all ${
        isProfileDropdownOpen ? "" : "-translate-y-[1000px]"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-60 w-52 py-2 px-3 overflow-hidden bg-white transition-all border border-gray-100 text-sm shadow-md rounded-md absolute top-0 right-16`}
      >
        <div className="flex justify-start items-center gap-2">
          <div className="bg-gray-200 border border-gray-300 p-1 rounded-full">
            <User className="size-7" />
          </div>
          <p className="text-[16px]">{user.name}</p>
        </div>
        {/* SIGN OUT */}
        <div className="flex items-center gap-2 mt-36 hover:bg-gray-100 cursor-pointer transition-all rounded-md w-full pl-1 py-0.5">
          <div>
            <LogOut className="size-6" />
          </div>
          <p>Sign Out</p>
        </div>
      </div>
    </div>,
    document.querySelector("#portal")
  );
};

export default ProfileDropdown;
