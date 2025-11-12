import { MoveRight } from "lucide-react";
import FoodCard from "../components/ui/FoodCard";
import RestaurantCard from "../components/ui/RestaurantCard";
import { useState } from "react";
import Dropdown from "../components/ui/Dropdown";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const {dummyData} = useAppContext()
  const [foodsView, setFoodsView] = useState(false);
  const scrollDown = () => {
    window.scrollBy({
      top: 865,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <div className="flex flex-col items-center justify-center  min-h-[calc(640px+163px)] pb-20 gap-7 px-80 select-none">
        <h1 className=" font-bold text-8xl font-mono bg-linear-to-r from-[#ea580c] to-[#ffa676] bg-clip-text text-transparent">
          Local Eats
        </h1>
        <p className="text-gray-600 text-center">
          Welcome to Local Eats, the dual-purpose platform designed to bring the
          local food community closer together.
        </p>
        <button
          onClick={scrollDown}
          className="flex justify-between items-center gap-3 cursor-pointer transition-all text-white font-semibold py-2 px-4 shadow-md hover:shadow-2xl rounded-md bg-linear-to-r from-[#ea580c] to-[#f58041] hover:gap-6"
        >
          Get Started <MoveRight />
        </button>
      </div>
      {/* Boundary */}
      <div className="bg-[#ffd2b9] w-[95vw] mx-auto h-0.5"></div>
      {/* FOODS / Restaurants */}
      <div className="flex items-center justify-between mt-10 px-20 pr-32">
        <h1 className="text-3xl font-semibold">
          {foodsView ? "Foods for you" : "Restaurants for you"}
        </h1>
        <Dropdown foodsView={foodsView} setFoodsView={setFoodsView} />
      </div>
      <div className="h-[1000px] mt-4 px-16 py-2 grid grid-cols-3 justify-center gap-6">
        {foodsView ? (
          <>
            {/* FODO CARD */}
            {dummyData.items.map((item) => {
              return <FoodCard key={item.id} item={item} />;
            })}
          </>
        ) : (
          <>
            {/* Restaurant CARD */}
            {dummyData.restaurants.map((restaurant) => {
              return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
            })}
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
