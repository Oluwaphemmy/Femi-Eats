import React from "react";

const HeadlinCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4  py-12 grid md:grid-cols-3 gap-6 ">
      {/*Card */}

      <div className="rounded-xl relative">
        {/*Overlay */}

        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"> Spaghettit</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[300px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=" spagheti"
        />
      </div>

      <div className="rounded-xl relative">
        {/*Overlay */}

        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"> Barbecue</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[300px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=" spagheti"
        />
      </div>
      <div className="rounded-xl relative">
        {/*Overlay */}

        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"> Cake</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[300px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=" spagheti"
        />
      </div>
    </div>
  );
};

export default HeadlinCard;
