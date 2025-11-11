import React from "react";

const FoodCard = ({ index, style, item }) => {
  return (
    <div
      key={item.id}
      className="food hover:bg-white border-gray-300 min-h-64 max-h-72 w-fit p-3 justify-self-center hover:shadow-lg border hover:border-gray-300 rounded-sm transition-all"
    >
      <img
        loading="lazy"
        decoding="async"
        width={240}
        className="rounded-sm h-40"
        src={`../../sample_images/${item.image_url}`}
        alt=""
        style={{ objectFit: 'cover' }}
      />
      <h2 className="font-semibold text-lg mt-8">{item.name}</h2>
      <div className="flex justify-between items-center">
        <p className="text-sm text-black/70">$ {item.price} for one</p>
        <p className="text-sm text-black/70 bg-black/20 rounded-md px-2">
          {item.prep_time_minutes} min
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
