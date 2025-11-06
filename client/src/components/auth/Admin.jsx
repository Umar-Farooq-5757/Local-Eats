import { Lock, LockOpen, Mail } from "lucide-react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Admin = ({selectedTab,setSelectedTab}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {selectedTab.role == "admin" &&
          <div>
            {/* email */}
            <div className="my-5">
              <p className="text-gray-500 text-sm">Enter your email</p>
              <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
                <Mail className="size-5" />
                <input
                  className="outline-none grow"
                  type="email"
                  placeholder="(i.e. admin@gmail.com)"
                  name=""
                  autoComplete="off"
                />
              </div>
            </div>
            {/* password */}
            <div className="my-5">
              <p className="text-gray-500 text-sm">Enter your password</p>
              <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
                <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                  {isPasswordVisible ? (
                    <LockOpen className="size-5" />
                  ) : (
                    <Lock className="size-5" />
                  )}
                </div>
                <input
                  className="outline-none grow"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="(i.e. p@s$wOrd321)"
                  name=""
                  autoComplete="off"
                />
              </div>
            </div>
            <button className="bg-[#ff8746] text-gray-800 mt-5 py-2 cursor-pointer transition-all hover:bg-[#ff7328] rounded-lg w-full">
              Login
            </button>
          </div>
        }
    </>
  );
};

export default Admin;
