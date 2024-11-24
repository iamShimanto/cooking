import React from 'react'
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";

const CommonRecipe = ({image , details , time , name}) => {
  return (
    <>
      <div className='relative'>
              <img src="images/food-bg.png" alt="bg" />
              <div className='absolute bottom-[168px] left-[16px]'>
                {image}
              </div>
              <h2 className='w-[352px] text-[24px] font-semibold font-inter text-black leading-[32px] tracking-[-4%] absolute bottom-[80px] left-[24px]'>{details}</h2>
              <div className='flex gap-6 absolute bottom-[32px] left-[24px]'>
                <div className='flex items-center gap-[10px]'>
                  <PiTimerFill/>
                  <p className='text-sm font-medium font-inter text-black tracking-[-2%] opacity-[60%]'>{time}</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <PiForkKnifeFill/>
                  <p className='text-sm font-medium font-inter text-black tracking-[-2%] opacity-[60%]'>{name}</p>
                </div>
              </div>
            </div>
    </>
  )
}

export default CommonRecipe
