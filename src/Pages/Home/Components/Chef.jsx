import React from 'react'
import { Link } from 'react-router-dom'

const Chef = () => {
  return (
    <>
        <section className='mt-[143px]'>
          <div className="container">
            <div className="row flex justify-evenly">
              <div className="text pt-[169px]">
                <h2 className='w-[526px] text-[48px] font-semibold font-inter text-black tracking-[-4%]'>Everyone can be a
                chef in their own kitchen</h2>
                <p className='w-[508px] text-base font-normal font-inter text-black leading-[28px] opacity-[60%] pt-[24px] pb-[72px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className='w-[180px] h-[60px] py-[18px] px-[51px] bg-black rounded-[16px] text-white hover:text-black hover:bg-gray-500 duration-[0.4s] hover:scale-[1.07]'>
                  <Link className='text-sm font-semibold font-inter tracking-[-2%]'>Learn More</Link>
                </div>
              </div>
              <div className="img">
                <img src="images/chef.png" alt="chef" />
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Chef
