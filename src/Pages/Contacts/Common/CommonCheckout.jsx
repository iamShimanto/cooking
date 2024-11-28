import React from 'react'
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";

const CommonCheckout = ({image , body , time , name}) => {
  return (
    <>
        <div className='hover:scale-[1.05] duration-[0.4s]'>
          <div className='w-[290px]'>{image}</div>
          <p className='w-[290px] text-lg font-semibold font-inter text-black leading-[26px] tracking-[-4%] mt-4 mb-6'>{body}</p>
          <div className=' flex gap-6'>
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

export default CommonCheckout
