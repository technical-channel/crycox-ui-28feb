import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomePage from '../view/Home/HomePage'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  return (
    <div>
      <Header/>
    <Outlet/>
      <Footer/>
    
    </div>
  )
}

export default MainLayout
