import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer.jsx'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer></Footer>
    </>
  )
}

export default Layout