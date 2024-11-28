import React from 'react'

const CommonBlogRecipe = ({image , head , body , personImg , personName , date}) => {
  return (
    <>
      <div className='hover:scale-[1.07] duration-[0.4s]'>
      <div className='flex gap-[40px]'>
                  <div className="img ">
                    {image}
                  </div>
                  <div className="text">
                    <h2 className='text-[24px] font-semibold font-inter text-black tracking-[-4%] pt-[13px]'>{head}</h2>
                    <p className='w-[510px] text-base font-normal font-inter text-black leading-[28px] text-opacity-[60%] mt-[16px] mb-[32px]'>{body}</p>
                    <div className='flex gap-12 items-center'>
                      <div className='flex gap-4 items-center'>
                        {personImg}
                        <p className='text-base font-bold font-inter text-black tracking-[-2%]'>{personName}</p>
                      </div>
                      <p className='text-sm font-medium font-inter text-black text-opacity-[60%] tracking-[-2%]'>{date}</p>
                    </div>
                  </div>
                </div>
      </div>
    </>
  )
}

export default CommonBlogRecipe
