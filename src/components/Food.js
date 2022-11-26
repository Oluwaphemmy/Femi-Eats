import React, { useState } from "react";
import { categories, data } from "./data/Data";

const Food = () => {
  console.log(data);

  const [Food, setFood] = useState(data);

  //Filter burger

  const FilterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //Filter by Price

  const filterByPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  //Filter by $

  const filterBy$ = () => {
    setFood(
      data.filter((item) => {
        return item.price === "$";
      })
    );
  };
  //Filter by $$$$

  const filterBy$$$$ = () => {
    setFood(
      data.filter((item) => {
        return item.price === "$$$$";
      })
    );
  };

  //Filter by $$

  const filterBy$$ = () => {
    setFood(
      data.filter((item) => {
        return item.price === "$$";
      })
    );
  };

  //Filter by $$$

  const filterBy$$$ = () => {
    setFood(
      data.filter((item) => {
        return item.price === "$$$";
      })
    );
  };

  //All Food

  function allFoodHandler() {
    setFood(data);
  }

  //Burger Filter

  function burgerFilterHandler() {
    setFood(
      data.filter((item) => {
        return item.category === "burger";
      })
    );
  }

  //pizza Filter

  function pizzaFilterHandler() {
    setFood(
      data.filter((item) => {
        return item.category === "pizza";
      })
    );
  }

  //salas Filter

  function saladFilterHandler() {
    setFood(
      data.filter((item) => {
        return item.category === "salad";
      })
    );
  }
  //Chicken Filter

  function chickenFilterHandler() {
    setFood(
      data.filter((item) => {
        return item.category === "chicken";
      })
    );
  }

  return (
    <div className="max-w-[1640px] m-auto px-4py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu
      </h1>
      {/*Filter row */}

      <div className="flex flex-col lg:flex-row justify-between">
        {/*Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={allFoodHandler}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={burgerFilterHandler}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burger
            </button>
            <button
              onClick={() => FilterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={saladFilterHandler}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salad
            </button>
            <button
              onClick={chickenFilterHandler}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/*Filter Price */}

        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={filterBy$}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={filterBy$$}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={filterBy$$$}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={filterBy$$$$}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {Food.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
