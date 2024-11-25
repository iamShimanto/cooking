import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Categories from './Components/Categories'
import Recipes from './Components/Recipes'
import Chef from './Components/Chef'
import CheckOut from './Components/CheckOut'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Categories/>
      <Recipes/>
      <Chef/>
      <CheckOut/>
    </>
  )
}

export default Home
