import React from 'react'

const TastyRecipe = ({image , body , name}) => {
  return (
    <>
        <div className='flex gap-6'>
          <div className="img">
            {image}
          </div>
            <div className='flex flex-col'>
            <h2 className='w-[196px] text-xl font-semibold font-inter text-black leading-[28px] tracking-[-4%] py-4'>{body}</h2>
            <p className='text-sm font-medium font-inter text-black text-opacity-[60%] tracking-[-2%]'>{name}</p>
            </div>
        </div>
    </>
  )
}

export default TastyRecipe
