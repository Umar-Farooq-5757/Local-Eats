import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Dropdown({ state, setState }) {
  const [isOpen, setIsOpen] = useState(false);
  //   const [selected, setSelected] = useState("Foods");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    console.log(state);
    setState(option);
    setIsOpen(false);
  };
  const location = useLocation();
  const isOrdersDropdown = location.pathname === "/dashboard";
  return (
    <div className="relative inline-block text-left w-32">
      <button
        onClick={toggleDropdown}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-2 py-1 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ea580c] flex justify-between items-center"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {state == "Foods" && "Foods"}
        {state == "Restaurants" && "Restaurants"}
        {state == "All" && "All"}
        {state == "Completed" && "Completed"}
        {state == "Pending" && "Pending"}
        <svg
          className={`ml-2 h-5 w-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOrdersDropdown
        ? isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              <ul>
                <li
                  className={`transition-all cursor-pointer px-4 py-2 hover:bg-[#fb9563] hover:text-white rounded-t-md ${
                    state === true ? "bg-[#ea580c] text-white" : ""
                  }`}
                  onClick={() => selectOption("All")}
                >
                  All
                </li>
                <li
                  className={`transition-all cursor-pointer px-4 py-2 hover:bg-[#fb9563] hover:text-white rounded-b-md ${
                    state === false ? "bg-[#ea580c] text-white" : ""
                  }`}
                  onClick={() => selectOption("Completed")}
                >
                  Completed
                </li>
                <li
                  className={`transition-all cursor-pointer px-4 py-2 hover:bg-[#fb9563] hover:text-white rounded-b-md ${
                    state === false ? "bg-[#ea580c] text-white" : ""
                  }`}
                  onClick={() => selectOption("Pending")}
                >
                  Pending
                </li>
              </ul>
            </div>
          )
        : isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              <ul>
                <li
                  className={`transition-all cursor-pointer px-4 py-2 hover:bg-[#fb9563] hover:text-white rounded-t-md ${
                    state === true ? "bg-[#ea580c] text-white" : ""
                  }`}
                  onClick={() => selectOption("Foods")}
                >
                  Foods
                </li>
                <li
                  className={`transition-all cursor-pointer px-4 py-2 hover:bg-[#fb9563] hover:text-white rounded-b-md ${
                    state === false ? "bg-[#ea580c] text-white" : ""
                  }`}
                  onClick={() => selectOption("Restaurants")}
                >
                  Restaurants
                </li>
              </ul>
            </div>
          )}
    </div>
  );
}
