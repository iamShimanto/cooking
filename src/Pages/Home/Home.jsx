import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Categories from './Components/Categories'
import Recipes from './Components/Recipes'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Categories/>
      <Recipes/>
    </>
  )
}

export default Home
