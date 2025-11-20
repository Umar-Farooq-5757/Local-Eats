const FoodCard = ({ item }) => {
  return (
    <div className="food hover:bg-white group border-gray-300 min-h-72 max-h-[50vh] w-fit relative p-3 justify-self-center hover:shadow-lg border hover:border-[#ea580c] rounded-sm transition-all">
      <img
        loading="lazy"
        decoding="async"
        width={240}
        className="rounded-sm h-40"
        src={`../../sample_images/${item.image_url}`}
        alt=""
        style={{ objectFit: "cover" }}
      />
      <h2 className="font-semibold text-lg mt-8">{item.name}</h2>
      <div className="flex justify-between items-center">
        <p className="text-sm text-black/70">$ {item.price} for one</p>
        <p className="text-sm text-black/70 bg-black/20 rounded-md px-2">
          {item.prep_time_minutes} min
        </p>
      </div>
      {/* <!-- From Uiverse.io by mrhyddenn -->  */}
      <div className="button absolute bottom-2 left-1/2 -translate-x-1/2 hidden group-hover:flex">
        <div className="box">O</div>
        <div className="box">R</div>
        <div className="box">D</div>
        <div className="box">E</div>
        <div className="box">R</div>
      </div>
    </div>
  );
};

export default FoodCard;
