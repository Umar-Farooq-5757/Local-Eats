import { useState } from "react";
import Logo from "../images/modified-logo.svg";
import { Mail, LockOpen, Lock } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [selectedTab, setSelectedTab] = useState({
    role: "seller",
    method: "login",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <section className="bg-[#e8e8e8] px-16 h-[80vh] w-2/5 rounded-lg shadow-md border border-gray-200">
        {/* LOGO AND TITLE */}
        <div className="flex justify-center items-center flex-col gap-3">
          <img className="size-16" src={Logo} alt="logo" />
          <h1 className="text-3xl font-semibold text-gray-600">
            Welcome back!
          </h1>
          <p className="text-sm text-gray-500">
            Please enter your details below to log in
          </p>
        </div>
        {/* TABS FOR SELECTING ROLE */}
        <div className="flex justify-center items-center mt-7 gap-8">
          <div
            onClick={() =>
              setSelectedTab((prevTab) => ({ ...prevTab, role: "admin" }))
            }
            className={`${
              selectedTab.role == "admin" && "bg-[#ff8746]"
            } text-[15px] rounded-md px-4 py-0.5 cursor-pointer text-black/70 transition-all`}
          >
            Admin
          </div>
          <div
            onClick={() =>
              setSelectedTab((prevTab) => ({ ...prevTab, role: "customer" }))
            }
            className={`${
              selectedTab.role == "customer" && "bg-[#ff8746]"
            } text-[15px] rounded-md px-4 py-0.5 cursor-pointer text-black/70 transition-all`}
          >
            Customer
          </div>
          <div
            onClick={() =>
              setSelectedTab((prevTab) => ({ ...prevTab, role: "seller" }))
            }
            className={`${
              selectedTab.role == "seller" && "bg-[#ff8746]"
            } text-[15px] rounded-md px-4 py-0.5 cursor-pointer text-black/70 transition-all`}
          >
            Seller
          </div>
        </div>
        {/* BOUNDARY LINE */}
        <div className="bg-[#ff8746] w-full h-0.5 my-6"></div>

        {/* Login/Signup for admin */}
        {selectedTab.role == "admin" &&
          (selectedTab.method == "login" ? (
            <div>admin login</div>
          ) : (
            <div>admin signup</div>
          ))}

        {/* Login/Signup for customer */}
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
                    placeholder="(i.e. customer@gmail.com"
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
                    placeholder="(i.e. customer@gmail.com"
                    name=""
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>customer signup</div>
          ))}

        {/* Login/Signup for seller */}
        {selectedTab.role == "seller" &&
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
                    placeholder="(i.e. customer@gmail.com"
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
                    placeholder="(i.e. customer@gmail.com"
                    name=""
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>seller signup</div>
          ))}

          
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
            setSelectedTab((prevTab) => ({ ...prevTab, method: "signup" }))
          }
          className="underline select-none text-sm text-right cursor-pointer text-blue-500 mt-4"
        >
          Don't have an account? Signup
        </p>
      </section>
    </div>
  );
};

export default Login;
