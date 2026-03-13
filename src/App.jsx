import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
      <Navbar />
    
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>

      </Routes>
      <Footer />


    </>
  )
}

export default App