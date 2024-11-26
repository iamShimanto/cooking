import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='mt-[120px]'>
        <div className="container">
          <div className="row">
              <h1 className='text-[64px] font-semibold font-inter text-black tracking-[-4%] text-center'>Blog & Article</h1>
              <p className='w-[840px] text-base font-normal font-inter text-black leading-[28px] opacity-[60%] mx-auto mt-[24px] mb-[80px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              <div className='w-[700px] h-[80px] mx-auto border-[1px] border-black border-opacity-[10%] flex justify-between items-center pl-[32px] pr-[10px] rounded-[30px]'>
                <input className='text-sm font-medium font-inter text-black tracking-[-2%] text-opacity-[40%] w-full outline-none' type="text" placeholder='Search article, news or recipe...'/>
                <button className='w-[160px] h-[60px] px-[57px] py-[22px] bg-black text-white rounded-[16px] hover:bg-[#9694FF] hover:text-white duration-[0.4s] text-sm font-inter font-semibold tracking-[-2%] hover:scale-[1.07]'>Search</button>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
