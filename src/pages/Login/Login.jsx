import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/assets/logo.png'
const Login = () => {
  const [signState, setSignState] = useState('Sign In')

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==='Sign Up'? <input type="text" placeholder='Your Name' /> : <></>
          }
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          <div className="form-switch">
            {signState==='Sign In'? <p>New to Netflix? <span onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span></p>: <p>Already have account?<span onClick={()=> {setSignState("Sign In")}}>Sign in Now</span></p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login