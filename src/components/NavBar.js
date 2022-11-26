import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartCheckFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  function MenuClose() {
    setNav(!nav);
  }

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={MenuClose}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Femi <span className=" font-bold"> Eats</span>
        </h1>
        <div className="hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2 ">Delivery</p>

          <p className="p-2 font-bold">Pickups</p>
        </div>
      </div>

      {/*Search input*/}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w[500px]  ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent  p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <div>
        {/*Cart Button*/}
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartCheckFill size={20} className="mr-2" /> Cart
        </button>

        {/*Mobile Menu*/}
        {/*Overlay*/}

        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/*Side bar*/}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10  duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10  duration-300"
          }
        >
          <AiOutlineClose
            onClick={MenuClose}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            Best <span className="font-bold">Chop</span>
          </h2>

          <nav className="">
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex">
                <TbTruckDelivery className="mr-4" size={25} />
                Orders
              </li>

              <li className="text-xl py-4 flex">
                <MdFavorite className="mr-4" size={25} />
                Favourites
              </li>

              <li className="text-xl py-4 flex">
                <FaWallet className="mr-4" size={25} />
                Wallet
              </li>

              <li className="text-xl py-4 flex">
                <MdHelp className="mr-4" size={25} />
                Help
              </li>

              <li className="text-xl py-4 flex">
                <AiFillTag className="mr-4" size={25} />
                Promotions
              </li>

              <li className="text-xl py-4 flex">
                <BsFillSaveFill className="mr-4" size={25} />
                Best One
              </li>

              <li className="text-xl py-4 flex">
                <FaUserFriends className="mr-4" size={25} />
                Invite friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
