import { useState } from 'react'
import gImg from "../assets/images/gallery1.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'



function Banner() {

  return (
    <>
    <div className="min-h-[500px] md:mt-4">
        <div className='md:mr-10'>
            <div data-aos="slide-up" 
            data-aos-duration='300'
            className="contauner">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* banner image section */}
                    <div>
                        <img src={gImg} alt=""
                        className='max-w-[400px] w-fill mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]' />
                    </div>
                    {/* banner text section */}
                    <div className=" p-4 flex flex-col justify-center gap-6 sm:pt-0">
                        <h1 className='text-3xl sm:text-4xl font-bold'>Lorem, ipsum dolor</h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Veniam sed deserunt, ut non vel adipisci error magni enim odit 
                            fuga doloremque,
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Suscipit voluptatem tempora optio sint, placeat exercitationem 
                            quibusdam minima! Consequatur maiores similique eaque enim harum,
                             dolores recusandae quae, praesentium, quidem facere odio?
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                             Explicabo eos deleniti nihil exercitationem vel aperiam distinctio 
                             ut doloribus quibusdam consequuntur?
                            </p>
                            <div>
                                <div className='flex gap-4 justify-center sm:justify-normal'>
                                    <GrSecure className='text-4xl h-20 w-20 shadow-sm
                                    p-5 rounded-full bg-violet-200 dark:bg-violet-400 ' />

                                    <IoFastFood className='text-4xl h-20 w-20 shadow-sm
                                    p-5 rounded-full bg-orange-200 dark:bg-orange-400 ' />

                                    <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm
                                    p-5 rounded-full bg-green-200 dark:bg-green-400 ' />
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
     
    </>
  )
}

export default Banner