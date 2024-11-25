import React from 'react'
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";

const CommonTryRecipe = ({image , details , time , name}) => {
  return (
    <>
        <div>
              <div>
                {image}
              </div>
              <h2 className='w-[290px] text-[18px] font-semibold font-inter text-black leading-[26px] tracking-[-4%] mt-[16px]'>{details}</h2>
              <div className='flex gap-6 mt-[24px]'>
                <div className='flex items-center gap-[10px]'>
                  <PiTimerFill className='text-2xl'/>
                  <p className='text-sm font-medium font-inter text-black tracking-[-2%] opacity-[60%]'>{time}</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <PiForkKnifeFill className='text-2xl'/>
                  <p className='text-sm font-medium font-inter text-black tracking-[-2%] opacity-[60%]'>{name}</p>
                </div>
              </div>
            </div>
    </>
  )
}

export default CommonTryRecipe
