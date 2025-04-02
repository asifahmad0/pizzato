import React, { useState } from "react";
import { motion } from "framer-motion";
import pz1 from "../assets/images/p1.png";
import pz2 from "../assets/images/p2.png";
import pz3 from "../assets/images/p3.png";
import bg1 from "../assets/images/bg1.png";

function Hero() {
  const imgList = [
    {
      id: 1,
      image: pz1,
    },
    {
      id: 2,
      image: pz2,
    },
    {
      id: 3,
      image: pz3,
    },
  ];
  const BgImage = {
    background: `url(${bg1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    
  };
  const [imageId, setImageId] = useState(pz2);

  return (
    <>
      <div
        style={BgImage}
        className=" bg min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-900
    dark:text-white duration-200 flex justify-center items-center m-0"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text contant section */}
            <div
              className="  text-black flex-col justify-center
               gap-4 pt-12 sm:pl-4 text-center sm:text-left order-2 sm:order-1 "
            >
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#000000] dark:text-white text-5xl sm:6xl lg:text-7xl font-bold"
              >
                Welcome To <span className="text-[#ffc001]">Pizzato </span>Zone
              </motion.h2>

              <p className=" mt-4 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid asperiores incidunt odit iure, deleniti consequuntur
                sunt sequi quae dolorum nam?
              </p>
              <div className="mt-4">
                <button
                  className="bg-gradient-to-r from-[#ffc001] to-[#ff9c01]
                text-white px-4 py-2 rounded-full hover:scale-105 cursor-pointer"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              className="order-1 sm:order-1 min-h-[450px] sm:min-h-[450px]
               flex justify-center items-center relative"
            >
              {/* main image section */}
              <div className=" flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img
                  src={imageId}
                  className="w-[250px] sm:w-[400px] 
                  max-auto spin rounded-full md:-"
                />
              </div>
              {/* main list section */}
              <div
                className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 
                  lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:right-5
                  bg-white/30 rounded"
              >
                {imgList.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    onClick={() =>
                      setImageId(item.id == 1 ? pz1 : item.id == 2 ? pz2 : pz3)
                    }
                    className="w-[80px] h-[80px] object-contain inline-block cursor-pointer
                          hover:scale-105 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
