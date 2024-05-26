import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <Link to={"/"} > Home</Link>
        <Link to={"/menu"}>menu</Link>
        <Link to={"/basket"}>basket</Link>
        <Link to={"/login"}>login</Link>
    </div>
  )
}

export default NavBar
