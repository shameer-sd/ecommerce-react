import React from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Hero from '../components/home/Hero'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FeaturedProducts/>
    <Footer/>
    </>
  )
}

export default Home