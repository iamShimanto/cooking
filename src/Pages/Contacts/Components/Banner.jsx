import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='mt-[124px]'>
        <div className="container">
          <div className="row">
              <h1 className='text-[64px] font-semibold font-inter text-black tracking-[-4%] text-center pb-[80px]'>Contact us</h1>
              <div className='flex mt-20 gap-[150px]'>
                <div>
                <img className='w-[488px]' src="images/contact-banner.png" alt="banner" />
                </div>

                <form className=''>
                  <div className='flex gap-10'>
                    <div>
                      <p className='text-[12px] font-medium font-inter text-black text-opacity-[60%] leading-5 tracking-[8%] pb-3'>NAME</p>
                      <input className='w-[400px] h-[60px] border-[1px] border-black border-opacity-[10%] rounded-[16px] outline-none pl-5 text-sm font-normal font-inter text-black text-opacity-[60%] leading-6 tracking-[-2%]' type="text" placeholder='Enter your name...'/>
                    </div>
                    <div>
                      <p className='text-[12px] font-medium font-inter text-black text-opacity-[60%] leading-5 tracking-[8%] pb-3'>EMAIL ADDRESS</p>
                      <input className='w-[400px] h-[60px] border-[1px] border-black border-opacity-[10%] rounded-[16px] outline-none pl-5 text-sm font-normal font-inter text-black text-opacity-[60%] leading-6 tracking-[-2%]' type="email" placeholder='Your email address...' />
                    </div>
                  </div>
                  <div className='flex gap-10 mt-6'>
                    <div>
                      <p className='text-[12px] font-medium font-inter text-black text-opacity-[60%] leading-5 tracking-[8%] pb-3'>SUBJECT</p>
                      <input className='w-[400px] h-[60px] border-[1px] border-black border-opacity-[10%] rounded-[16px] outline-none pl-5 text-sm font-normal font-inter text-black text-opacity-[60%] leading-6 tracking-[-2%]' type="text" placeholder='Enter subject...'/>
                    </div>
                    <div>
                    <option>Advertising</option>

                    <select className='w-[400px] h-[60px] border-[1px] border-black border-opacity-[10%] rounded-2xl outline-none text-sm font-normal font-inter text-black text-opacity-[60%] leading-[24px] tracking-[-2%] pl-5'>
                      <option>Advertising</option>
                      <option>Advertising</option>
                      <option>Advertising</option>
                      <option>Advertising</option>
                      <option>Advertising</option>
                    </select>
                    </div>
                  </div>
                  <div className='mt-6'>
                  <p className='text-[12px] font-medium font-inter text-black text-opacity-[60%] leading-5 tracking-[8%] pb-3'>SUBJECT</p>
                  <input className='w-[840px] h-[200px] rounded-2xl border-[1px] border-black border-opacity-[10%] pl-[10px] pb-[156px] text-sm font-normal font-inter text-black text-opacity-[60%] leading-6 tracking-[-2%] outline-none' type="text" placeholder='Enter your messages...'/>
                  </div>
                  <div className='pt-12'>
                    <button className='w-[180px] h-[64px] rounded-2xl bg-black text-white text-base font-semibold font-inter leading-6 tracking-[-2%] flex justify-center items-center hover:bg-[#9694FF] hover:text-white duration-[0.4s] hover:scale-[1.07]'>Submit</button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner

