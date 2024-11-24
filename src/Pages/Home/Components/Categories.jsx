import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
      <section className='mt-[162px]'>
        <div className="container">
          <div className="row">
            <div className='flex justify-between pb-[80px]'>
              <h2 className='text-[48px] font-semibold font-inter text-black tracking-[-4%]'>Categories</h2>
              <div className='w-[205px] h-[60px] px-[27px] py-[21px] rounded-[16px] bg-[#E7FAFE] text-base font-semibold font-inter text-black tracking-[-2%]'><Link>View All Categories</Link></div>
            </div>
            <div className='flex justify-between'>
              <Link><img src="images/categories1.png" alt="categories" /></Link>
              <Link><img src="images/categories2.png" alt="categories" /></Link>
              <Link><img src="images/categories3.png" alt="categories" /></Link>
              <Link><img src="images/categories4.png" alt="categories" /></Link>
              <Link><img src="images/categories5.png" alt="categories" /></Link>
              <Link><img src="images/categories6.png" alt="categories" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories
