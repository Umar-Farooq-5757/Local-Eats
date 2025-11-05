import { useState } from "react";
import modifiedLogo from "../../public/modified-logo.svg";

const Login = () => {
  const [selectedTab, setSelectedTab] = useState({
    role: "customer",
    method: "login",
  });
  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="bg-white h-[80vh] w-2/5 rounded-lg shadow-md border border-gray-200">
        {/* LOGO AND TITLE */}
        <div className="flex justify-center items-center flex-col gap-3">
          <img className="size-16" src={modifiedLogo} alt="logo" />
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
            } text-[15px] rounded-md px-4 py-[3px] cursor-pointer text-black/70 transition-all`}
          >
            Admin
          </div>
          <div
            onClick={() =>
              setSelectedTab((prevTab) => ({ ...prevTab, role: "customer" }))
            }
            className={`${
              selectedTab.role == "customer" && "bg-[#ff8746]"
            } text-[15px] rounded-md px-4 py-[3px] cursor-pointer text-black/70 transition-all`}
          >
            Customer
          </div>
          <div
            onClick={() =>
              setSelectedTab((prevTab) => ({ ...prevTab, role: "seller" }))
            }
            className={`${
              selectedTab.role == "seller" && "bg-[#ff8746]"
            } text-[15px] rounded-md px-4 py-[3px] cursor-pointer text-black/70 transition-all`}
          >
            Seller
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
