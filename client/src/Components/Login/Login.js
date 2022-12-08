import React from 'react'
import Cross from './style/Cross'
import Login_design from './style/Login_design'
import Login_input from './Login_input'
import { Link, useNavigate } from "react-router-dom"

function Login() {
  return (
    <div className='login'>
      <div className='login-container'>
        <Cross />
        <div className='login-left'>
          <div className='login-det-container'>
            <p className='login-head'>Sign In</p>
            <p className='login-text'>New User?&nbsp;
              <Link to="/signup" id='signup-link'>Create an account</Link>
            </p>
          </div>
          <Login_input />
        </div>
        <div className='login-right'>
          <Login_design />
        </div>
      </div>
    </div>
  )
}

export default Login