import React from 'react'
import { Link } from 'react-router-dom'

const CheckOut = () => {
  return (
    <>
      <section className='mt-[160px] bg-[#E7F9FD]'>
        <div className="container">
          <div className="row">
            <h2 className='mt-[80px] text-[48px] font-semibold font-inter text-black tracking-[-4%] text-center'>Check out @foodieland on Instagram</h2>
            <p className="w-[840px] text-base font-normal font-inter text-black leading-[28px] opacity-[60%] text-center mt-[24px] mx-auto">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          </div>

          {/* ====================start==================== */}
              <div>
                {/* ===============head================ */}
                <div className='flex gap-[7.73px]'>
                  <img className='w-[33.75px]' src="images/Oval.png" alt="logo" />
                  <div>
                    <Link className='text-[10px] font-inter font-semibold text-[#262626]'>Foodieland.</Link>
                    <p className='text-[8.51px] font-normal font-inter text-[#262626] tracking-[0.05px] mt-[0.69px]'>Tokyo , Japan</p>
                  </div>
                </div>
                {/* ===============head================ */}
                <div className="img">
                  <img src="images/insta-img.png" alt="insta" />
                </div>
              </div>

          {/* ====================end ======================= */}
        </div>
      </section>
    </>
  )
}

export default CheckOut
