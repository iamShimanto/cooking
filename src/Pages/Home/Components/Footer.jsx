import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className='mt-[160px]'>
          <div className="container">
            <div className="row flex justify-between">
              <div className="logo">
                <Link to='/'><img src="images/Foodieland..png" alt="logo" /></Link>
                <p className='text-base font-normal font-inter text-black leading-[28px] opacity-[60%] mt-[16px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
              </div>
              <div className="links">
                <ul className='flex items-center gap-[60px]'>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><a className='recipe' href="#recipe">Recipes</a></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link to='/blog'>Blog</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link to='/contact'>Contact</Link></li>
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
