import { useState } from "react";

export default function Dropdown({foodsView,setFoodsView}) {
  const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState("Foods");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setFoodsView(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-40">
      <button
        onClick={toggleDropdown}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ea580c] flex justify-between items-center"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {foodsView?"Foods":"Restaurants"}
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

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <ul>
            <li
              className={`transition-all cursor-pointer px-4 py-2 hover:bg-[#fb9563] hover:text-white rounded-t-md ${
                foodsView === true ? "bg-[#ea580c] text-white" : ""
              }`}
              onClick={() => selectOption(true)}
            >
              Foods
            </li>
            <li
              className={`transition-all cursor-pointer px-4 py-2 hover:bg-[#fb9563] hover:text-white rounded-b-md ${
                foodsView === false ? "bg-[#ea580c] text-white" : ""
              }`}
              onClick={() => selectOption(false)}
            >
              Restaurants
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
