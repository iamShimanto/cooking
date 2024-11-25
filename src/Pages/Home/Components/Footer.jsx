import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className='mt-[160px]'>
          <div className="container">
            <div className="row flex justify-between">
              <div className="logo">
                <img src="images/Foodieland..png" alt="logo" />
                <p className='text-base font-normal font-inter text-black leading-[28px] opacity-[60%] mt-[16px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
              </div>
              <div className="links">
                <ul className='flex items-center gap-[60px]'>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link>Recipes</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link>Blog</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link>Contact</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link>About us</Link></li>
                </ul>
            </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
