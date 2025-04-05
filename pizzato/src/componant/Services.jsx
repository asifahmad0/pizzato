import React, { useState } from 'react'
import pas1 from "../assets/images/pas1.png"
import pz1 from "../assets/images/p1.png"
import pz2 from "../assets/images/p2.png"
import pz3 from "../assets/images/p3.png"
import { motion } from 'framer-motion'
function Services() {

  const[img, setImg]= useState(pz1)

const ServiceCard =[
  {
    id:1,
    img:pz1,
    name:'Chicken Tikkar Pizza',
    des:"Chicken pizza is a mix vegitable pizza with cheesh"
     },
  {
    id:2,
    img:pz3,
    name:'Creem Pizza',
    des:"Creem Pazza is a mix vegitable with cheesh and creem"
  },
  {
    id:3,
    img:pz2,
    name:'Veg Overload Pizza',
    des:"Veg overloaded pizza is a mix vegitable pizza with cheesh"
 },
]


  return (
    <div className='py-10 ' >
      <div className="container ">
        {/* Service Header Section */}
        <motion.div
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{delay:1}}
        className=" text-center md-20 max-w-[400px] mx-auto">
          <p className='text-sm bg-clip-text text-transparent
           bg-gradient-to-r from-[#ffc001] to-[#ff9c01]'>Our Services</p>
          <h2 className='text-3xl font-bold'>Services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Autem, placeat voluptates laboriosam tenetur porro quidem
              sequi pariatur inventore,</p>
        </motion.div>
        {/* Service Card Section */}
        <div className='mt-14'>
          <div className=' mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          md:gap-5  gap-14 place-items-center'>
          {
            ServiceCard.map(
              ({id, img, name, des})=>{
                return <div key={id} 
                className='max-w-[300px] group rounded-2xl bg-white
                dark:bg-gray-800 hover:bg-[#ffc001] hover:text-white duration-300 p-4 shadow-xl'>
                  <div className='h-[150px]'>
                    <img className='max-w-[200px]  mx-auto block 
                    transform -translate-y-14 group-hover:scale-105 
                    group-hover:rotate-6 duration-300' src={img}/>
                  </div>
                  <div className='text-center'>
                    <h1 className='text-xl font-bold dark:text-white'>{name}</h1> 
                    <p className='group-hover:text-white duration-300
                     text-gray-500 text-sm line-clamp-2'>{des}</p> 
                  </div>
                </div>
              })}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Services
