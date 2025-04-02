import { useState } from 'react'
import Slider from "react-slick";
import clint1 from "../assets/images/pic-1.png"
import clint2 from "../assets/images/pic-2.png"
import clint3 from "../assets/images/pic-3.png"
function Review() {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidersToShow:1,
        slidersToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
    };

    const reviewData = [
        {
            id:1,
            name:"Asif Ahmad",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis voluptates accusantium quos excepturi est? Aspernatur reprehenderit ut hic beatae.",
            img: clint1

        },
        {
            id:1,
            name:"Sana Ahmad",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis voluptates accusantium quos excepturi est? Aspernatur reprehenderit ut hic beatae.",
            img: clint2

        },
        {
            id:1,
            name:"Afreen Ahmad",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis voluptates accusantium quos excepturi est? Aspernatur reprehenderit ut hic beatae.",
            img: clint2

        },
        {
            id:1,
            name:"Abhisek Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis voluptates accusantium quos excepturi est? Aspernatur reprehenderit ut hic beatae.",
            img: clint3

        },
        {
            id:1,
            name: "Prem Kahar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis voluptates accusantium quos excepturi est? Aspernatur reprehenderit ut hic beatae.",
            img: clint1

        },
    ]

  return (
    <>
     <div className='pt-4 md:pt-0'>
        <div className="container">
            {/* Service Header Section */}
        <div className=" text-center md-20 max-w-[400px] mx-auto">
          <p className='text-sm bg-clip-text text-transparent
           bg-gradient-to-r from-[#ffc001] to-[#ff9c01]'>Best Reviews</p>
          <h2 className='text-3xl font-bold'>Reviews</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Autem, placeat voluptates laboriosam tenetur porro quidem
              sequi pariatur inventore,</p>
        </div>
        {/* Reviews Card Section */}
        <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
            {
                reviewData.map(({id, name, text, img})=>{
                    return (
                        <div key={id} className="my-6">
                            <div className=" flex flex-col justify-center items-center gap-4 text-center shadow-lg mx-4
                            p-6 rounded-xl bg-[#ffc001]/10 dark:bg-gray-800 dark:hover:bg-[#ffc001]
                          hover:bg-[#ffc001] hover:text-white duration-300 relative">
                                <img src={img} alt="" className='w-[50px]
                                rounded-full block mx-auto' />
                                <h1 className='text-xl font-bold dark:text-white'>{name}</h1>
                                <p className='text-gray-500 text-sm'>{text}</p>
                                <p className='text-black/20 text-9xl font-serif absolute
                                top-0 right-0'>,,</p>
                            </div>
                        </div>
                    )
                })
            }
            </Slider>
        </div>
        </div>
     </div>
    </>
  )
}

export default Review
