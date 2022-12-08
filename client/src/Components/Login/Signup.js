import React from 'react'
import Cross from './style/Cross'
import Signup_design from './style/Signup_design'
import Signup_input from './Signup_input'
import { Link, useNavigate } from "react-router-dom"

function Login() {
  return (
    <div className='login'>
      <div className='login-container'>
        <Cross />
        <div className='login-left'>
          <div className='login-det-container'>
            <p className='login-head'>Sign Up</p>
            <p className='login-text'>Already a User?&nbsp;
              <Link to="/login" id='signup-link'>Sign In</Link>
            </p>
          </div>
          <Signup_input />
        </div>
        <div className='login-right'>
          <Signup_design />
        </div>
      </div>
    </div>
  )
}

export default Login