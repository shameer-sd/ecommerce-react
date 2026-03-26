import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './pages/ProtectedRoute'
import NotFound from './pages/NotFound'
import ProfilePage from './pages/ProfilePage'
import ProductDetails from './pages/ProductDetails'

const Mainlayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>)

const Authlayout = () => (
  <>
    <Outlet />
    <Footer />
  </>

)
const App = () => {
  return (
    <>

      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile"element={<ProfilePage/>}/>
          <Route path="/product/:id"element={<ProductDetails/>}/>
        </Route>

        <Route element={<Authlayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path='*'element={<NotFound/>}/>


      </Routes>



    </>
  )
}

export default App