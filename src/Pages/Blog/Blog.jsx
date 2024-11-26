import React from 'react'
import Navbar from '../Home/Components/Navbar'
import Banner from './Components/Banner'
import Recipes from './Components/Recipes'
import Inbox from '../Home/Components/Inbox'
import Footer from '../Home/Components/Footer'

const Blog = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Recipes/>
      <Inbox/>
      <Footer/>
    </>
  )
}

export default Blog
