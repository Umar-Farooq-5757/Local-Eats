import { Lock, LockOpen, Mail, Phone, Signature } from "lucide-react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Customer = ({ selectedTab, setSelectedTab }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {selectedTab.role == "customer" &&
        (selectedTab.method == "login" ? (
          <div>
            {/* email */}
            <div className="my-5">
              <p className="text-gray-500 text-sm">Enter your email</p>
              <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
                <Mail className="size-5" />
                <input
                  className="outline-none grow"
                  type="text"
                  placeholder="(i.e. customer@gmail.com)"
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
            <p
              onClick={() => toast("Contact an admin", { icon: "🙏" })}
              className="underline select-none text-xs text-right cursor-pointer text-red-400"
            >
              Forgot password?
            </p>
            <button className="bg-[#ff8746] text-gray-800 mt-5 py-2 cursor-pointer transition-all hover:bg-[#ff7328] rounded-lg w-full">
              Login
            </button>
            <p
              onClick={() =>
                setSelectedTab((prevTab) => ({
                  ...prevTab,
                  method: "signup",
                }))
              }
              className="underline select-none text-sm text-right cursor-pointer text-blue-500 mt-4"
            >
              Don't have an account? Signup
            </p>
          </div>
        ) : (
          <div>
            {/* name */}
            <div className="my-3">
              <p className="text-gray-500 text-sm">Enter your name</p>
              <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
                <Signature className="size-5" />
                <input
                  className="outline-none grow"
                  type="text"
                  placeholder="(i.e. John Doe)"
                  name=""
                  autoComplete="off"
                />
              </div>
            </div>
            {/* email */}
            <div className="my-3">
              <p className="text-gray-500 text-sm">Enter your email</p>
              <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
                <Mail className="size-5" />
                <input
                  className="outline-none grow"
                  type="email"
                  placeholder="(i.e. customer@gmail.com)"
                  name=""
                  autoComplete="off"
                />
              </div>
            </div>
            {/* password */}
            <div className="my-3">
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
            {/* phone */}
            <div className="my-3">
              <p className="text-gray-500 text-sm">Enter your phone number</p>
              <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
                <Phone className="size-5" />
                <input
                  className="outline-none grow"
                  type="text"
                  placeholder="(i.e. 03275150203)"
                  name=""
                  autoComplete="off"
                />
              </div>
            </div>
            {/*  */}
            <p
              onClick={() => toast("Contact an admin", { icon: "🙏" })}
              className="underline select-none text-xs text-right cursor-pointer text-red-400"
            >
              Forgot password?
            </p>
            <button className="bg-[#ff8746] text-gray-800 mt-5 py-2 cursor-pointer transition-all hover:bg-[#ff7328] rounded-lg w-full">
              Signup
            </button>
            <p
              onClick={() =>
                setSelectedTab((prevTab) => ({
                  ...prevTab,
                  method: "login",
                }))
              }
              className="underline select-none text-sm text-right cursor-pointer text-blue-500 mt-4"
            >
              Already have an account? Login
            </p>
          </div>
        ))}
    </>
  );
};

export default Customer;
