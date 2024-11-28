import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";



const CheckOut = () => {
  return (
    <>
      <section className='mt-[160px] bg-[#E7F9FD] pb-[80px]'>
        <div className="container">
          <div className="row">
            <h2 className='mt-[80px] text-[48px] font-semibold font-inter text-black tracking-[-4%] text-center pt-[80px]'>Check out @foodieland on Instagram</h2>
            <p className="w-[840px] text-base font-normal font-inter text-black leading-[28px] opacity-[60%] text-center mt-[24px] mx-auto">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className="checkout flex justify-evenly mt-[80px] ">
              <img className='hover:scale-[1.07] duration-[0.4s] rounded-[14px]' src="images/Post1.png" alt="post" />
              <img className='hover:scale-[1.07] duration-[0.4s] rounded-[14px]' src="images/Post2.png" alt="post" />
              <img className='hover:scale-[1.07] duration-[0.4s] rounded-[14px]' src="images/Post3.png" alt="post" />
              <img className='hover:scale-[1.07] duration-[0.4s] rounded-[14px]' src="images/Post4.png" alt="post" />
            </div>
            <div className='flex items-center gap-[16.96px] w-[234px] h-[60px] rounded-[15px] bg-black px-[32px] py-[19px] mx-auto mt-[80.56px] text-white hover:bg-[#CB9DF0] hover:text-black duration-[0.4s] hover:scale-[1.07] duration-[0.4s]'>
              <div className='text-sm font-inter font-semibold '>
                  <Link>Visit Our Instagram</Link>
              </div>
              <FaInstagram className='text-[22px] '/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CheckOut
