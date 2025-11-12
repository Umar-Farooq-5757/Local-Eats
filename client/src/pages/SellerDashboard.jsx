import React from "react";
import { useAppContext } from "../context/AppContext";

//design inspiration
//https://www.figma.com/design/T6h90aSafWM85PglHzMsZG/CRM-Dashboard-Customers-List--Community-?node-id=0-1&p=f&t=mzaml4csrAj7FY8w-0

const SellerDashboard = () => {
  const { dummyData } = useAppContext();
  const restaurant = dummyData.restaurants[0];

  return (
    <section className="p-6">
      {/* BASIC INFO e.g. name, description edit options */}
      <div className="bg-white px-5 py-3 border border-black/10 shadow-xs rounded-md flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">{restaurant.name}</h1>
        <p className="text-black/75">{restaurant.description}</p>
        <p className="text-black/75"><span className="text-black bg-[#ffb892] rounded-sm px-2 py-0.5 text-center">Address:</span> {restaurant.address}, {restaurant.city}</p>
      </div>
    </section>
  );
};

export default SellerDashboard;
