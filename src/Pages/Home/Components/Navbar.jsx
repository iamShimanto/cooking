import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <nav className='pt-[40px] px-5'>
        <div className="container">
          <div className="row flex justify-between items-center">
            <div className="logo ">
              <Link to='/'>
                <img src="images/Foodieland..png" alt="logo" />
              </Link>
            </div>
            <div className="links">
                <ul className='flex items-center gap-[60px]'>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link to='/'>Home</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link>Recipes</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link to='/blog'>Blog</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link>Contact</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%] px-5 py-3 hover:bg-black hover:text-white rounded-[10px] duration-[0.4s]'><Link>About us</Link></li>
                </ul>
            </div>
            <div className="social flex gap-[40.04px]">
                <Link><FaFacebookF className='hover:scale-[1.1] duration-[0.4s]'/></Link>
                <Link><FaTwitter className='hover:scale-[1.1] duration-[0.4s]'/></Link>
                <Link><FaInstagram className='hover:scale-[1.1] duration-[0.4s]'/></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
