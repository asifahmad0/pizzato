import { useState } from 'react'
import flogo from "../assets/images/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'


function Footer() {

  return (
    <>
    <div className=' bg-gray-100 dark:bg-gray-950'>
        <div className=' max-w-[1200px] mx-auto'>
            <div className="grid md:grid-cols-3 py-5">
                <div className="py-8 px-4">
                    <h1 className='flex items-center font-bold text-xl
                     gap-4 sm:text-3xl text-justify sm:text-left'>
                    <img src={flogo} className='max-w-[50px]' alt="" />
                        PIZZATO</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Ipsum ad reprehenderit ut 
                        dolore tenetur dolorum! Unde quasi ipsa et? Magni?
                        </p>
                        <br />
                        
                        <div>
                            <FaLocationArrow />
                            <p>Pakur, Jharkhand</p>
                        </div>
                        <div className=" flex items-center gap-2 mt-3 ">
                            <FaMobileAlt />
                            <p>+91 7761917649</p>
                        </div>
                        <div className=" flex items-center gap-2 mt-3 ">
                            <a href=""><FaFacebook className='text-3xl' /></a>
                            <a href=""><FaInstagram className='text-3xl' /></a>
                            <a href=""><FaLinkedin className='text-3xl' /></a>
                        </div>      
                </div>

                <div className="grid grid-cols-2
                sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className='text-xl font-bold text-justify
                            sm:text-left mb-4'>Important Link</h1>
                            <ul className=' flex flex-col gap-3'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="py-8 px-4">
                            <h1 className='text-xl font-bold text-justify
                            sm:text-left mb-4'>Important Link</h1>
                            <ul className=' flex flex-col gap-3'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="py-8 px-4">
                            <h1 className='text-xl font-bold text-justify
                            sm:text-left mb-4'>Important Link</h1>
                            <ul className=' flex flex-col gap-3'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer
