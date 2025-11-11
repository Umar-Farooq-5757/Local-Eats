import React from "react";

const RetaurantCard = ({restaurant}) => {
  return (
    <div
      className="bg-white relative border-gray-300 min-h-20 max-h-56 min-w-52 max-w-72 w-72 p-3 justify-self-center hover:shadow-lg border hover:border-[#ea580c] rounded-sm transition-all"
    >
      <h2 className="font-semibold text-xl text-[#ea580c] my-2">
        {restaurant.name}
      </h2>
      <p className="description text-sm text-black/70">
        {restaurant.description}
      </p>
      <p className="">
        <span className="font-semibold">Address:</span> {restaurant.address}
      </p>
      <div className="absolute bottom-3 right-9 left-9 flex items-center justify-between">
        <span className="bg-black/20 px-2 text-sm rounded-sm">{restaurant.open_time}</span>
        <span className="text-sm font-bold text-[#ea580c]">TO</span>
        <span className="bg-black/20 px-2 text-sm rounded-sm">{restaurant.close_time}</span>
      </div>
    </div>
  );
};

export default RetaurantCard;
