import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      login
      <Link to={"/signup"} >signup</Link>
    </div>
  )
}

export default Login
