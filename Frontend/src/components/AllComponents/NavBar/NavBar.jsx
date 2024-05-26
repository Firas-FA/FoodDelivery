import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBarStyle.css'


const NavBar = () => {
  return (
    <div className='d-flex bg-dark navbar justify-content-center gap-4'>
        <NavLink to={"/"} > Home</NavLink>
        <NavLink to={"/menu"}>menu</NavLink>
        <NavLink to={"/basket"}>basket</NavLink>
        <NavLink to={"/login"}>login</NavLink>
    </div>
  )
}

export default NavBar
