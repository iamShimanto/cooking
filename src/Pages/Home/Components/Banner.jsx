import React from 'react'
import { Link } from 'react-router-dom'
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { TbPlayerPlayFilled } from "react-icons/tb";



const Banner = () => {
  return (
    <>
      <section className='mt-[80px]'>
        <div className="container">
          <div className="row flex">
            <div className="text bg-[#E7FAFE] rounded-tl-[20px] rounded-bl-[20px] p-[50px] pr-[160px] pt-[70px]">
              <img src="images/banner1.png" alt="banner" />
              <h1 className='w-[520px] text-[64px] font-semibold font-inter text-black tracking-[-4%] pt-[32px] pb-[24px]'>Spicy delicious chicken wings</h1>
              <p className='w-[520px] text-base font-normal font-inter text-[#000000] leading-[28px] opacity-[60%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
              <div className='flex mt-[30px] mb-[119px] gap-4'>
                <div className='flex items-center py-[8px] px-[16px] bg-[#E5E1DA] rounded-[30px]'>
                  <PiTimerFill />
                  <p className='text-black '>30 Minutes</p>
                </div>
                <div className='flex items-center py-[8px] px-[16px] bg-[#E5E1DA] rounded-[30px]'>
                  <PiForkKnifeFill/>
                  <p>Chicken</p>
                </div>
              </div>
              <div className='flex justify-between'>                
                <div className='flex gap-4'>
                  <img src="images/john.png" alt="john" />
                  <div>
                    <h2 className='text-base font-bold font-inter text-black tracking-[-2%] pb-[8px]'>John Smith</h2>
                    <p className='text-[14px] font-medium font-inter text-black tracking-[-2%] opacity-[60%]'>15 March 2022</p>
                  </div>
                </div>
              <div className='flex gap-[15px] items-center py-[18px] px-[36px] bg-black rounded-[16px] text-white hover:text-black hover:bg-gray-500 duration-[0.4s] hover:scale-[1.07]'>
                <div className='text-[14px] font-semibold font-inter tracking-[-2%] '>
                <Link>View Recipes</Link>
                </div>
                <div className='text-white'>
                <TbPlayerPlayFilled />
                </div>
              </div>
              </div>             
            </div>
            <div className="img relative">
              <img className='w-[850px]' src="images/banner.png" alt="banner" />
              <img className='absolute top-[50px] left-[-50px]' src="images/Badge.png" alt="badge" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
