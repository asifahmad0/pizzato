import React from "react";
import logo from "../assets/images/logo.png"
import { FaCartShopping } from "react-icons/fa6"

function Navebar() {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        
        <div className="container py-3 sm:py-0">
          
          <div className="flex justify-between items-center p-4 sm:p-4">
            <div>
              <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"><img src={logo} alt="logo" className="w-[50px]" />Pizzato</a>
            </div>

            <div>
              <ul className="hidden sm:flex gap-4">
                <li><a href="http://" className=" inline-block px-4 hover:text-[#ffc001]">Home</a></li>
                <li><a href="http://" className=" inline-block px-4 hover:text-[#ffc001]">Servisec</a></li>
                <li><a href="http://" className=" inline-block px-4 hover:text-[#ffc001]">Contact</a></li>
              </ul>
              <button className="gap-1 bg-gradient-to-r from-[#ffc001] to-[#ff9c01]
              text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center
               cursor-pointer sm:hidden ">
                Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navebar;
/*

*/
