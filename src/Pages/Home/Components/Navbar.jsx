import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <nav className='pt-[40px]'>
        <div className="container">
          <div className="row flex justify-between items-center">
            <div className="logo ">
              <Link>
                <img src="images/Foodieland..png" alt="logo" />
              </Link>
            </div>
            <div className="links">
                <ul className='flex items-center gap-[60px]'>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%]'><Link>Home</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%]'><Link>Recipes</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%]'><Link>Blog</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%]'><Link>Contact</Link></li>
                  <li className='text-base font-medium font-inter text-black tracking-[-2%]'><Link>About us</Link></li>
                </ul>
            </div>
            <div className="social flex gap-[40.04px]">
                <Link><FaFacebookF/></Link>
                <Link><FaTwitter/></Link>
                <Link><FaInstagram/></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
