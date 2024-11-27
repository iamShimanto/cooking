import React from 'react'

const Inbox = () => {
  return (
    <>
      <section className="mt-40">
        <div className="container">
          <div className="row relative">
            <img className='w-[1520px]' src="images/inbox.png" alt="inbox banner" />
            <h2 className="absolute top-[80px] left-[465.5px] text-[48px] font-semibold font-inter text-black tracking-[-4%]">Deliciousness to your inbox</h2>
            <p className='w-[620px] absolute top-[162px] left-[450px] text-center text-base font-normal font-inter text-black leading-[28px] opacity-[60%] '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className='w-[480px] h-[80px] absolute top-[282px] left-[520px] bg-white rounded-[24px] flex justify-between items-center pl-8 pr-[10px]'>
              <input className='text-sm font-medium font-inter text-black tracking-[-2%] outline-none w-full' type="email" placeholder='Your email address...'/>
              <button className='w-[160px] h-[60px] bg-black text-white rounded-[16px] text-base font-semibold font-inter text-white tracking-[-2%] hover:bg-[#9694FF] hover:text-white duration-[0.4s]'>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inbox
