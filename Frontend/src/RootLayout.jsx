import React from 'react'
import NavBar from './components/AllComponents/NavBar/NavBar'
import Footer from './components/AllComponents/Footer/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
    <NavBar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default RootLayout